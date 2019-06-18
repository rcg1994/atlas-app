import Home from '../Pages/Home'
import Components from '../Pages/Components'
// import About from '../Pages/About'
import LibraryButtons from '../Pages/Library/Buttons'
import LibraryLoading from '../Pages/Library/Loading'
import LibraryFlexLine from '../Pages/Library/FlexLine'
import LibraryList from '../Pages/Library/List'
import LibraryModalToast from '../Pages/Library/ModalToast'
import LibraryModalLoading from '../Pages/Library/ModalLoading'
import LibraryModalMessage from '../Pages/Library/ModalMessage'
import LibraryModalSelect from '../Pages/Library/ModalSelect'
import LibraryModalCreate from '../Pages/Library/ModalCreate'
import LibraryText from '../Pages/Library/Text'
import LibraryTag from '../Pages/Library/Tag'
import LibraryInput from '../Pages/Library/Input'
import LibraryCheckBox from '../Pages/Library/CheckBox'
import LibraryRadio from '../Pages/Library/Radio'

// 底部导航对应的页面
const TabPages = {
  Home: {
    screen: Home
  },
  Components: {
    screen: Components
  }
  // About: {
  //   screen: About
  // }
}

// 应用页面
const AppPages = {
  LibraryButtons: {
    screen: LibraryButtons
  },
  LibraryLoading: {
    screen: LibraryLoading
  },
  LibraryFlexLine: {
    screen: LibraryFlexLine
  },
  LibraryList: {
    screen: LibraryList
  },
  LibraryModalToast: {
    screen: LibraryModalToast
  },
  LibraryModalLoading: {
    screen: LibraryModalLoading
  },
  LibraryModalMessage: {
    screen: LibraryModalMessage
  },
  LibraryModalSelect: {
    screen: LibraryModalSelect
  },
  LibraryModalCreate: {
    screen: LibraryModalCreate
  },
  LibraryText: {
    screen: LibraryText
  },
  LibraryTag: {
    screen: LibraryTag
  },
  LibraryInput: {
    screen: LibraryInput
  },
  LibraryCheckBox: {
    screen: LibraryCheckBox
  },
  LibraryRadio: {
    screen: LibraryRadio
  }
}

export { TabPages, AppPages }
