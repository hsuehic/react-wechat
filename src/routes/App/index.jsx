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
    this.onMessage = this.onMessage.bind(this)
    if (isLoggedIn && !window.websocket) {
      const o = createWebsocket(dispatch)
      const { websocket, addMessageHandler, removeMessageHandler } = o
      window.websocket = websocket
      window.addMessageHandler = addMessageHandler
      window.removeMessageHandler = removeMessageHandler
    }
  }

  componentDidMount() {
    window.addMessageHandler(this.onMessage)
  }

  componentWillUnmount() {
    window.removeMessageHandler(this.onMessage)
  }

  onMessage(msg) {
    const { history } = this.props
    const { payload } = msg
    const { from } = payload
    switch(msg.type) {
      case 'video-offer': // 联系人发起视频聊天
        history.push(`/chat/video/${from}`)
        break
      default:
        break
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