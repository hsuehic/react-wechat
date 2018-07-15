/**
 * Copyright(c) xiaowei.hsueh@gmail.com.
 *
 * Authors: Richard Hsueh <xiaowei.hsueh@gmail.com> (https://www.gistop.com/)
 * @Date   : 2018-6-23 17:20:24
 */

import React from 'react'
import { connect } from 'dva'
import ContactDetail from '../../components/ContactDetail'

const mapStateToProps = state => {
  const { contacts, searchResult } = state.wechat
  return {
    contacts,
    searchResult
  }
}

@connect(mapStateToProps)
class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    const { props } = this
    const { match, contacts, searchResult, ...rest } = props
    const { params } = match
    const { phone } = params
    let contactInfo = contacts.find(contact => contact.phone === phone)
    let isContact
    if (!contactInfo) {
      contactInfo = searchResult.find(contact => contact.phone === phone)
      isContact = false
    } else {
      isContact = true
    }

    return <ContactDetail {...contactInfo} {...rest} isContact={isContact} />
  }
}

export default Component
