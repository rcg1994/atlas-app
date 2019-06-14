```javascript
import { ATFlexLine } from "react-native-atlas";

<ATFlexLine
  height={100}
  divide
  data={[
    {
      name: '主页',
      icon: 'atlas'
    },
    {
      name: '组件库',
      icon: 'components'
    },
    {
      name: '我的',
      icon: 'mine'
    }
  ]}
  renderItem={({ name, icon }) => (
    <ATTouchable style={[AppStyles.flexCenter, AppStyles.fullBox]} onPress={() => {}}>
      <View style={AppStyles.flexCenter}>
        <Iconfont name={icon} color={Colors.primary} size={30} />
        <ATText
          style={AppStyles.mt10}
          size={14}
          color={Colors.primary}
        >
          {name}
        </ATText>
      </View>
    </ATTouchable>
  )}
/>
```