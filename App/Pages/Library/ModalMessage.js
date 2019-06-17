import React from 'react'
import { View, ScrollView, SafeAreaView } from 'react-native'
import { ATModalMessage, ATModalConfirm, ATButton } from 'react-native-atlas'
import Icon from 'react-native-vector-icons/FontAwesome'
import { AppStyles, Colors } from '../../Theme'
import { Header, Card, APICard } from '../../Components'
import { Const } from '../../Config'

const url = Const.url.modalMessage

class LibraryModalMessage extends React.Component {
  render () {
    return (
      <SafeAreaView style={AppStyles.screen}>
        <Header title="ATModalMessage/ATModalConfirm" />
        <View style={AppStyles.body}>
          <ScrollView>
            <Card title="信息弹窗" api={url.modalMessage01}>
              <ATButton
                ghost
                style={AppStyles.mt10}
                onPress={() =>
                  ATModalMessage({
                    title: '我是标题',
                    content: '我是内容',
                    okText: '朕知道了'
                  })
                }
              >
                信息提示
              </ATButton>

              <ATButton
                ghost
                style={AppStyles.mt10}
                onPress={() =>
                  ATModalMessage({
                    title: '提示',
                    content: '这是一个会自动关闭的信息',
                    okText: '点击主动关闭',
                    duration: 3000
                  })
                }
              >
                3s后自动关闭
              </ATButton>

              <ATButton
                ghost
                style={AppStyles.mt10}
                onPress={() =>
                  ATModalMessage({
                    title: null,
                    content: '这是一个没有标题的信息'
                  })
                }
              >
                隐藏标题
              </ATButton>

              <ATButton
                ghost
                style={AppStyles.mt10}
                onPress={() =>
                  ATModalMessage({
                    icon: (
                      <Icon name="thumbs-up" size={30} color={Colors.primary} />
                    ),
                    content: '这是一个带icon的信息'
                  })
                }
              >
                带图标的提示
              </ATButton>
            </Card>
            <Card title="确认弹窗" api={url.modalMessage02}>
              <ATButton
                ghost
                type="warning"
                style={AppStyles.mt10}
                onPress={() =>
                  ATModalConfirm({
                    title: '确认操作',
                    content: '确定要执行操作吗？',
                    onOk: () => {
                      ATModalMessage({
                        content: '选择了确认'
                      })
                    },
                    onCancel: () => {
                      ATModalMessage({
                        content: '选择了取消'
                      })
                    }
                  })
                }
              >
                可交互提示
              </ATButton>

              <ATButton
                type="danger"
                ghost
                style={AppStyles.mt10}
                onPress={() =>
                  ATModalConfirm({
                    title: '重要提示',
                    content: '确定要执行操作吗？',
                    buttonVertical: true,
                    divide: true,
                    buttons: [
                      {
                        title: '取消',
                        type: 'cancel',
                        onPress: () => {}
                      },
                      {
                        title: '稍后执行',
                        type: 'light',
                        color: 'red',
                        onPress: () => {}
                      },
                      {
                        title: '立即执行',
                        type: 'primary',
                        onPress: () => {}
                      }
                    ]
                  })
                }
              >
                自定义交互按钮
              </ATButton>
            </Card>
            <APICard api={url.api} />
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}

export default LibraryModalMessage
