/**
 * 对话列表
 * 
 * @Author : Richard <xiaowei.hsueh@gmail.com> (https://www.gistop.com)
 * @Link   : https://www.gistop.com
 * @Date   : 2018-6-22 15:50:02
 */

import React from 'react'

import { ListView } from 'antd-mobile'

import MessageItem from './MessageItem'

const Component = ({ items = [], className="" }) => {
  let dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });
  dataSource = dataSource.cloneWithRows(items);
  return <ListView
    dataSource={dataSource}
    className={className}
    renderRow={row => <MessageItem {...row} />}
  />
}

export default Component
