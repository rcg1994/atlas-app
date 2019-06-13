import React from 'react'
import { View, StyleSheet, ScrollView, Image } from 'react-native'
import { ATRowView, ATLoading, ATSpin } from 'react-native-atlas'
import { AppStyles } from '../../Theme'
import { Header, Card } from '../../Components'
import { Images } from '../../Resources'

class LibraryLoading extends React.Component {
  render () {
    return (
      <View style={AppStyles.screen}>
        <Header title="Loading" />
        <View style={AppStyles.body}>
          <ScrollView>
            <Card title="不同大小">
              <ATRowView>
                <ATLoading size="small" />
                <ATLoading size="large" />
                <ATLoading size={50} />
              </ATRowView>
            </Card>
            <Card title="不同颜色">
              <ATRowView>
                <ATLoading color="#727d84" />
                <ATLoading color="#2db450" />
                <ATLoading color="#e48a03" />
              </ATRowView>
            </Card>
            <Card title="加载文案">
              <ATRowView>
                <ATLoading title="拼命加载中" />
                <ATLoading title="拼命加载中" color="#e48a03" />
              </ATRowView>
            </Card>
            <Card title="自定义图案">
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
          </ScrollView>
        </View>
      </View>
    )
  }
}

const Styles = StyleSheet.create({})

export default LibraryLoading
