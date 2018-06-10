/**
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * 
 * @Authors: 兴斋 <xingzhai.xxw@alibaba-inc.com> (https://www.gistop.com/)
 * @Link   : https://www.gistop.com
 * @Date   : 2018-6-10 19:41:44
 */

import React from 'react';
import Item from './Item';
import './index.less';


const Component = ({ thumb, text, pathname, className='', history }) => {
  return (<Item styleName="contact-item" className={className} onClick={() => { history.push(pathname); }}>
      {!!thumb &&<div styleName="contact-item-icon">{thumb}</div>}
      <div styleName="contact-item-text">{text}</div>
  </Item>);
}

export default Component
