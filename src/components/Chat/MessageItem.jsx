/**
 * 会话记录
 * 
* @Author : Richard <xiaowei.hsueh@gmail.com> (https://www.gistop.com)
 * @Link   : https://www.gistop.com
 * @Date   : 2018-6-22 15:49:46
 */

import React from 'react'

import './index.less'

const Component = ({ thumb, content, isSend }) => {
  const nodeArrow = <div styleName="arrow" />
  const nodeContent = <div styleName="content">{content}</div>
  const nodeThumb = <img src={thumb} alt="" styleName="thumb" />
  return isSend ? <div styleName="item item-right">{nodeContent}{nodeArrow}{nodeThumb}</div> : <div styleName="item item-left">{nodeThumb}{nodeArrow}{nodeContent}</div>
}

export default Component
