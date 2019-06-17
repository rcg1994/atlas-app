import React from 'react'
import { View, ScrollView, SafeAreaView } from 'react-native'
import { ATModalSelect, ATButton } from 'react-native-atlas'
import Icon from 'react-native-vector-icons/FontAwesome'
import { AppStyles } from '../../Theme'
import { Header, Card, APICard } from '../../Components'
import { Const } from '../../Config'

const url = Const.url.loading

class LibraryModalSelect extends React.Component {
  render () {
    return (
      <SafeAreaView style={AppStyles.screen}>
        <Header title="ATModalSelect" />
        <View style={AppStyles.body}>
          <ScrollView>
            <Card title="选择弹窗" api={url.size}>
              <ATButton
                ghost
                style={AppStyles.mt10}
                onPress={() =>
                  ATModalSelect({
                    buttons: [
                      {
                        content: '特别关心',
                        onPress: () => {}
                      },
                      {
                        content: '屏蔽消息',
                        onPress: () => {}
                      },
                      {
                        content: '添加到黑名单',
                        contentTextStyle: {
                          color: '#999'
                        },
                        onPress: () => {}
                      }
                    ]
                  })
                }
              >选择弹窗</ATButton>

              <ATButton
                ghost
                style={AppStyles.mt10}
                onPress={() =>
                  ATModalSelect({
                    buttons: [
                      {
                        content: '我是男性',
                        left: <Icon name={'mars'} color="blue" size={16} />,
                        onPress: () => {}
                      },
                      {
                        content: '我是女性',
                        left: <Icon name={'venus'} color="pink" size={16} />,
                        onPress: () => {}
                      },
                      {
                        content: '我是中性',
                        left: <Icon name={'neuter'} size={16} />,
                        onPress: () => {}
                      }
                    ]
                  })
                }
              >带图标的选择弹窗</ATButton>

              <ATButton
                ghost
                style={AppStyles.mt10}
                onPress={() =>
                  ATModalSelect({
                    bottom: true,
                    buttons: [
                      {
                        content: '我是男性',
                        onPress: () => {}
                      },
                      {
                        content: '我是女性',
                        onPress: () => {}
                      }
                    ]
                  })
                }
              >自定义位置</ATButton>

              <ATButton
                ghost
                style={AppStyles.mt10}
                onPress={e => {
                  ATModalSelect(
                    {
                      float: true,
                      width: 150,
                      buttons: [
                        {
                          content: '我是男性',
                          onPress: () => {}
                        },
                        {
                          content: '我是女性',
                          onPress: () => {}
                        }
                      ]
                    },
                    e
                  )
                }}
              >是否悬浮</ATButton>

              <ATButton
                ghost
                style={AppStyles.mt10}
                onPress={() => {}}
                onLongPress={e => {
                  ATModalSelect(
                    {
                      float: true,
                      width: 150,
                      buttons: [
                        {
                          content: '我是男性',
                          onPress: () => {
                            console.log()
                          }
                        },
                        {
                          content: '我是女性',
                          onPress: () => {}
                        }
                      ]
                    },
                    e
                  )
                }
                }
              >长按触发</ATButton>
            </Card>
            <APICard api={url.api} />
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}

export default LibraryModalSelect
