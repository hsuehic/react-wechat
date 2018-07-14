/**
 * 
 *
 * 
 * @Author : Richard <xiaowei.hsueh@gmail.com> (https://www.gistop.com)
 * @Link   : https://www.gistop.com
 * @Date   : 2018-6-10 19:41:44
 */

import React from 'react';
import Item from './Item';
import './index.less';


const Component = ({ thumb, text, pathname, extra, history, className='', onClick = null }) => {
  return (<Item styleName="set-item" className={className} onClick={() => {
      if (pathname) {
        history.push(pathname);
      } else if (typeof onClick === 'function') {
        onClick()
      }
    }}>
      {!!thumb &&<div styleName="set-item-icon">{thumb}</div>}
      <div styleName="set-item-text">{text}</div>
      {!!extra && <div styleName="set-item-extra">{extra}</div>}
  </Item>);
}

export default Component
