import React from 'react'
import AppNavigation, { routerMiddleware, routerReducer } from './Navigation/AppNavigation'
import dva from './Store/dva'
import models from './Store'

const app = dva({
  initialState: {},
  models: models,
  extraReducers: { router: routerReducer },
  onAction: [routerMiddleware],
  onError (e) {
    console.log('onError', e)
  }
})

const App = app.start(<AppNavigation />)

export default App
