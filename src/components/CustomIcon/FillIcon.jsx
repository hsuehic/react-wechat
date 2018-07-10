/**
 * 圆形带背景色和前景色的图标
 *
 * Authors:
 *  Richard <xiaowei.hsueh@gmail.com> (https://www.gistop.com)
 */

import React from 'react'
import Icon from './Icon'

import './index.less'

export default ({ type, size = 'md', className = '', ...rest }) => {
  return (<div styleName="fill-icon" className={className}>
    <Icon type={type} size={size} {...rest} />
  </div>)
};

