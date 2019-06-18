import React from 'react'
import { View, ScrollView, SafeAreaView, StyleSheet } from 'react-native'
import { ATRowView, ATRadio, ATRadioGroup, ATText } from 'react-native-atlas'
import Icon1 from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/FontAwesome5Pro'
import { Header, Card, APICard } from '../../Components'
import { AppStyles, Colors } from '../../Theme'
import { Const } from '../../Config'

const url = Const.url.text

const PayCom = ({ type, unCheck }) => (
  <View style={{ flexDirection: 'row', marginRight: 30 }}>
    <Icon
      name={type}
      size={20}
      color={unCheck ? '#999' : type === 'weixin' ? 'green' : '#0088ff'}
    />
    <ATText style={{ marginLeft: 10 }}>
      {type === 'weixin' ? '微信支付' : '支付宝支付'}
    </ATText>
  </View>
)

class LibraryRadio extends React.Component {
  state = {
    isChecked: false,
    pay: 'weixin',
    sex: 1
  }

  render () {
    return (
      <SafeAreaView style={AppStyles.screen}>
        <Header title="ATRadio" />
        <View style={AppStyles.body}>
          <ScrollView>
            <Card title="不同状态" api={url.text01}>
              <ATRowView style={[styles.mV, styles.mH]}>
                <ATRadio label="default" style={[styles.mr, styles.mt]} />
                <ATRadio
                  disabled
                  label="disabled"
                  style={[styles.mr, styles.mt]}
                />
              </ATRowView>
            </Card>
            <Card title="自定义样式" api={url.text01}>
              <ATRowView style={[styles.mV, styles.mH]}>
                <ATRadio
                  label="custom style"
                  labelStyle={{ color: '#6d8ca7' }}
                  unCheckedViewStyle={{
                    backgroundColor: 'transparent',
                    borderColor: '#6d8ca7',
                    borderWidth: 1
                  }}
                  checkedViewStyle={{ backgroundColor: '#6d8ca7' }}
                  style={[styles.mr, styles.mt]}
                />
              </ATRowView>
              <ATRowView style={[styles.mV, styles.mH]}>
                <ATRadio
                  checkedView={
                    <View style={styles.customeView}>
                      <Icon1 name="check" size={12} color={Colors.primary} />
                    </View>
                  }
                  unCheckedView={<View style={[styles.customeView]} />}
                  labelView={
                    <ATText lineHeight={1}>custom check & lable View</ATText>
                  }
                  style={[styles.mr, styles.mt]}
                />
              </ATRowView>
            </Card>
            <Card title="响应事件" api={url.text01}>
              <ATRowView style={[styles.mV, styles.mH]}>
                <ATRadio
                  checked={this.state.isChecked}
                  label="指定 checked 值"
                  onChange={isChecked => {
                    this.setState({ isChecked })
                  }}
                  style={[styles.mr, styles.mt]}
                />
              </ATRowView>
              <ATRowView style={[styles.mV, styles.mH]}>
                <ATText>选中状态：{String(this.state.isChecked)}</ATText>
              </ATRowView>
            </Card>
            <Card title="单选框组" api={url.text01}>
              <ATRowView style={[styles.mV, styles.mH]}>
                <ATText style={{ marginRight: 10 }}>性别：</ATText>
                <ATRadioGroup
                  defaultValue={1}
                  options={[
                    { label: '男', value: 1 },
                    { label: '女', value: 2, style: { marginLeft: 20 } }
                  ]}
                  value={this.state.sex}
                  onChange={value => {
                    this.setState({
                      sex: value
                    })
                  }}
                />
              </ATRowView>
              <ATRowView style={[styles.mV, styles.mH]}>
                <ATRadioGroup
                  defaultValue={1}
                  value={this.state.pay}
                  options={[
                    {
                      checkedView: <PayCom type="weixin" />,
                      unCheckedView: <PayCom type="weixin" unCheck />,
                      value: 'weixin'
                    },
                    {
                      checkedView: <PayCom type="alipay" />,
                      unCheckedView: <PayCom type="alipay" unCheck />,
                      value: 'alipay'
                    }
                  ]}
                  optionStyle={{ flexDirection: 'row-reverse' }}
                  onChange={value => {
                    this.setState({
                      pay: value
                    })
                  }}
                />
              </ATRowView>
              <ATRowView style={[styles.mV, styles.mH]}>
                <ATText>支付方式：{this.state.pay}</ATText>
              </ATRowView>
            </Card>
            <APICard api={url.api} />
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  mV: {
    marginVertical: 10
  },
  mr: {
    marginRight: 10
  },
  mH: {
    marginHorizontal: 10
  },
  customeView: {
    width: 14,
    height: 14,
    marginRight: 5,
    borderColor: '#6d8ca7',
    borderWidth: 1,
    backgroundColor: 'transparent'
  }
})

export default LibraryRadio
