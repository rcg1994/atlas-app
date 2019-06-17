import React from 'react'
import { View, ScrollView, SafeAreaView } from 'react-native'
import { ATModalLoading, ATButton } from 'react-native-atlas'
import { AppStyles } from '../../Theme'
import { Header, Card, APICard } from '../../Components'
import { Const } from '../../Config'

const url = Const.url.loading

class LibraryModalLoading extends React.Component {
  render () {
    return (
      <SafeAreaView style={AppStyles.screen}>
        <Header title="ATModalLoading" />
        <View style={AppStyles.body}>
          <ScrollView>
            <Card title="加载提示" api={url.size}>
              <ATButton
                ghost
                style={AppStyles.mt10}
                onPress={() => {
                  let modal = ATModalLoading({
                    content: '努力加载中...'
                  })
                  setTimeout(() => {
                    modal.close()
                  }, 3000)
                }}
              >
                自主关闭
              </ATButton>

              <ATButton
                ghost
                style={AppStyles.mt10}
                onPress={() =>
                  ATModalLoading({
                    content: '努力加载中...',
                    duration: 2000
                  })
                }
              >
                显示两秒后自动关闭
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
