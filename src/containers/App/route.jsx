/**
 * Copyright(c) xiaowei.hsueh@gmail.com.
 *
 * Authors: Richard Hsueh <xiaowei.hsueh@gmail.com> (https://www.gistop.com/)
 * @Date   : 2018-7-8 12:41:08
 */

import React from 'react'
import { connect } from 'dva'
import { Router, Route, Switch } from 'dva/router'

import App from './index'
import GenericChat from '../Chat/Generic'
import VideoChat from '../Chat/Video'
import ContactDetail from '../ContactDetail'
import createWebsocket from '../../websocket'

import { RTC_MESSAGE_TYPE } from '../../constant'


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
export default class Component extends React.Component {
  constructor(props, ctx) {
    super(props, ctx)
    const { isLoggedIn, dispatch } = props
    this.onMessage = this.onMessage.bind(this)
    if (isLoggedIn && !window.websocket) {
      const o = createWebsocket(dispatch)
      const { addMessageHandler, removeMessageHandler } = o
      window.addMessageHandler = addMessageHandler
      window.removeMessageHandler = removeMessageHandler
    }
  }

  componentDidMount() {
    const { isLoggedIn } = this.props
    if (isLoggedIn) {
      window.addMessageHandler(this.onMessage)
    }
  }

  componentWillUnmount() {
    const { isLoggedIn } = this.props
    if (isLoggedIn) {
      window.removeMessageHandler(this.onMessage)
    }
  }

  onMessage(msg) {
    const { history } = this.props
    const { payload } = msg
    const { from } = payload
    switch(msg.type) {
      case RTC_MESSAGE_TYPE.VIDEO_OFFER: // 联系人发起视频聊天
        history.push({
          pathname: `/chat/video/${from}`,
          state: {
          offerMessage: msg
          }
        })
        break
      default:
        break
    }
  }

  render() {
    const node = (<Router {...this.props}>
      <Switch>
        <Route path="/chat/video/:phone" component={VideoChat} />
        <Route path="/chat/generic/:phone" component={GenericChat} />
        <Route path="/contact/:phone([\d_]+)" component={ContactDetail} />
        <Route path="/:tab(contact|conversation|discovery|my)?" component={App} />
      </Switch>
    </Router>)
    return node
  }
}

