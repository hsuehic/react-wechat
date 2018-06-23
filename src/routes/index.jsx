import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import App from './App'
import Login from './Login'
import Register from './Register'
import GenericChat from './Chat/Generic'
import VideoChat from './Chat/Video'
import ContactDetail from '../containers/ContactDetail';

const AppRouter = ({ history }) => (
  <Router history={history}>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/reg" component={Register} />
      <Route path="/chat/video/:phone" component={VideoChat} />
      <Route path="/chat/generic/:phone" component={GenericChat} />
      <Route path="/contact/:phone" component={ContactDetail} />
      <Route path="/" component={App} />
    </Switch>
  </Router>)

export default AppRouter