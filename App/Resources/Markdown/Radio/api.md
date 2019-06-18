#### ATRadio

| 属性     | 说明                               | 类型 | 默认值 |
| -------- | ---------------------------------- | ---- | ------ |
| label | 标签文案 | string  | `null` |
| labelStyle | 标签样式 | any  | `null` |
| labelView | 自定义标签 | any  | `null` |
| checked | 选中状态 | boolean  | `null` |
| onChange | change事件（设置checked后要手动更新值） | function  | `null` |
| checkedView | 自定义选中时样式 | element  | `null` |
| unCheckedView | 自定义未选中时样式 | element  | `null` |

#### ATRadioGroup

| 属性     | 说明                               | 类型 | 默认值 |
| -------- | ---------------------------------- | ---- | ------ |
| options | 选项数据 | array  | `null` |
| itemStyle | 子项样式 | any  | `null` |
| defaultValue | 默认值 | any  | `null` |
| value | 绑定的值 | any  | `null` |
| onChange | change事件 | function  | `null` |