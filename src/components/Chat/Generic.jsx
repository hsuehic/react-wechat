/**
 * 文本聊天窗口
 * 
 *
 * Authors:
 *  Richard <xiaowei.hsueh@gmail.com> (https://www.gistop.com)
 */

import React from 'react'
import { Icon, NavBar } from 'antd-mobile'
import CustomIcon from '../../components/CustomIcon'

import './index.less'

export default class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.onGoBack = this.onGoBack.bind(this)
  }

  componentDidMount() {
  }

  onGoBack() {
    const { history } = this.props
    history.goBack();
  }

  render() {
    const { props } = this
    const { nick } = props
    return <div className="app">
      <NavBar
        className="header"
        leftContent={<div><Icon type="left" className="mr-m back-icon" onClick={this.onGoBack} /><span className="v-middle">{nick}</span></div>}
        rightContent={<div><CustomIcon size="lg" type="contact-fill" /></div>}
      />
      <div className="body"></div>
    </div>
  }
}
