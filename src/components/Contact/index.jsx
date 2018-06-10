/**
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * 
 * @Authors: 兴斋 <xingzhai.xxw@alibaba-inc.com> (https://www.gistop.com/)
 * @Link   : https://www.gistop.com
 * @Date   : 2018-6-10 17:57:30
 */

import React from 'react';
import { ListView, WhiteSpace } from 'antd-mobile';
import { ContactGroup } from '../Group';
import ImageGongzhonhao from '../../images/gongzhonghao.png';
import ImageGroup from '../../images/group.png';
import ImageNewFriend from '../../images/new-friend.png';
import ImageTag from '../../images/tag.png';

const { IndexedList } = ListView;

const Component = ({ items, history }) => {
  const dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });
  return (<div>
    <ContactGroup
      history={history}
      settings={[
        {
          thumb: <img src={ImageNewFriend} alt="Wallet" />,
          text: '新的朋友',
          pathname: '/contact/new'
        },
        {
          thumb: <img src={ImageGroup} alt="Wallet" />,
          text: '群聊',
          pathname: '/contact/group'
        },
        {
          thumb: <img src={ImageGongzhonhao} alt="Wallet" />,
          text: '公众号',
          pathname: '/contact/gzh'
        },
        {
          thumb: <img src={ImageTag} alt="Wallet" />,
          text: '标签',
          pathname: '/settings/wallet'
        }
      ]}
    />
    <WhiteSpace size="lg" />
    <IndexedList
      dataSource={dataSource}
      renderRow={(rowData) => <div /> }
      style={{
        height: '100%'
      }}
    />
  </div>);
};

export default Component;
