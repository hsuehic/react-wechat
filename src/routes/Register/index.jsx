/**
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * Authors:
 *   兴斋 <xingzhai.xxw@alibaba-inc.com> (https://www.gistop.com/)
 */

import React from 'react'
import { Button, Icon, List, InputItem, NavBar } from 'antd-mobile'
import ImagePicker from '../../components/ImagePicker'

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
    history.goBack()
  }

  render() {
    return <div className="app">
      <NavBar
        className="header"
        leftContent={<div><Icon type="left" className="mr-s back-icon" onClick={this.onGoBack} /><span className="v-middle">注册</span></div>}
      />
      <div className="body">
        <List
          renderFooter={<Button type="primary" className="wechat">注册</Button>}
        >
          <div styleName="nick">
            <div styleName="input">
              <InputItem
                defaultValue=""
                name="nick"
              >
                昵称
              </InputItem>
            </div>
            <ImagePicker styleName="image" />
          </div>
          <List.Item
            extra={<span className="wechat-color">中国(+86)</span>}
          >
            <div className="am-input-label am-input-label-5">国家/地区</div>
          </List.Item>
          <InputItem
            type="phone"
            name="phone"
          >
            手机号
          </InputItem>
          <InputItem
            type="text"
            name="userName"
          >
            用户名
          </InputItem>
          <InputItem
            type="password"
            defaultValue=""
          >
            密码
          </InputItem>
        </List>
      </div>
    </div>
  }
}
