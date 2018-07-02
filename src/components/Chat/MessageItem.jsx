/**
 * 会话记录
 * 
* @Author : Richard <xiaowei.hsueh@gmail.com> (https://www.gistop.com)
 * @Link   : https://www.gistop.com
 * @Date   : 2018-6-22 15:49:46
 */

import React from 'react'

import './index.less'

const Component = ({ timestamp, thumb, content, isSend }) => {
  const styleName = isSend ? 'item-right' : 'item-left'
  return (<div styleName={styleName}>
    <div>{timestamp}</div>
    <div><div styleName="content">{content}</div><img src={thumb} alt="" /></div>
  </div>)
}

export default Component
