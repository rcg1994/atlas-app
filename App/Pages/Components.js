import React from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { ATList } from 'react-native-atlas'
import { Header } from '../Components'
import { AppStyles } from '../Theme'

const routes = [
  {
    name: 'ATText',
    path: 'LibraryText'
  },
  {
    name: 'ATButton',
    path: 'LibraryButtons'
  },
  {
    name: 'ATTag',
    path: 'LibraryTag'
  },
  {
    name: 'ATLoading',
    path: 'LibraryLoading'
  },
  {
    name: 'ATFlexLine',
    path: 'LibraryFlexLine'
  },
  {
    name: 'ATList',
    path: 'LibraryList'
  },
  {
    name: 'ATModalToast',
    path: 'LibraryModalToast'
  },
  {
    name: 'ATModalLoading',
    path: 'LibraryModalLoading'
  },
  {
    name: 'ATModalMessage/Confirm/Prompt',
    path: 'LibraryModalMessage'
  },
  {
    name: 'ATModalSelect',
    path: 'LibraryModalSelect'
  },
  {
    name: 'ATModalCreate',
    path: 'LibraryModalCreate'
  },
  {
    name: 'ATInput',
    path: 'LibraryInput'
  },
  {
    name: 'ATCheckBox',
    path: 'LibraryCheckBox'
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
          <ScrollView>
            <ATList style={Styles.list} data={listData} underlayColor="#fdfdfd" />
          </ScrollView>
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
