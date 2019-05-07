import React from 'react'
import ReactDOM from 'react-dom'
import { configureStore } from './store'
import '@babel/polyfill'

import { Provider } from 'react-redux'
import { App } from '@components/app'

const store = configureStore()

const root = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
)
