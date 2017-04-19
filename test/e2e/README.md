# e2e

```bash
docker build -t nightwatch:7 .
docker run -it --rm -v ${PWD}:/usr/tests nightwatch:7  sh
nightwatch
```