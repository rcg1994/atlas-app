import React from 'react'
import { View, ScrollView, SafeAreaView } from 'react-native'
import { ATTag, ATRowView, ATText } from 'react-native-atlas'
import { Header, Card, APICard } from '../../Components'
import { AppStyles, Colors } from '../../Theme'
import { Const } from '../../Config'
import { Iconfont } from '../../Resources'

const url = Const.url.tag

class LibraryText extends React.Component {
  state = {
    time: 0
  }

  render () {
    return (
      <SafeAreaView style={AppStyles.screen}>
        <Header title="ATTag" />
        <View style={AppStyles.body}>
          <ScrollView>
            <Card title="不同类型" api={url.tag01}>
              <ATRowView>
                <ATTag style={AppStyles.mr10} content="primary" />
                <ATTag style={AppStyles.mr10} content="info" type="info" />
                <ATTag
                  style={AppStyles.mr10}
                  content="success"
                  type="success"
                />
                <ATTag
                  style={AppStyles.mr10}
                  content="warning"
                  type="warning"
                />
                <ATTag content="danger" type="danger" />
              </ATRowView>
            </Card>
            <Card
              title="指定属性"
              note="指定颜色只支持16进制的色值，背景色自动计算得到的。特殊需求请修改style。"
              api={url.tag01}
            >
              <ATRowView>
                <ATTag
                  style={AppStyles.mr10}
                  color="#0066ff"
                  content="指定颜色"
                />
                <ATTag
                  style={AppStyles.mr10}
                  icon={
                    <Iconfont name="atlas" color={Colors.primary} size={16} />
                  }
                  content="带图标"
                />
                <ATTag
                  style={AppStyles.mr10}
                  left={
                    <ATText color={Colors.danger} size={16}>
                      *
                    </ATText>
                  }
                  content="自定义左边元素"
                />
              </ATRowView>
              <ATRowView style={AppStyles.mt10}>
                <ATTag
                  style={{
                    paddingVertical: 2,
                    paddingHorizontal: 10,
                    backgroundColor: '#fafafa'
                  }}
                  textStyle={{ fontSize: 12 }}
                  content="自定义样式"
                />
              </ATRowView>
            </Card>
            <APICard api={url.api} />
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}

export default LibraryText
