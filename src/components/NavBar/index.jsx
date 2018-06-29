/**
 * Copyright(c) xiaowei.hsueh@gmail.com.
 *
 * 
 * @Authors: Richard Hsueh <xiaowei.hsueh@gmail.com> (https://www.gistop.com/)
 * @Link   : https://www.gistop.com
 * @Date   : 2018-6-23 16:17:35
 */

import React from 'react'

const Component = ({ theme = 'dark', leftContent, rightContent, children, className, ...rest }) => (
  <div className={`am-navbar am-navbar-${theme} ${className}`} {...rest}>
    <div className="am-navbar-left">{leftContent}</div>
    <div className="am-navbar-title">{children}</div>
    <div className="am-navbar-right">{rightContent}</div>
  </div>
)

export default Component
