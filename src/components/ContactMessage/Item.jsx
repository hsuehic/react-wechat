/**
 * 
 * 对话项
 * 
 * @Author : Richard <xiaowei.hsueh@gmail.com> (https://www.gistop.com)
 * @Link   : https://www.gistop.com
 * @Date   : 2018-6-10 14:18:10
 */

import React from 'react'
import { Badge } from 'antd-mobile'
import { withRouter } from 'dva/router'
import CustomIcon from '../CustomIcon'

import './Item.less'

const Component = ({ phone, nick, content, thumb, timestamp, newCount, history, notificationOff = false }) => {
  let nodeThumbnail = <img alt={nick} src={thumb} />
  if (newCount > 0) {
    if (notificationOff) {
      nodeThumbnail = <Badge text={newCount}>{nodeThumbnail}</Badge>
    } else {
      nodeThumbnail = <Badge dot>{nodeThumbnail}</Badge>
    }
  }
  let time = ''
  if (timestamp > 0) {
    const day = new Date(timestamp)
    time = `${day.getMonth() + 1}月${day.getDate()}`
  }
  return (<div styleName="container" onClick={() => history.push(`/contact/${phone}`)}>
    <div styleName="thumbnail">
      {nodeThumbnail}
    </div>
    <div styleName="content">
      <div styleName="content-title-row">
        <div styleName="left">{nick}</div>
        <div styleName="right">{time}</div>
      </div>
      <div styleName="content-extra-row">
        <div styleName="left">{content}</div>
        <div styleName="right">
          { notificationOff && <CustomIcon type="notificationsoff" size="md" />}
        </div>
      </div>
    </div>
  </div>);
};

export default withRouter(Component);
