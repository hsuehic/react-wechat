/**
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * Authors:
 *   兴斋 <xingzhai.xxw@alibaba-inc.com> (https://www.gistop.com/)
 */

import React from 'react';
import { Badge } from 'antd-mobile';
import CustomIcon from '../CustomIcon';
import './index.less';

export default ({text, icon, badgeText, badgeDot, active = false }) => {
  let nodeIcon = <CustomIcon type={ active ? `${icon}-fill`: icon } size="lg" />;
  if (badgeText) {
    nodeIcon = <Badge text={badgeText}>{nodeIcon}</Badge>
  } else if(badgeDot) {
    nodeIcon = <Badge dot>{nodeIcon}</Badge>;
  }
  return (<div className="app-tab-item">
    <div className="icon">{nodeIcon}</div>
    <div className="text">{text}</div>
</div>);
}