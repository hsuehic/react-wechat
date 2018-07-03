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
import './index.less'

const Component = ({ contact, info, items = [], className = '' }) => {
  let dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });
  dataSource = dataSource.cloneWithRows(items);
  return <ListView
    dataSource={dataSource}
    className={className}
    styleName="container"
    renderRow={row => {
      const isSend = contact.phone === row.phone
      return <MessageItem {...row} isSend={isSend} thumb={isSend ? info.thumb : contact.thumb} />
    }}
  />
}

export default Component
