var fs = require('fs')

fs.rename(
  './app/build/outputs/apk/staging/app-staging.apk',
  '../app-staging.apk',
  function (err) {
    if (err) throw err
  })
