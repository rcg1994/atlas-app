import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import { ATHeader } from 'react-native-atlas'
// import { ifIphoneX } from 'react-native-iphone-x-helper'
// import { Colors } from '../Themes'
// import GlobalStyle from '../Themes/GlobalStyle'

class Header extends Component {
  render () {
    const { title, style, onBack, ...eProps } = this.props
    return <ATHeader
      title={title}
      fixStatusBar
      contentType='dark'
      //   statusBar={Colors.statusBar}
      //   style={[ifIphoneX({ height: 80 }, {}), style]}
      //   titleStyle={ifIphoneX({lineHeight: 40, alignSelf: 'flex-end'}, {})}
      onBack={() => {
        if (onBack) {
          onBack()
        } else {
          this.props.navigation.goBack(null)
        }
      }}
      {...eProps}
    />
  }
}

export default withNavigation(Header)
