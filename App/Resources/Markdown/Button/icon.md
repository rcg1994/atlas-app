```javascript
import { ATButton, ATIconButton, ATRowView } from "react-native-atlas";
import Icon from "react-native-vector-icons/FontAwesome";

<ATRowView>
  <ATIconButton style={Styles.btn} text>
    <Icon name="github" size={22} />
  </ATIconButton>

  <ATIconButton style={Styles.btn}>
    <Icon name="github" size={22} />
  </ATIconButton>

  <ATIconButton style={Styles.btn} ghost>
    <Icon name="github" size={22} />
  </ATIconButton>

  <ATButton style={Styles.btn} icon={<Icon name="github" size={22} />}>
    Github
  </ATButton>
</ATRowView>
```
