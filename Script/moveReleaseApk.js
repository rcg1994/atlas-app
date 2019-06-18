var fs = require('fs')

fs.rename(
  './app/build/outputs/apk/release/app-release.apk',
  '../app-release.apk',
  function (err) {
    if (err) throw err
  })
