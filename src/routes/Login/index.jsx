/**
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * Authors:
 *   兴斋 <xingzhai.xxw@alibaba-inc.com> (https://www.gistop.com/)
 */

import React from 'react'
import { ActionSheet, NavBar, List, Button, InputItem } from 'antd-mobile'
import { Link } from 'dva/router'

export default class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.onShowActionSheet = this.onShowActionSheet.bind(this)
  }

  componentDidMount() {
  }

  onShowActionSheet() {
    const BUTTONS = ['登录其它帐号', '注册', '安全中心']
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS
    }, (buttonIndex) => {
      if (buttonIndex === 1) {
        const { history } = this.props
        history.push('/reg')
      }
    })
  }

  render() {
    return <div className="app">
      <NavBar
        className="header"
        leftContent={<span>登录</span>}
      />
      <div className="body" style={{ paddingBottom: '80px', justifyContent: 'center' }}>
        <List
          renderFooter={<Button type="primary" className="wechat">登录</Button>}
        >
          <InputItem name="we_user" type="phone" placeholder="Input phone number">手机号码</InputItem>
          <InputItem name="we_password" type="password" placeholder="Input password">登录密码</InputItem>
        </List>
      </div>
      <div className="footer">
        <Link to="/reset/password">找回密码</Link>
        <Link to="/freeze">紧急冻结</Link>
        <a name="more" onClick={this.onShowActionSheet}>更多</a>
      </div>
    </div>
  }
}
