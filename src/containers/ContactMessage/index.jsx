/**
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * Authors:
 *   兴斋 <xingzhai.xxw@alibaba-inc.com> (https://www.gistop.com/)
 */

import React from 'react';
import ContactMessageList from '../../components/ContactMessage/List';

export default class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    const items = [
      {
        title: 'Richard',
        extra: '我转了3000元给您，请查收',
        time: '6月5日',
        thumbnail: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58',
        hasNew: true,
        notificationOff: true
      },
      {
        title: 'Richard',
        extra: '我转了3000元给您，请查收',
        time: '6月5日',
        thumbnail: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58',
        hasNew: false,
        notificationOff: true
      },
      {
        title: 'Richard',
        extra: '我转了3000元给您，请查收',
        time: '6月5日',
        thumbnail: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58',
        hasNew: true
      },
      {
        title: 'Richard',
        extra: '我转了3000元给您，请查收',
        time: '6月3日',
        thumbnail: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58',
        hasNew: true,
        messageCount: 5,
      }
    ];
    const hasMore = false;
    return (<ContactMessageList items={items} hasMore={hasMore} />);
  }
}
