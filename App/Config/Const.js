const MD_RESOURCE_URL =
  'https://raw.githubusercontent.com/rcg1994/atlas-app/master/App/Resources/Markdown'
export default class Const {
  static url = {
    button: {
      api: MD_RESOURCE_URL + '/Button/api.md',
      type: MD_RESOURCE_URL + '/Button/type.md',
      icon: MD_RESOURCE_URL + '/Button/icon.md',
      status: MD_RESOURCE_URL + '/Button/status.md',
      ghostOrText: MD_RESOURCE_URL + '/Button/ghostOrText.md',
      color: MD_RESOURCE_URL + '/Button/color.md',
      disabled: MD_RESOURCE_URL + '/Button/disabled.md',
      press: MD_RESOURCE_URL + '/Button/press.md'
    },
    loading: {
      api: MD_RESOURCE_URL + '/Loading/api.md',
      size: MD_RESOURCE_URL + '/Loading/size.md',
      color: MD_RESOURCE_URL + '/Loading/color.md',
      title: MD_RESOURCE_URL + '/Loading/title.md',
      indicator: MD_RESOURCE_URL + '/Loading/indicator.md'
    }
  }
}
