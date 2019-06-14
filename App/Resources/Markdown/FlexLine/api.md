#### ATFlexLine


| 属性  | 说明         | 类型           | 默认值  |
| ----- | ------------ | -------------- | ------- |
| data | (必填) 需要渲染的数据      | array[string、object]         | `null`  |
| height | 设置高度    | number | `Theme.flex_line_height` |
| style | FlexLine样式    | any | `null` |
| divide | 是否显示分割线   | boolean         | `false`  |
| divideHeight | 分割线高度   | string、number         | `50%`  |
| divideTop | 分割线相对位置   | string、number         | `25%`  |
| renderItem | 自定义渲染（也可以在data中定义每条数据自有的渲染方法）   | function         | `null`  |
