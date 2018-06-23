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
    contactInfo: state.wechat.contactInfo
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
    const { contactInfo, ...rest } = props
    return <ContactDetail {...contactInfo} {...rest} />
  }
}

export default Component
