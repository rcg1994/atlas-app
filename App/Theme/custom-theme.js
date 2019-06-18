const path = require('path')
const fs = require('fs')

const defaultTheme = require('react-native-atlas/lib/theme/default/Theme.js')
const customTheme = require('./Theme')
const defaultColors = require('react-native-atlas/lib/theme/default/Colors.js')
const customColors = require('./Colors')

const themePath = path.resolve(require.resolve('react-native-atlas'), '../theme/Theme.js')
const theme = Object.assign({}, defaultTheme, customTheme)
const colorsPath = path.resolve(require.resolve('react-native-atlas'), '../theme/Colors.js')
const colors = Object.assign({}, defaultColors, customColors)

if (fs.statSync(themePath).isFile()) {
  fs.writeFileSync(
    themePath,
    'module.exports = ' + JSON.stringify(theme)
  )
}
if (fs.statSync(colorsPath).isFile()) {
  fs.writeFileSync(
    colorsPath,
    'module.exports = ' + JSON.stringify(colors)
  )
}
