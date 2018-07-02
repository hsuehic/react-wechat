/**
 * 
 * 详情页面容器: 带有返回 button, title显示在左侧
 * Copyright(c) xiaowei.hsueh@gmail.com.
 *
 * @Authors: Richard Hsueh <xiaowei.hsueh@gmail.com> (https://www.gistop.com/)
 * @Link   : https://www.gistop.com
 * @Date   : 2018-6-23 16:30:40
 */

import React from 'react'
import { withRouter } from 'dva/router'

import NavBar from '../NavBar'
import Icon from '../CustomIcon'

const Component = ({ history, leftTitle, rightContent, children }) => (
  <div className="app">
    <NavBar
      className="header"
      leftContent={<div>
        <Icon
          type="icleft"
          size="lg"
          className="mr-s back-icon"
          onClick={() => { 
            history.goBack() 
          }} 
        />
        <span className="v-middle">{leftTitle}</span>
      </div>
      }
      rightContent={rightContent}
    />
    <div className="body">
      {children}
    </div>
  </div>
)

export default withRouter(Component)
