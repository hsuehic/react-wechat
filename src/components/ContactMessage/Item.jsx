/**
 * 
 *
 * 
 * @Author : Richard <xiaowei.hsueh@gmail.com> (https://www.gistop.com)
 * @Link   : https://www.gistop.com
 * @Date   : 2018-6-10 14:18:10
 */

import React from 'react';
import { Badge } from 'antd-mobile';
import CustomIcon from '../CustomIcon';

import './Item.less'

const Component = ({ title, extra, thumbnail, time, messageCount, hasNew, notificationOff = false }) => {
  let nodeThumbnail = <img alt={title} src={thumbnail} />;
  if (messageCount > 0) {
    nodeThumbnail = <Badge text={messageCount}>{nodeThumbnail}</Badge>
  } else if (hasNew) {
    nodeThumbnail = <Badge dot>{nodeThumbnail}</Badge>
  }
  return (<div styleName="container">
    <div styleName="thumbnail">
      {nodeThumbnail}
    </div>
    <div styleName="content">
      <div styleName="content-title-row">
        <div styleName="left">{title}</div>
        <div styleName="right">{time}</div>
      </div>
      <div styleName="content-extra-row">
        <div styleName="left">{extra}</div>
        <div styleName="right">
          { notificationOff && <CustomIcon type="notificationsoff" size="md" />}
        </div>
      </div>
    </div>
  </div>);
};

export default Component;
