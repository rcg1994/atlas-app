import React from 'react'
import { View, ScrollView, SafeAreaView } from 'react-native'
import { ATText } from 'react-native-atlas'
import { Header, Card, APICard } from '../../Components'
import { AppStyles, Colors } from '../../Theme'
import { Const } from '../../Config'

const url = Const.url.text

class LibraryText extends React.Component {
  state = {
    time: 0
  }

  render () {
    return (
      <SafeAreaView style={AppStyles.screen}>
        <Header title="ATText" />
        <View style={AppStyles.body}>
          <ScrollView>
            <Card title="标题" note="标题字体大小可以在Theme中设置默认值" api={url.text01}>
              <ATText h1>H1</ATText>
              <ATText h2>H2</ATText>
              <ATText h3>H3</ATText>
              <ATText h4>H4</ATText>
              <ATText h5>H5</ATText>
              <ATText h6>H6</ATText>
            </Card>
            <Card title="基本属性" note="基本属性可以在Theme中设置默认值" api={url.text02}>
              <ATText weight="bold">weight bold</ATText>
              <ATText color={Colors.primary}>color primary</ATText>
              <ATText size={24}>size 24</ATText>
              <ATText lineHeight={2}>设置line-height，实际得到的行高为line-height*font-size。当前示例的lineHeight=2</ATText>
            </Card>
            <APICard api={url.api} />
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}

export default LibraryText
