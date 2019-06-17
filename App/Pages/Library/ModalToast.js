import React from 'react'
import { View, ScrollView, SafeAreaView } from 'react-native'
import { ATModalToast, ATButton } from 'react-native-atlas'
import { AppStyles } from '../../Theme'
import { Header, Card, APICard } from '../../Components'
import { Const } from '../../Config'

const url = Const.url.loading

class LibraryModalToast extends React.Component {
  render () {
    return (
      <SafeAreaView style={AppStyles.screen}>
        <Header title="ATModalToast" />
        <View style={AppStyles.body}>
          <ScrollView>
            <Card title="信息提示" api={url.size}>
              <ATButton
                ghost
                style={AppStyles.mt10}
                onPress={() =>
                  ATModalToast({
                    content: '系统异常提示（模拟）',
                    duration: 5000
                  })
                }
              >
                显示5秒后关闭
              </ATButton>

              <ATButton
                ghost
                style={AppStyles.mt10}
                onPress={() =>
                  ATModalToast({
                    content:
                      '这是一段较长内容的提示，这是一段较长内容的提示，这是一段较长内容的提示，这是一段较长内容的提示。'
                  })
                }
              >
                长内容
              </ATButton>

              <ATButton
                ghost
                style={AppStyles.mt10}
                onPress={() =>
                  ATModalToast({
                    content: '显示在中间的提示信息',
                    position: 'center'
                  })
                }
              >
                自定义位置
              </ATButton>
            </Card>
            <APICard api={url.api} />
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}

export default LibraryModalToast
