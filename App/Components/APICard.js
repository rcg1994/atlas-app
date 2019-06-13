import React, { Component } from 'react'
import { View } from 'react-native'
import { ATText } from 'react-native-atlas'
import Markdown from 'react-native-markdown-renderer'
import RNFetchBlob from 'rn-fetch-blob'
import { MarkdownStyles, AppStyles } from '../Theme'

class APICard extends Component {
  state = {
    apiMD: ''
  }
  componentDidMount () {
    RNFetchBlob.fetch('GET', this.props.api).then(res => {
      let status = res.info().status
      if (status === 200) {
        this.setState({ apiMD: res.data })
      }
    })
  }
  render () {
    return this.state.apiMD === '' ? null : (
      <View style={AppStyles.apiCard}>
        <View style={{ paddingHorizontal: 10 }}>
          <ATText weight="bold" size={18}>
            API
          </ATText>
        </View>
        <Markdown style={MarkdownStyles}>{this.state.apiMD}</Markdown>
      </View>
    )
  }
}

export default APICard
