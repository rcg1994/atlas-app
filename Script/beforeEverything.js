var program = require('commander')
var shell = require('shelljs')
var fs = require('fs')

var styles = {
  'white': ['\x1B[37m', '\x1B[39m'],
  'green': ['\x1B[32m', '\x1B[39m'],
  'yellow': ['\x1B[33m', '\x1B[39m']
}

program.action(function () {
  console.log(styles.yellow[0], 'custom-theme')
  // console.log(styles.yellow[0], 'change some code before everything')
  // console.log(styles.yellow[0], 'change ATInput start')
  // shell.ls('./node_modules/aloestec-rn-components/lib/components/Input.js').forEach(function (file) {
  //   shell.sed('-i', /shouldComponentUpdate/, 'deleteFunctionNotUseful', file)
  // })
  // console.log(styles.green[0], 'change some code before everything done')
  shell.exec('node App/Theme/custom-theme.js')
  // fs.copyFile('./script/RCTBaseTextInputView.m', './node_modules/react-native/Libraries/Text/TextInput/RCTBaseTextInputView.m', (err) => {
  //   if (err) throw err
  //   console.log(styles.green[0], 'RCTBaseTextInputView.m copied success')
  //   console.log(styles.white[0], '')
  // })
  console.log(styles.white[0], '')
})

program.parse(process.argv)
