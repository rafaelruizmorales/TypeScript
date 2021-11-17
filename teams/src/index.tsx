import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {App} from './components/App'
import './index.css'
import * as serviceWorker from './serviceWorker'
import {store} from './state'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
