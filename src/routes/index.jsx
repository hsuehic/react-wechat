import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import App from './App'
import Login from './Login'
import Register from './Register'
import GenericChat from './Chat/Generic'
import VideoChat from './Chat/Video'

const AppRouter = ({ history }) => (
  <Router history={history}>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/reg" component={Register} />
      <Route path="/" component={App} />
      <Route path="/chat/video/:phone" component={VideoChat} />
      <Route path="/chat/generic/:phone" component={GenericChat} />
    </Switch>
  </Router>)

export default AppRouter