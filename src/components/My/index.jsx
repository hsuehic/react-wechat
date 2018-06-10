/**
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * 
 * @Authors: 兴斋 <xingzhai.xxw@alibaba-inc.com> (https://www.gistop.com/)
 * @Link   : https://www.gistop.com
 * @Date   : 2018-6-10 17:03:15
 */

import React from 'react';
import { List, WhiteSpace } from 'antd-mobile';
import CustomIcon from '../CustomIcon';

import './index.less';

const {Item } = List;
const { Brief } = Item;

const Component = ({ id, nick, thumb }) => {
  return (<div>
    <WhiteSpace size="lg" />
    <List
    >
      <Item
        thumb={<img alt="" src={thumb} style={{ width: '50px', height: '50px'}} />}
        extra={<CustomIcon size="lg" type="qrcode" />}
        styleName="item"
      >
        {nick}
        <Brief>微信号:{id}</Brief>
      </Item>
    </List>
  </div>);
};

export default Component;
