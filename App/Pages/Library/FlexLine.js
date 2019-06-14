import React from 'react'
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { ATFlexLine, ATText, ATTouchable } from 'react-native-atlas'
import { Header, Card, APICard } from '../../Components'
import { AppStyles, Colors } from '../../Theme'
import { Const } from '../../Config'
import { Iconfont } from '../../Resources'

const url = Const.url.flexLine

class LibraryFlexLine extends React.Component {
  state = {
    time: 0
  }

  render () {
    return (
      <SafeAreaView style={AppStyles.screen}>
        <Header title="FlexLine" />
        <View style={AppStyles.body}>
          <ScrollView>
            <Card title="任意个数" api={url.nums}>
              <ATFlexLine data={['数据1', '数据2', '数据3']} />
              <ATFlexLine
                data={['数据1', '数据2', '数据3', '数据4', '数据5']}
              />
            </Card>
            <Card title="分割线及高度" api={url.divide}>
              <ATFlexLine
                data={['数据1', '数据2', '数据3']}
                height={100}
                divide
              />
            </Card>
            <Card title="自定义渲染" api={url.render}>
              <ATFlexLine
                height={100}
                divide
                data={[
                  {
                    name: '主页',
                    icon: 'atlas'
                  },
                  {
                    name: '组件库',
                    icon: 'components'
                  },
                  {
                    name: '我的',
                    icon: 'mine'
                  }
                ]}
                renderItem={({ name, icon }) => (
                  <ATTouchable style={[AppStyles.flexCenter, AppStyles.fullBox]} onPress={() => {}}>
                    <View style={AppStyles.flexCenter}>
                      <Iconfont name={icon} color={Colors.primary} size={30} />
                      <ATText
                        style={AppStyles.mt10}
                        size={14}
                        color={Colors.primary}
                      >
                        {name}
                      </ATText>
                    </View>
                  </ATTouchable>
                )}
              />
            </Card>
            <APICard api={url.api} />
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}

const Styles = StyleSheet.create({})

export default LibraryFlexLine
