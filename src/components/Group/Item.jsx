/**
 * 
 *
 * 
 * @Author : Richard <xiaowei.hsueh@gmail.com> (https://www.gistop.com)
 * @Link   : https://www.gistop.com
 * @Date   : 2018-6-10 19:01:12
 */

import React from 'react';
import './index.less';

const Component = ({ children, className = '', style={}, onClick=() => {} }) => {
  return <div className={className} style={style} styleName="group-item" onClick={onClick}>{children}</div>
};

export default Component;
