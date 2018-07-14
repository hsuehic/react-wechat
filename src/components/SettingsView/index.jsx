/**
 * Copyright(c) xiaowei.hsueh@gmail.com.
 *
 * Authors: Richard Hsueh <xiaowei.hsueh@gmail.com> (https://www.gistop.com/)
 * @Date   : 2018-7-14 15:40:00
 */

import React from 'react'
import { Badge, WhiteSpace } from 'antd-mobile';

import { SetGroup } from '../Group/index';
import DetailContainer from '../DetailContainer'

export default class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    return <DetailContainer
      title={<div>设置</div>}
    >

<WhiteSpace size="lg" />
    <WhiteSpace size="lg" />
    <SetGroup
      history={history}
      settings={[
        {
          text: '帐号与安全',
          pathname: '/settings/security'
        }
      ]}
    />
    <WhiteSpace size="lg" />
    <SetGroup
      history={history}
      settings={[
        {
          text: '新消息提醒',
          pathname: '/settings/message'
        },
        {
          text: '勿扰模式',
          pathname: '/settings/dnd'
        },
        {
          text: '聊天',
          pathname: '/settings/chat'
        },
        {
          text: '隐私',
          pathname: '/settings/privacy'
        },
        {
          text: '通用',
          pathname: '/settings/common'
        }
      ]}
    />
    <WhiteSpace size="lg" />
    <SetGroup
      history={history}
      settings={[
        {
          text: <div>关于微信<Badge text="New" className="ml-m" /></div>,
          pathname: '/about'
        },
        {
          text: '帮助与反馈',
          pathname: '/settings/feedback'
        }
      ]}
    />
    <WhiteSpace size="lg" />
    <SetGroup
      history={history}
      settings={[
        {
          text: <div>插件</div>,
          pathname: '/plugin'
        }
      ]}
    />
    <WhiteSpace size="lg" />
    <SetGroup
      history={history}
      settings={[
        {
          text: <div>切换账号</div>,
          pathname: '/change/account'
        },
        {
          text: '退出',
          pathname: '/logout'
        }
      ]}
    />
    </DetailContainer>
  }
}
