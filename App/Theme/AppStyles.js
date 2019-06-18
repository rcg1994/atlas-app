import { StyleSheet } from 'react-native'
import Colors from './Colors'

const AppStyles = StyleSheet.create({
  screen: {
    flex: 1
  },
  body: {
    flex: 1,
    backgroundColor: Colors.appBackground
  },
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  fullBox: {
    width: '100%',
    height: '100%'
  },
  apiCard: {
    marginTop: 10,
    paddingVertical: 10,
    backgroundColor: '#fff'
  },
  mt10: {
    marginTop: 10
  },
  mr10: {
    marginRight: 10
  },
  border: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd'
  }
})

export default AppStyles
