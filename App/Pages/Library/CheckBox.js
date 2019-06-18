import React from 'react'
import { View, ScrollView, SafeAreaView, StyleSheet } from 'react-native'
import {
  ATCheckBoxGroup,
  ATRowView,
  ATCheckBox,
  ATText,
  ATModalToast
} from 'react-native-atlas'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Header, Card, APICard } from '../../Components'
import { AppStyles, Colors } from '../../Theme'
import { Const } from '../../Config'

const url = Const.url.checkBox

class LibraryText extends React.Component {
  state = {
    time: 0,
    check1: false,
    checkBoxGroup: ['标签一', '标签二']
  }

  checkBoxGroupChange = v => {
    this.setState({
      checkBoxGroup: v
    })
  }

  render () {
    let options = [
      {
        value: '标签一',
        label: '标签一'
      },
      {
        value: '标签二',
        label: '标签二'
      },
      {
        value: '标签三',
        label: '标签三'
      },
      {
        value: '标签四',
        label: '标签四'
      }
    ]
    return (
      <SafeAreaView style={AppStyles.screen}>
        <Header title="ATCheckBox" />
        <View style={AppStyles.body}>
          <ScrollView>
            <Card title="不同状态" api={url.checkBox01}>
              <ATRowView style={[styles.mV, styles.mH]}>
                <ATCheckBox
                  rightText="default"
                  style={[styles.mr, styles.mt]}
                />
                <ATCheckBox
                  halfChecked
                  rightText="halfChecked"
                  style={[styles.mr, styles.mt]}
                />
              </ATRowView>
              <ATRowView style={[styles.mV, styles.mH]}>
                <ATCheckBox
                  checked
                  rightText="checked"
                  style={[styles.mr, styles.mt]}
                />
                <ATCheckBox
                  disabled
                  rightText="disabled"
                  style={[styles.mr, styles.mt]}
                />
              </ATRowView>
            </Card>
            <Card title="不同颜色" api={url.checkBox02}>
              <ATRowView style={[styles.mV, styles.mH]}>
                <ATCheckBox
                  tintColor="#ff605b"
                  rightText="tintColor"
                  style={[styles.mr, styles.mt]}
                />
                <ATCheckBox
                  tintColor="#4f4f4f"
                  halfChecked
                  rightText="tintColor"
                  style={[styles.mr, styles.mt]}
                />
                <ATCheckBox
                  checked
                  tintColor="#00c94b"
                  rightText="tintColor"
                  style={[styles.mr, styles.mt]}
                />
              </ATRowView>
            </Card>
            <Card title="描述位置" api={url.checkBox03}>
              <ATRowView style={[styles.mV, styles.mH]}>
                <ATCheckBox
                  leftText="leftText"
                  style={[styles.mr, styles.mt]}
                />
                <ATCheckBox
                  rightText="rightText"
                  style={[styles.mr, styles.mt]}
                />
              </ATRowView>
            </Card>
            <Card title="响应事件" api={url.checkBox04}>
              <ATRowView style={[styles.mV, styles.mH]}>
                <ATCheckBox
                  rightText="onPress"
                  checked={this.state.check1}
                  onPress={isChecked => this.setState({ check1: isChecked })}
                  style={[styles.mr, styles.mt]}
                />
              </ATRowView>
            </Card>
            <Card title="多选框组" api={url.checkBox05}>
              <ATRowView style={[styles.mV, styles.mH]}>
                <ATCheckBoxGroup
                  value={this.state.checkBoxGroup}
                  onChange={this.checkBoxGroupChange}
                  options={options}
                  max={3}
                  checkedImage={
                    <View style={styles.unCheckedImage}>
                      <Icon
                        name="check-square"
                        size={14}
                        color={Colors.primary}
                      />
                    </View>
                  }
                  unCheckedImage={<View style={styles.unCheckedImage} />}
                  tintColor={Colors.primary}
                  rightTextStyle={styles.checkText}
                  optionStyle={{ width: '50%' }}
                  onHint={() => {
                    ATModalToast({
                      content: '最多选择3项',
                      position: 'center'
                    })
                  }}
                />
                <ATText>已选择：{this.state.checkBoxGroup.join(',')}</ATText>
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
  unCheckedImage: {
    width: 13,
    height: 13,
    borderRadius: 4,
    backgroundColor: '#eee'
  }
})

export default LibraryText
