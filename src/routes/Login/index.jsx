/**
 * 
 *
 * Authors:
 *  Richard <xiaowei.hsueh@gmail.com> (https://www.gistop.com)
 */

import React from 'react'
import { ActionSheet, NavBar, List, Button, InputItem, Toast } from 'antd-mobile'
import { connect } from 'dva'
import { Link } from 'dva/router'
import { NAMESPACE } from '../../constant'

const mapStateToProps = state => {
  return { 
    isLogging: state.loading.effects[`${NAMESPACE}/isLoadingLogin`]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login (params) {
      return dispatch({
        type: `${NAMESPACE}/login`,
        payload: { params }
      })
    }
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      phone: '',
      password: ''
    }
    this.onLogin = this.onLogin.bind(this)
    this.onShowActionSheet = this.onShowActionSheet.bind(this)
  }

  componentDidMount() {
  }

  onLogin() {
    const { login } = this.props
    let { phone } = this.state
    phone = phone.replace(/\s/mg, '')
    const { password } = this.state
    const params = { phone, password }
    const p = login(params)
    p.then(res => {
      if (res.code === 0) {
        window.SEC_TOKEN = res.data.token
        const { history } = this.props
        history.push('/')
      } else {
        Toast.fail(res.message)
      }
    })
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
    const { isLogging } = this.props
    return <div className="app">
      <NavBar
        className="header"
        leftContent={<span>登录</span>}
      />
      <div className="body" style={{ paddingBottom: '80px', justifyContent: 'center' }}>
        <List
          renderFooter={<Button type="primary" className="wechat" loading={isLogging} onClick={this.onLogin}>登录</Button>}
        >
          <InputItem
            name="phone"
            type="phone"
            placeholder="Input phone number"
            onChange={(phone) => {
              this.setState({
                phone
              })
            }}
          >手机号码</InputItem>
          <InputItem
            name="password"
            type="password"
            placeholder="Input password"
            onChange={(password) => {
              this.setState({
                password
              })
            }}
          >登录密码</InputItem>
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

export default Component
