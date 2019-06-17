import React from 'react'
import { View, ScrollView, SafeAreaView } from 'react-native'
import { ATRowView, ATLoading, ATSpin } from 'react-native-atlas'
import { AppStyles } from '../../Theme'
import { Header, Card, APICard } from '../../Components'
import { Const } from '../../Config'
// import { Images } from '../../Resources'

const url = Const.url.loading

class LibraryLoading extends React.Component {
  render () {
    return (
      <SafeAreaView style={AppStyles.screen}>
        <Header title="ATLoading" />
        <View style={AppStyles.body}>
          <ScrollView>
            <Card title="不同大小" api={url.size}>
              <ATRowView>
                <ATLoading size="small" />
                <ATLoading size="large" />
                <ATLoading size={50} />
              </ATRowView>
            </Card>
            <Card title="不同颜色" api={url.color}>
              <ATRowView>
                <ATLoading color="#727d84" />
                <ATLoading color="#2db450" />
                <ATLoading color="#e48a03" />
              </ATRowView>
            </Card>
            <Card title="加载文案" api={url.title}>
              <ATRowView>
                <ATLoading title="拼命加载中" />
                <ATLoading title="拼命加载中" color="#e48a03" />
              </ATRowView>
            </Card>
            <Card title="自定义图案" api={url.indicator}>
              <ATRowView>
                {/* <ATLoading
                  indicator={
                    <Image
                      source={Images.loading}
                      style={{ width: 36, height: 36 }}
                    />
                  }
                /> */}
                <ATLoading title="拼命加载中" indicator={<ATSpin size={8} />} />
              </ATRowView>
            </Card>
            <APICard api={url.api} />
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}

export default LibraryLoading
