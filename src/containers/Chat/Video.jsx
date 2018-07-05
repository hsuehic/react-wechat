/**
 * Copyright(c) xiaowei.hsueh@gmail.com.
 *
 * Authors: Richard Hsueh <xiaowei.hsueh@gmail.com> (https://www.gistop.com/)
 * @Date   : 2018-6-29 11:45:20
 */

import React from 'react'
import { connect } from "dva"

import ChatVideo from '../../components/Chat/Video'

const mapStateToProps = state => {
  const { 
    contacts = [],
    info = {}
  } = state.wechat
  return {
    contacts,
    info
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { contacts, match } = this.props
    const { params } = match
    const { phone } = params
    const contact = contacts.find(c => c.phone === phone) || {}
    return <ChatVideo {...this.props} contact={contact} />
  }
}

export default Component
