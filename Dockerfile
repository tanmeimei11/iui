FROM node:7.9.0-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
		bzip2 \
		unzip \
		xz-utils \
	&& rm -rf /var/lib/apt/lists/*

RUN echo 'deb http://deb.debian.org/debian jessie-backports main' > /etc/apt/sources.list.d/jessie-backports.list

# Default to UTF-8 file.encoding
ENV LANG C.UTF-8

# add a simple script that can auto-detect the appropriate JAVA_HOME value
# based on whether the JDK or only the JRE is installed
RUN { \
		echo '#!/bin/sh'; \
		echo 'set -e'; \
		echo; \
		echo 'dirname "$(dirname "$(readlink -f "$(which javac || which java)")")"'; \
	} > /usr/local/bin/docker-java-home \
	&& chmod +x /usr/local/bin/docker-java-home

ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64

ENV JAVA_VERSION 8u121
ENV JAVA_DEBIAN_VERSION 8u121-b13-1~bpo8+1

# see https://bugs.debian.org/775775
# and https://github.com/docker-library/java/issues/19#issuecomment-70546872
ENV CA_CERTIFICATES_JAVA_VERSION 20161107~bpo8+1

RUN set -x \
	&& apt-get update \
	&& apt-get install -y \
		openjdk-8-jdk="$JAVA_DEBIAN_VERSION" \
		ca-certificates-java="$CA_CERTIFICATES_JAVA_VERSION" \
	&& rm -rf /var/lib/apt/lists/* \
	&& [ "$JAVA_HOME" = "$(docker-java-home)" ]

# see CA_CERTIFICATES_JAVA_VERSION notes above
RUN /var/lib/dpkg/info/ca-certificates-java.postinst configure


RUN mkdir -p /usr/opt
WORKDIR /usr/opt/
# 下载 Selenium
# http://selenium-release.storage.googleapis.com/index.html
ENV SELENIUM_VERSION 3.3.1
RUN curl -SLO "http://selenium-release.storage.googleapis.com/3.3/selenium-server-standalone-$SELENIUM_VERSION.jar" 

# 下载 GeckoDriver
# https://github.com/mozilla/geckodriver/releases
ENV GECKO_DRIVER_VERSION 0.15.0
RUN curl -SLO "https://github.com/mozilla/geckodriver/releases/download/v$GECKO_DRIVER_VERSION/geckodriver-v$GECKO_DRIVER_VERSION-linux64.tar.gz" \
    && tar -xf "geckodriver-v$GECKO_DRIVER_VERSION-linux64.tar.gz" 

# 下载 ChromeDriver
# https://sites.google.com/a/chromium.org/chromedriver/downloads
ENV CHROME_DRIVER_VERSION 2.29
RUN curl -SLO "https://chromedriver.storage.googleapis.com/$CHROME_DRIVER_VERSION/chromedriver_linux64.zip" \
    && unzip "chromedriver_linux64.zip" 
# RUN apt-get update && apt-get install -y --no-install-recommends chromium
# RUN apk add --no-cache  --update chromium chromium-chromedriver

# 下载 Microsoft WebDriver (only win)
# ENV WEB_DRIVER_VERSION 7u121
# RUN curl -SLO "https://download.microsoft.com/download/3/4/2/342316D7-EBE0-4F10-ABA2-AE8E0CDF36DD/MicrosoftWebDriver.exe" \
#     && tar -xf "MicrosoftWebDriver.exe" 

ENV APP_HOME=/usr/src/app \
    MODULES_DIR=/usr/src    
ENV NODE_PATH=$MODULES_DIR/node_modules 

# 拷贝工作目录的依赖包,并且进行安装
COPY package.json $MODULES_DIR/package.json
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN \
  cd $MODULES_DIR && \ 
  cnpm install 

WORKDIR $APP_HOME
EXPOSE 8091


