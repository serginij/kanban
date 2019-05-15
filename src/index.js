import React from 'react'
import ReactDOM from 'react-dom'
import { configureStore } from './store'
import '@babel/polyfill'

import { Provider } from 'react-redux'
import { Reset } from 'styled-reset'
import { App } from '@components/app'

const store = configureStore()

const root = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <Reset />
    <App />
  </Provider>,
  root
)
