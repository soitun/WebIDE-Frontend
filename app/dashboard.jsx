import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './dashboard/index.css'
import './dashboard/common.css'

import store from './dashboard/store'

import Home from './dashboard/view/home'
import Mask from './dashboard/view/mask'
import Loading from './dashboard/view/loading'
import VersionPop from 'dashboard/view/versionPop'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div style={{ height: '100%' }}>
        <Switch>
          <Route path='/dashboard' component={Home} />
        </Switch>
        <Mask />
        <Loading />
        <VersionPop />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('dashboard')
)
