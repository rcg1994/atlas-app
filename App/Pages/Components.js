import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import { ATList } from 'react-native-atlas'
import { Header } from '../Components'
import { AppStyles } from '../Theme'

const routes = [
  {
    name: 'Button',
    path: 'LibraryButtons'
  },
  {
    name: 'Loading',
    path: 'LibraryLoading'
  },
  {
    name: 'FlexLine',
    path: 'LibraryFlexLine'
  }
]

class Components extends React.Component {
  goto = route => {
    this.props.navigation.navigate(route)
  }
  render () {
    let listData = routes.map(item => {
      return {
        ...item,
        content: item.name,
        onPress: () => this.goto(item.path),
        showArrow: true
      }
    })
    return (
      <SafeAreaView style={AppStyles.screen}>
        <Header title="组件库" headerLeft={null} />
        <View style={AppStyles.body}>
          <ATList style={Styles.list} data={listData} underlayColor="#fdfdfd" />
        </View>
      </SafeAreaView>
    )
  }
}

const Styles = StyleSheet.create({
  list: {
    marginTop: 4
  }
})

export default Components
