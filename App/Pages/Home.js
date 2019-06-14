import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { ATText, ATTouchable, ATRowView } from 'react-native-atlas'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Images, Iconfont } from '../Resources'
import { AppStyles, Colors } from '../Theme'

const Text = ({ children, ...props }) => (
  <ATText color={Colors.primary} size={16} {...props}>
    {children}
  </ATText>
)
class Home extends React.Component {
  render () {
    return (
      <View style={AppStyles.screen}>
        <View style={[AppStyles.flexCenter, { flex: 1 }]}>
          <Image source={Images.atlas} style={Styles.logo} />
          <Text>欢迎使用 react-native-atlas</Text>
          <Text>当前版本：1.0.0</Text>
        </View>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  logo: {
    height: 200,
    width: 200
  },
  mt20: {
    marginTop: 20
  },
  link: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 10
  }
})

export default Home
