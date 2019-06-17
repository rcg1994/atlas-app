import React from 'react'
import { View, ScrollView, SafeAreaView, Image } from 'react-native'
import {
  ATList,
  ATText,
  ATTag,
  ATRowView,
  ATTouchable
} from 'react-native-atlas'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Header, Card, APICard } from '../../Components'
import { AppStyles, Colors } from '../../Theme'
import { Const } from '../../Config'

const url = Const.url.list

class LibraryList extends React.Component {
  state = {
    time: 0,
    data1: [
      {
        left: '收入',
        content: '+ ¥100.00',
        right: '2019-08-01 18:01:24'
      },
      {
        left: '收入',
        content: '+ ¥99.50',
        right: '2019-08-01 18:02:08'
      },
      {
        left: '支出',
        content: '- ¥199.50',
        right: '2019-08-01 22:04:08',
        centerTextStyle: { color: 'red' }
      },
      {
        left: '收入',
        content: '+ ¥9.50',
        right: '2019-08-02 18:02:08'
      }
    ],
    data2: [
      {
        left: <Icon name="laugh-wink" size={22} color="#F70968" />,
        content: '收藏',
        right: '+2',
        rightTextStyle: { color: Colors.primary },
        showArrow: true,
        onPress: () => {}
      },
      {
        left: <Icon name="laugh-beam" size={22} color="#1196EE" />,
        content: '相册',
        showArrow: true,
        onPress: () => {}
      },
      {
        left: <Icon name="grin-tongue" size={22} color="#33CC52" />,
        content: '卡包',
        showArrow: true,
        onPress: () => {}
      },
      {
        left: <Icon name="laugh-squint" size={22} color="#FF9900" />,
        content: '表情',
        right: '新表情已上线',
        showArrow: true,
        onPress: () => {}
      }
    ],
    data3: [
      {
        header: <ATText h5>支付提醒</ATText>,
        content:
      '您的账户支出 100 元，消费后余额 2310.50 元',
        footer: (
          <ATText color="#999" size={12}>2019-08-01 22:10:10</ATText>
        )
      },
      {
        header: <ATText h5>系统安全</ATText>,
        content:
      '您的账户于【 2019-10-10 22:10:10 】存在异地登录操作，请确认是否为您本人操作，若不是，为了您的账户安全请立即修改密码',
        footer: (
          <ATText color="#999" size={12}>2019-08-02 22:10:10</ATText>
        )
      }
    ],
    data4: [
      {
        image:
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2140860234,13655574&fm=11&gp=0.jpg',
        title: '杭州西湖慢享主题酒店',
        score: '4.8 棒极了',
        num: '2000条评论',
        type: '高档型',
        address: '西湖大道|解放路，浙江大学附属第一医院附近',
        tag: '立即确认',
        tip: '地理位置非常好',
        money: 416
      },
      {
        image:
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560512418583&di=19f421bc537b7e4aacd2870ae5a3269d&imgtype=0&src=http%3A%2F%2Fwx3.sinaimg.cn%2Fthumb300%2Faf58677egy1g3oe7stn2aj20sg0iyhdt.jpg',
        title: '西湖绿皮高铁精品青年旅社(杭州西湖文化广场地铁站店)',
        score: '4.7 棒极了',
        num: '1220条评论',
        type: '三星级',
        address: '朝晖，浙江省人民医院附近',
        tag: '立即确认',
        tip: '地理位置非常好',
        money: 80
      }
    ]
  }

  render () {
    return (
      <SafeAreaView style={AppStyles.screen}>
        <Header title="ATList" />
        <View style={AppStyles.body}>
          <ScrollView>
            <Card title="固定的数据格式" api={url.list01}>
              <ATList
                data={this.state.data1}
                rightTextStyle={{ fontSize: 12, color: '#999' }}
                centerTextStyle={{ fontSize: 18, color: Colors.primary }}
              />
            </Card>
            <Card title="用作导航页" api={url.list02}>
              <ATList
                rightTextStyle={{ fontSize: 12, color: 'red' }}
                data={this.state.data2}
              />
            </Card>
            <Card title="卡片列表" api={url.list03}>
              <ATList
                data={this.state.data3}
                divide={false}
                itemStyle={[AppStyles.border, { borderRadius: 6, marginBottom: 10 }]}
                centerTextStyle={{ lineHeight: 20 }}
                footerStyle={{ alignItems: 'flex-end' }}
                onItemPress={(v) => {
                  console.log(v)
                }}
              />
            </Card>
            <Card title="自定义渲染 (任意列表样式)" api={url.list04}>
              <ATList
                rightTextStyle={{ fontSize: 12, color: 'red' }}
                data={this.state.data4}
                renderItem={item => (
                  <ATTouchable underlayColor="#fafafa" onPress={() => {}}>
                    <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                      <Image
                        source={{ uri: item.image }}
                        style={{ width: 100, height: 140 }}
                      />
                      <View
                        style={{
                          flex: 1,
                          marginLeft: 10,
                          justifyContent: 'space-between'
                        }}
                      >
                        <ATText weight="bold" size={18} numberOfLines={1}>
                          {item.title}
                        </ATText>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                          }}
                        >
                          <ATText size={14} color={Colors.primary}>
                            {item.score}
                          </ATText>
                          <ATText size={12} style={{ marginLeft: 10 }}>
                            {item.num}
                          </ATText>
                          <ATText
                            size={12}
                            color="#999"
                            style={{ marginLeft: 10 }}
                          >
                            {item.type}
                          </ATText>
                        </View>
                        <ATText size={14} color="#999" numberOfLines={1}>
                          {item.address}
                        </ATText>
                        <ATRowView>
                          <ATTag
                            content={item.tag}
                            textStyle={{ fontSize: 10 }}
                            style={{ padding: 5 }}
                          />
                        </ATRowView>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                          }}
                        >
                          <ATText size={14} color={Colors.primary}>
                            {item.tip}
                          </ATText>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center'
                            }}
                          >
                            <ATText size={22} color="red">
                ¥{item.money}
                            </ATText>
                            <ATText
                              size={12}
                              color="red"
                              style={{ marginLeft: 5 }}
                            >
                起
                            </ATText>
                          </View>
                        </View>
                      </View>
                    </View>
                  </ATTouchable>
                )}
              />
            </Card>
            <Card
              title="布局说明（非自定义）"
              note="主要分为五大块，每个块都提供了对应的样式属性可供修改"
              api={url.list05}
            >
              <ATList
                data={[
                  {
                    left: 'left',
                    right: 'right',
                    content: 'content',
                    header: <ATText>header</ATText>,
                    footer: <ATText>footer</ATText>
                  }
                ]}
                divide={false}
              />
            </Card>
            <APICard api={url.api} />
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}

export default LibraryList
