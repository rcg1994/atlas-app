import React from 'react'
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { ATButton, ATIconButton, ATRowView, ATText } from 'react-native-atlas'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Header, Card, APICard } from '../../Components'
import { AppStyles } from '../../Theme'
import { Const } from '../../Config'

const url = Const.url.button

class LibraryButtons extends React.Component {
  state = {
    time: 0
  }

  render () {
    return (
      <SafeAreaView style={AppStyles.screen}>
        <Header title="Button" />
        <View style={AppStyles.body}>
          <ScrollView>
            <Card title="不同类型的按钮" api={url.type}>
              <ATRowView style={Styles.mb10}>
                <ATButton style={Styles.btn}>primary</ATButton>
                <ATButton
                  type="secondary"
                  style={Styles.btn}
                  onPress={() => {}}
                >
                  secondary
                </ATButton>
                <ATButton type="success" style={Styles.btn}>
                  success
                </ATButton>
              </ATRowView>
              <ATRowView>
                <ATButton type="danger" style={Styles.btn}>
                  danger
                </ATButton>
                <ATButton type="warning" style={Styles.btn}>
                  warning
                </ATButton>
                <ATButton type="info" style={Styles.btn}>
                  info
                </ATButton>
              </ATRowView>
            </Card>
            <Card title="不同形式的按钮" api={url.ghostOrText}>
              <ATRowView>
                <ATButton style={Styles.btn}>普通按钮</ATButton>
                <ATButton ghost style={Styles.btn}>
                  幽灵按钮
                </ATButton>
                <ATButton text style={Styles.btn}>
                  文字按钮
                </ATButton>
              </ATRowView>
            </Card>
            <Card
              title="图标按钮"
              note="提供了 ATIconButton 用来处理只有图标的按钮"
              api={url.icon}
            >
              <ATRowView>
                <ATIconButton style={Styles.btn} text>
                  <Icon name="github" size={22} />
                </ATIconButton>

                <ATIconButton style={Styles.btn}>
                  <Icon name="github" size={22} />
                </ATIconButton>

                <ATIconButton style={Styles.btn} ghost>
                  <Icon name="github" size={22} />
                </ATIconButton>

                <ATButton
                  style={Styles.btn}
                  icon={<Icon name="github" size={22} />}
                >
                  Github
                </ATButton>
              </ATRowView>
            </Card>
            <Card title="禁用按钮" api={url.disabled}>
              <ATRowView>
                <ATButton style={Styles.btn} disabled>
                  禁用
                </ATButton>

                <ATButton style={Styles.btn} disabled ghost>
                  禁用
                </ATButton>

                <ATButton style={Styles.btn} disabled text>
                  禁用
                </ATButton>
              </ATRowView>
            </Card>
            <Card
              title="长按钮的不同形态"
              note="按钮默认长度100%"
              contentPadding={false}
              api={url.status}
            >
              <ATButton style={Styles.mb10}>normal</ATButton>
              <ATButton style={Styles.mb10} full>
                full
              </ATButton>
              <ATButton interspace>interspace</ATButton>
            </Card>

            <Card
              title="自定义按钮颜色"
              note="定义按钮颜色（十六进制色值），自动计算点击时交互色值。交互色值也可由 underlayColor 设置"
              api={url.color}
            >
              <ATRowView>
                <ATButton style={Styles.btn} buttonColor="#ce4047">
                  #ce4047
                </ATButton>

                <ATButton style={Styles.btn} ghost buttonColor="#ce4047">
                  #ce4047
                </ATButton>

                <ATButton
                  style={Styles.btn}
                  buttonColor="#ce4047"
                  underlayColor="#777"
                >
                  underlayColor
                </ATButton>
              </ATRowView>
            </Card>

            <Card
              title="点击事件"
              note="按钮默认是有节流效果的，主题里设置 touchable_waiting 默认节流时间"
              api={url.press}
            >
              <ATText size={24} weight="bold" style={Styles.mb10}>
                点击次数：{this.state.time}
              </ATText>
              <ATRowView style={Styles.mb10}>
                <ATButton
                  style={Styles.btn}
                  throttle={false}
                  onPress={() => {
                    this.setState({
                      time: this.state.time + 1
                    })
                  }}
                >
                  连击
                </ATButton>
                <ATButton
                  style={Styles.btn}
                  onPress={() => {
                    this.setState({
                      time: this.state.time + 1
                    })
                  }}
                >
                  节流
                </ATButton>
                <ATButton
                  throttleWaiting={2000}
                  onPress={() => {
                    this.setState({
                      time: this.state.time + 1
                    })
                  }}
                >
                  节流 2s
                </ATButton>
              </ATRowView>
              <ATRowView>
                <ATButton
                  ghost
                  onLongPress={() => {
                    this.setState({
                      time: this.state.time + 1
                    })
                  }}
                >
                  长按
                </ATButton>
              </ATRowView>
            </Card>
            <APICard api={url.api} />
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}

const Styles = StyleSheet.create({
  btn: {
    marginRight: 10
  },
  mb10: {
    marginBottom: 10
  }
})

export default LibraryButtons
