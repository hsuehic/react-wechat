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
    const { dispatch, contact } = this.props
    const { phone } = contact
    const now = new Date()
    const timestamp = now.getTime()
    dispatch({
      type: 'wechat/saveMessage',
      payload: {
        phone,
        content,
        timestamp
      }
    })
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
        className="main"
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
