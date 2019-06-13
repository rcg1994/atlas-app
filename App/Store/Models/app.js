import { fetchFake } from '../../Services/appService'
import { ATModal } from 'react-native-atlas'

export default {
  namespace: 'app',
  state: {
    loading: true
  },
  reducers: {
    updateState (state, { payload }) {
      return { ...state, ...payload }
    }
  },
  effects: {
    * loadingAsync (action, { call, put }) {
      let loading = ATModal.loading({
        content: '异步加载中...',
        backdropPressToClose: false
      })
      let re = yield call(fetchFake)
      // Helper.
      if (re === 'success') {
        yield put({ type: 'updateState', payload: { loading: true } })
      }
      loading.close()
    }
  },
  subscriptions: {
    // setup ({ dispatch }) {
    //   dispatch({ type: 'loadStorage' })
    // }
  }
}
