/**
 * 
 *
 * 
 * @Author : Richard <xiaowei.hsueh@gmail.com> (https://www.gistop.com)
 * @Link   : https://www.gistop.com
 * @Date   : 2018-6-10 19:00:48
 */

import React from 'react';
import Item from './Item';

import './index.less';

const Component = ({ children, header, className="", style={} }) => {
  return (<div className={className} styleName="group" style={style}>
    {!!header  && <div styleName="group-header">{header}</div>}
    <div styleName="group-body">
      {children}
    </div>
  </div>);  
};

Component.Item = Item;

export default Component;

