import React from 'react'
import { connect } from 'dva'
import { Router, Route, Switch } from 'dva/router'
import App from '../../containers/App'
import Login from '../../containers/Login'
import GenericChat from '../../containers/Chat/Generic'
import VideoChat from '../../containers/Chat/Video'
import ContactDetail from '../../containers/ContactDetail'
import createWebsocket from '../../websocket'

const mapStateToProps = state => {
  const { isLoggedIn } = state.wechat
  return {
    isLoggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class AppRouter extends React.Component {
  constructor(props, ctx) {
    super(props, ctx)
    const { isLoggedIn, dispatch } = props
    if (isLoggedIn && !window.websocket) {
      const o = createWebsocket(dispatch)
      const { websocket, addMessageHandler, removeMessageHandler } = o
      window.websocket = websocket
      window.addMessageHandler = addMessageHandler
      window.removeMessageHandler = removeMessageHandler
    }
  }

  render() {
    const { isLoggedIn } = this.props
    let node
    if (isLoggedIn) {
      node = (<Router {...this.props}>
        <Switch>
          <Route path="/chat/video/:phone" component={VideoChat} />
          <Route path="/chat/generic/:phone" component={GenericChat} />
          <Route path="/contact/:phone([\d_]+)" component={ContactDetail} />
          <Route path="/:tab(contact|conversation|discovery|my)?" component={App} />
        </Switch>
      </Router>)
    } else {
      node = <Login {...this.props} />
    }
    return node
  }
}

export default AppRouter