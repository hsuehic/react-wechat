/**
 * Copyright(c) xiaowei.hsueh@gmail.com.
 *
 * Authors: Richard Hsueh <xiaowei.hsueh@gmail.com> (https://www.gistop.com/)
 * @Date   : 2018-7-2 13:58:42
 */

import React from 'react'
import { Button } from 'antd-mobile'
import CustomIcon from '../CustomIcon'

import './index.less'

export default class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: null
    }
  }

  render() {
    const { className } = this.props
    const { content } = this.state
    const nodeIconPlus = <CustomIcon size="xl" type="plus1" styleName="icon" />
    const nodeButtonSend = <Button type="primary" className="wechat" size="small" styleName="button">发送</Button>
    const node = content ? nodeButtonSend : nodeIconPlus 
    return <div className={className} styleName="chat-input">
      <CustomIcon size="xl" type="yuyin" styleName="icon" />
      <input
        ref={input => { 
          if (input) {
            this.input = input 
          } 
        }}
        type="text"
        styleName="input"
        onChange={(e) => {
          this.setState({
            content: e.target.value
          })
        }}
      />
      <CustomIcon size="xl" type="smile" styleName="icon" />
      {node}
    </div>
  }
}
