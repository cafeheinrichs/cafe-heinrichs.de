/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
  "files": ["assets/**/*.css", "**/*.html", "assets/**/*.js"],
  "server": true,
  "proxy": false,
  "port": 44000,
  "ghostMode": {
    "clicks": false,
    "scroll": false,
    "location": false,
    "forms": {
      "submit": false,
      "inputs": false,
      "toggles": false
    }
  },
  "logLevel": "info",
  "logPrefix": "BS",
  "logConnections": false,
  "logFileChanges": true,
  "logSnippet": false,
  "open": false,
  "browser": "default",
  "xip": false,
  "hostnameSuffix": false,
  "notify": false,
  "scrollProportionally": true,
  "scrollThrottle": 0,
  "reloadDelay": 0,
  "injectChanges": true,
  "startPath": null,
  "minify": true,
  "host": null,
  "codeSync": true,
  "timestamps": true,
  "socket": {
    "path": "/browser-sync/socket.io",
    "clientPath": "/browser-sync",
    "namespace": "/browser-sync"
  },
  "debugInfo": true,
  // Change the default weinre port
  ui: {
    port: 44001,
    weinre: {
      port: 44002
    }
  }

};