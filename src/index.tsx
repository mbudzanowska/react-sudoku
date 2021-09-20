import React from 'react'
import ReactDOM from 'react-dom'

import { unregister } from './core'
import { GlobalStyles } from './styles'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <div>Hello world!</div>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
unregister()
