/**
 * 
 *
 * Authors:
 *  Richard <xiaowei.hsueh@gmail.com> (https://www.gistop.com)
 */

import React from 'react'
import { Button, Icon, InputItem, List, NavBar, Toast } from 'antd-mobile'
import { connect } from 'dva'
import ImagePicker from '../../components/ImagePicker'

import './index.less'

import { NAMESPACE } from '../../constant'

const mapStateToProps = state => {
  return { 
    isLoading: state.loading.effects[`${NAMESPACE}/register`]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    register (params) {
      return dispatch({
        type: `${NAMESPACE}/register`,
        payload: { params }
      })
    }
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nick: '',
      thumb: '',
      phone: '',
      email: '',
      region: '+86',
      password: '',
      cpassword: '',
      useName: ''
    }
    this.onGoBack = this.onGoBack.bind(this)
    this.onRegister = this.onRegister.bind(this)
  }

  onGoBack() {
    const { history } = this.props
    history.goBack()
  }

  onRegister() {
    const { nick, thumb, userName, password, cpassword, region, email } = this.state
    if (password !== cpassword) {
      Toast.fail('两次输入密码不一致，请重新输入')
    } else {
      const { register } = this.props
      let { phone } = this.state
      phone = phone.replace(/\s/mg, '')
      const params = { nick, thumb, userName, password, region, email, phone }
      const p = register(params)
      p.then(res => {
        if (res.code === 0) {
          Toast.success('注册成功，请登录')
          const { history } = this.props
          history.push('/login')
        } else {
          Toast.fail(res.message)
        }
      })
    }
  }

  render() {
    const stateChangeHandle = (stateName) => {
      return (value) => {
        this.setState({
          [stateName]: value
        })
      }
    }

    return <div className="app">
      <NavBar
        className="header"
        leftContent={<div><Icon type="icleft" className="mr-m back-icon" onClick={this.onGoBack} /><span className="v-middle">注册</span></div>}
      />
      <div className="body">
        <List
          renderFooter={<Button type="primary" size="median" className="wechat" isLoading={this.props.isLoading} onClick={this.onRegister}>注册</Button>}
        >
          <div styleName="nick">
            <div styleName="input">
              <InputItem
                defaultValue=""
                name="nick"
                onChange={stateChangeHandle('nick')}
              >
                昵称
              </InputItem>
            </div>
            <ImagePicker maxSize={50 * 1024} styleName="image" onChange={stateChangeHandle('thumb')} />
          </div>
          <List.Item
            extra={<span className="wechat-color">中国(+86)</span>}
          >
            <div className="am-input-label am-input-label-5">国家/地区</div>
          </List.Item>
          <InputItem
            type="phone"
            name="phone"
            onChange={stateChangeHandle('phone')}
          >
            手机号
          </InputItem>
          <InputItem
            type="text"
            name="email"
            onChange={stateChangeHandle('email')}
          >
            Email
          </InputItem>
          <InputItem
            type="text"
            name="userName"
            onChange={stateChangeHandle('userName')}
          >
            用户名
          </InputItem>
          <InputItem
            type="password"
            defaultValue=""
            name="password"
            onChange={stateChangeHandle('password')}
          >
            密码
          </InputItem>
          <InputItem
            type="password"
            name="cpassword"
            defaultValue=""
            onChange={stateChangeHandle('cpassword')}
          >
            确认密码
          </InputItem>
        </List>
      </div>
    </div>
  }
}
