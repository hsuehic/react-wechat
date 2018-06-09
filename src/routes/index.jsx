import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import App from './App'

const AppRouter = ({ history }) => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </Router>
)

export default AppRouter