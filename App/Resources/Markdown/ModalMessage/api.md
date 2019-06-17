#### ATModalMessage (ATModal.message)

| 属性  | 说明         | 类型           | 默认值  |
| ----- | ------------ | -------------- | ------- |
| title | 标题      |  string         | `''`  |
| content | (必填) 提示内容      |  string         | `''`  |
| contentAlign | 内容区对齐方式      |  string         | `center'`  |
| okText | 确认按钮的文字     |  string         | `我知道了`  |
| onOk | 确认事件     |  function         | `null`  |
| icon | 图标     |  element         | `null`  |
| contentMaxHeight | 内容区最大高度     |  number         | `null`  |
| backButtonClose | 虚拟返回按键是否能关闭弹窗      |  boolean         | `false'`  |
| backdropPressToClose | 点击蒙层是否能关闭弹窗      |  boolean         | `false'`  |
| backdropOpacity | 蒙层透明度      |  number         | `0.5'`  |
| duration | 持续显示的时间      |  number         | `Theme.modal_toast_duration`  |
| animation | 动画     |  boolean         | `true`  |

#### ATModalConfirm (ATModal.confirm)

##### 继承自 ATModalMessage

| 属性  | 说明         | 类型           | 默认值  |
| ----- | ------------ | -------------- | ------- |
| cancelText | 取消按钮的文字     |  string         | `取消`  |
| onCancel | 取消事件     |  function         | `null`  |
| buttons | 自定义按钮     |  array         | `[]`  |
| buttons.type | 自定义按钮类型     |  string         | `primary`  |
| buttons.title | 自定义按钮文案     |  string         | `null`  |
| buttons.color | 自定义按钮颜色     |  string         | `null`  |
| buttons.onPress | 自定义按钮点击事件     |  function         | `null`  |

#### ATModalPrompt (ATModal.prompt)

##### 继承自 ATModalConfirm

| 属性  | 说明         | 类型           | 默认值  |
| ----- | ------------ | -------------- | ------- |
| autoFocus | 自动聚焦     |  boolean         | `false`  |
| label | 输入框标签     |  string         | `null`  |


