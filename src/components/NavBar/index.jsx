/**
 * Copyright(c) xiaowei.hsueh@gmail.com.
 *
 * 
 * @Authors: Richard Hsueh <xiaowei.hsueh@gmail.com> (https://www.gistop.com/)
 * @Link   : https://www.gistop.com
 * @Date   : 2018-6-23 16:17:35
 */

import React from 'react'

import './index.less'

const Component = ({ theme = 'dark', leftContent, rightContent, children, className, ...rest }) => (
  <div className={`am-navbar am-navbar-${theme} ${className}`} {...rest}>
    <div styleName="left">{leftContent}</div>
    <div styleName="center">{children}</div>
    <div styleName="right">{rightContent}</div>
  </div>
)

export default Component
