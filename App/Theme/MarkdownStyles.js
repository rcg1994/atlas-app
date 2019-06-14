import { StyleSheet } from 'react-native'
import Colors from './Colors'

const markdownStyles = StyleSheet.create({
  root: {
    backgroundColor: '#fff'
  },
  codeBlock: {
    paddingHorizontal: 10,
    fontSize: 14
  },
  heading4: {
    paddingHorizontal: 10,
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    marginVertical: 5
  },
  heading5: {
    paddingHorizontal: 10,
    fontSize: 12,
    color: '#777',
    marginBottom: 10
  },
  table: {
    borderWidth: 0,
    marginBottom: 10
  },
  tableHeader: {
    // paddingHorizontal: 5
    backgroundColor: 'rgba(0,0,0,0.02)'
  },
  tableHeaderCell: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  tableRow: {
    paddingHorizontal: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.borderLight,
    flexDirection: 'row'
  },
  tableRowCell: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  text: {
    lineHeight: 22
  },
  codeInline: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 4
  }
})

export default markdownStyles
