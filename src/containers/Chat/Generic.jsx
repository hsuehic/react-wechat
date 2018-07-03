/**
 * Copyright(c) xiaowei.hsueh@gmail.com.
 *
 * Authors: Richard Hsueh <xiaowei.hsueh@gmail.com> (https://www.gistop.com/)
 * @Date   : 2018-6-29 11:45:08
 */

import React from 'react'
import { connect } from 'dva'

import ChatGeneric from '../../components/Chat/Generic'

const mapStateToProps = state => {
  return {
    contacts: state.wechat.contacts,
    conversations: state.wechat.conversations,
    info: state.wechat.info
  }
}

@connect(mapStateToProps)
export default class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { contacts, conversations, info, match, dispatch } = this.props
    const { params } = match
    const { phone } = params
    const contact = contacts.find(c => c.phone === phone) || {};
    const conversation = conversations.find(c => c.phone === phone) || {
      phone,
      items: []
    } ;
    return <ChatGeneric {...conversation} contact={contact} info={info} dispatch={dispatch} />
  }
}
