/**
 * 文本聊天窗口
 * 
 *
 * Authors:
 *  Richard <xiaowei.hsueh@gmail.com> (https://www.gistop.com)
 */

import React from 'react'
import CustomIcon from '../../components/CustomIcon'
import DetailContainer from '../../components/DetailContainer'

import MessageList from './MessageList'
import ChatInput from './ChatInput'

import './index.less'

export default class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.onSend = this.onSend.bind(this)
  }

  onSend(content) {
    const { dispatch, info, contact } = this.props
    const { phone: to } = contact
    const { phone: from } = info
    const now = new Date()
    const timestamp = now.getTime()
    const action = {
      type: 'wechat/saveMessage',
      payload: {
        to,
        from,
        content,
        timestamp
      }
    }
    dispatch(action)
    window.websocket.send(JSON.stringify(action))
  }

  render() {
    const { props } = this
    const { info, contact, items } = props
    const { nick } = contact
    return (<DetailContainer
      leftTitle={nick}
      rightContent={<div><CustomIcon size="lg" type="contact-fill" /></div>}
    >
      <MessageList
        className="main chat-list"
        items={items}
        info={info}
        contact={contact}
      />
      <ChatInput
        className="foot"
        onSend={this.onSend}
      />
    </DetailContainer>)
  }
}
