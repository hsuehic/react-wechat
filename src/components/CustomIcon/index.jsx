/**
 * 自定义图标组件
 *
 * Authors:
 *  Richard <xiaowei.hsueh@gmail.com> (https://www.gistop.com)
 */

import React from 'react';

export default ({ type, size = 'md', className = '', ...rest }) => {
  return <i className={`weicon we-icon-${type} we-icon-${size} ${className}`} {...rest} />;
};

