module.exports = {
  'src_folders': ['test/e2e/specs'],
  'output_folder': 'test/e2e/reports',
  'selenium': {
    'start_process': true,
    'server_path': '/usr/opt/selenium-server-standalone-3.3.1.jar',
    'log_path': '',
    'host': '127.0.0.1',
    'port': 4444,
    'cli_args': {
      'webdriver.chrome.driver': '/usr/opt/chromedriver'
    }
  },

  'test_settings': {
    'default': {
      'selenium_host': '127.0.0.1',
      'selenium_port': 4444,
      'silent': true,
      'disable_colors': false,
      'screenshots': {
        'enabled': true,
        'on_failure': true,
        'on_error': false,
        'path': 'test/e2e/screenshots'
      }
    },
    'chrome': {
      'desiredCapabilities': {
        'browserName': 'chrome',
        'javascriptEnabled': true,
        'acceptSslCerts': true,
        'chromeOptions': {
          'args': ['--no-sandbox']
        }
      }
    }, 
    'phantomjs': {
      'desiredCapabilities': {
        'browserName': 'phantomjs',
        'javascriptEnabled': true,
        'acceptSslCerts': true
      }
    }
  }
}
