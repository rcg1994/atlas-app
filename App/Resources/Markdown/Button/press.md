```javascript
import { ATButton, ATRowView } from "react-native-atlas";

<ATRowView>
  <ATButton
    throttle={false}
    onPress={() => {
      this.setState({
        time: this.state.time + 1
      });
    }}
  >
    连击
  </ATButton>
  
  <ATButton
    onPress={() => {
      this.setState({
        time: this.state.time + 1
      });
    }}
  >
    节流
  </ATButton>

  <ATButton
    throttleWaiting={2000}
    onPress={() => {
      this.setState({
        time: this.state.time + 1
      });
    }}
  >
    节流 2s
  </ATButton>

  <ATButton
    ghost
    onLongPress={() => {
      this.setState({
        time: this.state.time + 1
      });
    }}
  >
    长按
  </ATButton>
</ATRowView>
```
