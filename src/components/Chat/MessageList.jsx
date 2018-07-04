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

class Component extends React.Component  {
  componentDidMount() {
    this.scrollToCurrent()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.items !== this.props.items) {
      this.scrollToCurrent()
    }
  }

  scrollToCurrent() {
    const self = this
    setTimeout(() => {
      if (self.listView) {
        const { listviewRef } = self.listView
        if (listviewRef) {
          const scrollProperties = listviewRef.ListViewRef.getMetrics()
          if (scrollProperties) {
            const { contentLength, visibleLength } = scrollProperties
            if (contentLength && visibleLength) {
              const offset = contentLength - visibleLength
              if (offset > 0) {
                listviewRef.scrollTo(0, offset)
              }
            }
          }
        }
      }
    })
  }

  render () {
    const { contact, info, items = [], className = 'chat-list'  } = this.props
    let dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    dataSource = dataSource.cloneWithRows(items);
    return <ListView
      dataSource={dataSource}
      className={className}
      renderRow={row => {
        const isSend = contact.phone === row.to
        return <MessageItem {...row} isSend={isSend} thumb={isSend ? info.thumb : contact.thumb} />
      }}
      ref={listView => {
        if (listView) {
          this.listView = listView
        }
      }}
    />
  }
}

export default Component
