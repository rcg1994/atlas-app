#### ATButton

##### 继承自 ATTouchable


| 属性              | 说明                                                         | 类型    | 默认值    |
| ----------------- | ------------------------------------------------------------ | ------- | --------- |
| type              | 设置按钮的类型，可选值有 `primary`、`secondary`、`success`、`danger`、`warning`、`info` | string  | `primary` |
| icon              | 是否带图标                                                   | any     | `null`    |
| disabled          | 是否禁用状态                                                 | boolean | `false`   |
| ghost             | 是否为幽灵按钮                                               | boolean | `false`   |
| text              | 是否为文字按钮                                               | boolean | `false`   |
| full              | 是否拉伸，设置为 `true` 则按钮为直角边框                     | boolean | `false`   |
| interspace        | 是否有两边的间隙                                             | boolean | `false`   |
| border            | 是否有边框                                                   | boolean | `true`    |
| throttle          | 点击事件是否节流，防止重复点击                               | boolean | `true`    |
| onPress           | 点击事件                                                     | func    | `()=>{}`  |
| onLongPress       | 长按事件                                                     | func    | `()=>{}`  |
| buttonColor       | 按钮主题色                                                   | string  | `/`       |
| style             | 按钮样式                                                     | any     | `/`       |
| textStyle         | 文字样式                                                     | any     | `/`       |
| disabledStyle     | 禁用状态下的按钮样式                                         | any     | `/`       |
| disabledTextStyle | 禁用状态下的文字样式                                         | any     | `/`       |

#### ATIconButton

##### 继承自 ATButton ，当按钮只有图标时使用

| 属性     | 说明                               | 类型 | 默认值 |
| -------- | ---------------------------------- | ---- | ------ |
| children | 图标按钮子节点，传入字体图标或图片 | any  | `null` |
| imageIcon | 传入的图标是否为图片，如果是字体图标，可自动设置颜色 | any  | `false` |
