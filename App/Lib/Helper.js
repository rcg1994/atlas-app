import { Platform, Clipboard } from 'react-native'
import { ATModal } from 'react-native-atlas'
import jsonFormat from 'json-format'

export default class Helper {
  static APP_PLATFORM = Platform.OS === 'android' ? 'android' : 'ios'
  static IS_ANDROID = Platform.OS === 'android'

  static eventManage = {
    handles: {},
    on (eName, fn) {
      this.handles[eName] = this.handles[eName] ? this.handles[eName] : []
      this.handles[eName].push(fn)
    },
    emit (eName, data = {}) {
      if (this.handles[eName]) {
        for (var i = 0; i < this.handles[eName].length; i++) {
          this.handles[eName][i](data)
        }
      }
    },
    off: function (eventType, handler = null) {
      if (handler === null) {
        delete this.handles[eventType]
        return
      }
      let currentEvent = this.handles[eventType]
      let len = 0
      if (currentEvent) {
        len = currentEvent.length
        for (let i = len - 1; i >= 0; i--) {
          if (currentEvent[i] === handler) {
            currentEvent.splice(i, 1)
          }
        }
      }
    }
  }

  static showToast = (msg, options = {}) => {
    ATModal.toast({
      content: msg,
      duration: 2500
    })
  }

  static sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  static debugMessage = obj => {
    ATModal.message({
      width: 300,
      contentMaxHeight: 300,
      contentAlign: 'left',
      content: jsonFormat(obj),
      onOk: () => {
        Clipboard.setString(jsonFormat(obj))
        Helper.showToast('复制成功！')
      }
    })
  }

  static confirm = ({
    onOk = () => {},
    onCancle = () => {},
    cancelText = '取消',
    okText = '确定',
    icon,
    content
  }) => {
    ATModal.confirm({
      content: content,
      icon: icon,
      buttons: [
        {
          title: cancelText,
          type: 'cancel',
          onPress: onCancle
        },
        {
          title: okText,
          type: 'cancel',
          onPress: onOk
        }
      ]
    })
  }

  static message = ({
    onOk = () => {},
    okText = '我知道了',
    icon,
    content,
    contentAlign
  }) => {
    ATModal.confirm({
      content: content,
      icon: icon,
      contentAlign: contentAlign || 'center',
      buttons: [
        {
          title: okText,
          type: 'cancel',
          onPress: onOk
        }
      ]
    })
  }
}
