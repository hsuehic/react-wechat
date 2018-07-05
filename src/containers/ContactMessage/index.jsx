/**
 * 对话界面容器
 *
 * Authors:
 *  Richard <xiaowei.hsueh@gmail.com> (https://www.gistop.com)
 */

import React from 'react'
import { connect } from 'dva'
import ContactMessageList from '../../components/ContactMessage/List'

const mapStateToProps = state => {
  const { contacts, conversations } = state.wechat
  return {
    contacts,
    conversations
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { contacts, conversations } = this.props
    // {
    //   phone: '18958067917',
    //   nick: 'Richard',
    //   content: '我转了3000元给您，请查收',
    //   time: 1530696468485,
    //   thumbnail: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58',
    //   notificationOff: true
    // }
    const items = contacts.map(c => {
      const { nick, phone, thumb, notificationOff } = c
      const conversation = conversations[phone] || {
        newCount: 0,
        timestamp: 0
      }
      let content = ''
      const { timestamp, newCount, items } = conversation
      if (items && items.length > 0) {
        content = items[items.length - 1].content
      }
      return {
        content,
        newCount,
        nick,
        notificationOff,
        phone,
        timestamp,
        thumb
      }
    })

    const hasMore = false;
    return (<ContactMessageList items={items} hasMore={hasMore} />);
  }
}
