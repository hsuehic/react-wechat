/**
 * Copyright(c) xiaowei.hsueh@gmail.com.
 *
 * Authors: Richard Hsueh <xiaowei.hsueh@gmail.com> (https://www.gistop.com/)
 * @Date   : 2018-7-2 13:58:42
 */

import React from 'react'
import CustomIcon from '../CustomIcon'

import './index.less'

export default class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    const { className } = this.props
    return <div className={className} styleName="chat-input">
      <CustomIcon size="xl" type="yuyin" styleName="icon" />
      <input type="text" styleName="input" />
      <CustomIcon size="xl" type="smile" styleName="icon" />
      <CustomIcon size="xl" type="plus1" styleName="icon" />
    </div>
  }
}
