import React from 'react'
import { View, ScrollView, SafeAreaView, StyleSheet } from 'react-native'
import { ATButton, ATRowView, ATInput, ATAddrSelector } from 'react-native-atlas'
import { Header, Card, APICard } from '../../Components'
import { AppStyles } from '../../Theme'
import { Const } from '../../Config'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const url = Const.url.input

class LibraryText extends React.Component {
state = {
  time: 0,
  smsCodeTitle: '获取验证码',
  buttonDisabled: false,
  selectedAddress: '浙江省'
}

countdown = () => {
  let seconds = 60
  let countdownTimer = setInterval(() => {
    if (seconds === 0) {
      this.setState({
        smsCodeTitle: '获取验证码',
        buttonDisabled: false
      })
      clearInterval(countdownTimer)
    } else {
      this.setState({
        smsCodeTitle: (seconds--) + '秒',
        buttonDisabled: true
      })
    }
  }, 1000)
}

showAddrSelector = () => {
  this.addrSelector.show()
}

handleSelectAddress = (selectedAddress) => {
  console.log('selectedAddress', selectedAddress)
}

handleFinish = (selectedAddress) => {
  this.setState({ selectedAddress })
}

componentDidMount () {
  // setTimeout(() => {
  //   this.setState({
  //     selectedAddress: '123'
  //   })
  // }, 2000)
}

render () {
  const { smsCodeTitle, buttonDisabled, selectedAddress } = this.state
  console.log(typeof smsCodeTitle)
  return (
    <SafeAreaView style={AppStyles.screen}>
      <Header title="ATInput" />
      <View style={AppStyles.body}>
        <ScrollView>
          <Card title="对齐方式" api={url.input01}>
            <ATRowView style={[styles.mV, styles.mH]}>
              <ATInput label={null} placeholder="placeholder" />
            </ATRowView>
            <ATRowView style={[styles.mV, styles.mH]}>
              <ATInput label={null} placeholder="placeholder" textInputStyle={{ textAlign: 'center' }} />
            </ATRowView>
          </Card>
          <Card title="标签及样式" api={url.input02}>
            <ATRowView style={[styles.mV, styles.mH]}>
              <ATInput label="label" placeholder="placeholder" />
            </ATRowView>
            <ATRowView style={[styles.mV, styles.mH]}>
              <ATInput label="label" placeholder="placeholder" shape="underline" />
            </ATRowView>
            <ATRowView style={[styles.mV, styles.mH]}>
              <ATInput label="label" placeholder="placeholder" shape="rounded" />
            </ATRowView>
            <ATRowView style={[styles.mV, styles.mH]}>
              <ATInput
                shape="rounded"
                label={<Icon name='magnify' color='#666' style={{ marginRight: 10, fontSize: 16 }} />}
                placeholder="placeholder"
              />
            </ATRowView>
          </Card>
          <Card title="特定用法" api={url.input03}>
            <ATRowView style={[styles.mV, styles.mH]}>
              <ATInput
                shape="rounded"
                label="手机号"
                placeholder="请输入手机号"
                right={(
                  <ATButton
                    text
                    type='secondary'
                    disabled={buttonDisabled}
                    onPress={this.countdown}
                    textStyle={{ fontSize: 12 }}
                  >{ smsCodeTitle }</ATButton>
                )}
              />
            </ATRowView>
            <ATRowView style={[styles.mV, styles.mH]}>
              <ATInput
                ref={v => { this.input = v }}
                alwaysChange
                value={selectedAddress}
                editable={false}
                shape="rounded"
                label="地址"
                placeholder="请选择地址"
                right={(
                  <Icon name='dots-horizontal' color="#999" size={20} />
                )}
                onPress={this.showAddrSelector}
              />
              <ATAddrSelector
                ref={v => { this.addrSelector = v }}
                selectedAddress={selectedAddress}
                onSelectAddress={this.handleSelectAddress}
                onFinish={this.handleFinish}
                // style={{backgroundColor: "#fff"}}
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

const styles = StyleSheet.create({
  mV: {
    marginVertical: 10
  },
  mH: {
    marginHorizontal: 10
  }
})

export default LibraryText
