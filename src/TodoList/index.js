import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

console.log(todoApp)
let store = createStore(todoApp)
console.log(store)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
