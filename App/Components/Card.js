import React, { Component, Fragment } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { ATText, ATHairLine, ATTouchable } from 'react-native-atlas'
import PropTypes from 'prop-types'
import Markdown from 'react-native-markdown-renderer'
import RNFetchBlob from 'rn-fetch-blob'
import { MarkdownStyles } from '../Theme'
import { Images } from '../Resources'

class Card extends Component {
  static defaultProps = {
    title: '',
    note: '',
    onPress: () => {},
    contentPadding: true
  }

  static propTypes = {
    title: PropTypes.any.isRequired,
    note: PropTypes.string,
    api: PropTypes.string.isRequired,
    contentPadding: PropTypes.bool
  }

  state = {
    showCode: false,
    data: '',
    haveCodeData: false
  }

  componentDidMount () {
    RNFetchBlob.fetch('GET', this.props.api).then(res => {
      let status = res.info().status
      if (status === 200) {
        this.setState({ data: res.data, haveCodeData: true })
      }
    })
  }

  render () {
    const { children, title, contentPadding, note } = this.props
    const { showCode, data, haveCodeData } = this.state
    return (
      <View style={Styles.card}>
        {title ? (
          <Fragment>
            <View style={Styles.title}>
              <ATText>{title}</ATText>
            </View>
            <ATHairLine />
          </Fragment>
        ) : null}
        <View
          style={[Styles.content, contentPadding ? Styles.contentPadding : '']}
        >
          {children}
        </View>
        <ATHairLine />
        {note ? (
          <Fragment>
            <View style={Styles.note}>
              <ATText color="#777" size={12}>
                {note}
              </ATText>
            </View>
            <ATHairLine />
          </Fragment>
        ) : null}
        {haveCodeData ? (
          <ATTouchable
            onPress={() => {
              this.setState({
                showCode: !this.state.showCode
              })
            }}
          >
            <View style={Styles.footer}>
              <Image
                source={!showCode ? Images.code : Images.up}
                style={Styles.icon}
                resizeMode="contain"
              />
            </View>
          </ATTouchable>
        ) : null}
        {showCode ? <Markdown style={MarkdownStyles}>{data}</Markdown> : null}
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  card: {
    marginTop: 10,
    backgroundColor: '#fff'
  },
  content: {
    paddingVertical: 10
  },
  contentPadding: {
    paddingHorizontal: 10
  },
  title: {
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  footer: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 10
  },
  icon: {
    height: 20,
    width: 20
  },
  note: {
    padding: 10
  }
})

export default Card
