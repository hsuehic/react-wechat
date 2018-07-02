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
  return {
    contacts: state.wechat.contacts
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
    const { match, contacts, ...rest } = props
    const { params } = match
    const { phone } = params
    const contactInfo = contacts.find(contact => contact.phone === phone) || {}

    return <ContactDetail {...contactInfo} {...rest} />
  }
}

export default Component
