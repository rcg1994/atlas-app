import React from 'react'
import { View, ScrollView, SafeAreaView } from 'react-native'
import { ATModal, ATButton, ATText } from 'react-native-atlas'
import { AppStyles } from '../../Theme'
import { Header, Card, APICard } from '../../Components'
import { Const } from '../../Config'

const url = Const.url.modalLoading

class LibraryModalLoading extends React.Component {
  render () {
    return (
      <SafeAreaView style={AppStyles.screen}>
        <Header title="ATModalLoading" />
        <View style={AppStyles.body}>
          <ScrollView>
            <Card title="自定义弹出层" api={url.modalLoading01}>
              <ATButton
                ghost
                type="success"
                style={AppStyles.mt10}
                onPress={() => {
                  let modal = ATModal.modal({
                    render: () => (
                      <View
                        style={{
                          width: 300,
                          padding: 20,
                          borderRadius: 6,
                          backgroundColor: '#fff'
                        }}
                      >
                        <ATText size={22} color="#666">
                          这是一个自定义的弹窗
                        </ATText>
                        <ATText
                          size={18}
                          color="#999"
                          style={{ marginVertical: 20 }}
                        >
                          你可以在这实现任意的样式和逻辑，几乎可以满足日常的所有弹出层需求了
                        </ATText>
                        <ATButton
                          style={AppStyles.mt10}
                          onPress={() => {
                            modal.close()
                          }}
                        >
                          点击关闭
                        </ATButton>
                      </View>
                    )
                  })
                }}
              >
                自定义弹出层
              </ATButton>
            </Card>
            <APICard api={url.api} />
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}

export default LibraryModalLoading
