/**
 * 音视频聊天窗口
 * 
 *
 * Authors:
 *  Richard <xiaowei.hsueh@gmail.com> (https://www.gistop.com)
 */

import React from 'react'

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
    return <div className="app">
      <video />
    </div>
  }
}
