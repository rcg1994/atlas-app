import React from "react";
import { View, Text } from "react-native";
import { Header } from '../Components'
import { AppStyles } from '../Theme'

class About extends React.Component {
  render() {
    return (
      <View style={AppStyles.screen}>
        <Header title="关于" headerLeft={null} />
        <View style={AppStyles.body}>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text></Text>
          </View>
        </View>
      </View>
    );
  }
}

export default About;
