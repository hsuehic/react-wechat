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
  }

  render() {
    const { props } = this
    const { nick, items } = props
    return (<DetailContainer
      leftTitle={nick}
      rightContent={<div><CustomIcon size="lg" type="contact-fill" /></div>}
    >
      <MessageList
        className="main"
        items={items}
      />
      <ChatInput
        className="foot"
      />
    </DetailContainer>)
  }
}
