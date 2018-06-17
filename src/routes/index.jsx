import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import App from './App'
import Login from './Login'
import Register from './Register'

const AppRouter = ({ history }) => (
  <Router history={history}>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/reg" component={Register} />
      <Route path="/" component={App} />
    </Switch>
  </Router>)

export default AppRouter