/**
 * 联系人详情
 * 
 * @Author : Richard <xiaowei.hsueh@gmail.com> (https://www.gistop.com)
 * @Link   : https://www.gistop.com
 * @Date   : 2018-6-10 17:03:15
 */

import React from 'react'
import { Button, List, WhiteSpace, Toast } from 'antd-mobile'
import { SetGroup, Group } from '../Group/index'
import CustomIcon from '../CustomIcon'
import DetailContainer from '../DetailContainer'
import ImageNoPicture from '../../images/a80.png'


import './index.less'

const {Item } = List
const { Brief } = Item

const Component = ({ userName, nick, thumb, phone, region, history, dispatch, isContact }) => {
  return (
    <DetailContainer
      history={history}
      leftTitle={isContact ? nick : '详细资料'}
      rightContent={<CustomIcon size="lg" type="more2" />}
    >
      <div>
        <WhiteSpace size="lg" />
        <List
        >
          <Item
            thumb={<img alt="" src={thumb || ImageNoPicture} style={{ width: '60px', height: '60px', marginRight: '20px'}} />}
            styleName="item"
          >
            {nick}
            <Brief>微信号:{userName}</Brief>
          </Item>
        </List>
        <WhiteSpace size="lg" />
        <SetGroup
          history={history}
          settings={[
            {
              text: '设置备注和标签',
              pathname: '/settings/remark'
            },
            {
              text: <div styleName="item-content"><div styleName="item-label">电话号码</div><div styleName="item-value"><a href={`tel:${phone}`}>{phone}</a></div></div>
            }
          ]}
        />
        <WhiteSpace size="lg" />
        <SetGroup
          history={history}
          settings={[
            {
              text: <div styleName="item-content"><div styleName="item-label">地区</div><div styleName="item-value">{region}</div></div>,
            },
            {
              text: <div styleName="item-content"><div styleName="item-label">个人相册</div><div styleName="item-value"></div></div>,
              pathname: '/settings/album'
            },
            {
              text: '更多',
              pathname: '/settings/more'
            }
          ]}
        />
        <WhiteSpace size="lg" />
        {
          isContact ? 
          <Group style={{ background: 'transparent' }}>
            <Button type="primary" className="wechat" onClick={() => { history.push(`/chat/generic/${phone}`)}}>发消息</Button>
            <WhiteSpace size="lg" />
            <Button className="wechat" onClick={() => { history.push(`/chat/video/${phone}`)}}>视频通话</Button>
          </Group> :
          <Group style={{ background: 'transparent' }}>
            <Button type="primary" className="wechat" onClick={() => {
              const p = dispatch({
                type: 'wechat/addContact',
                payload: {
                  params: {
                    phone
                  }
                }
              })
              p.then(res => {
                if (res.code === 0) {
                  Toast.success('添加成功')
                  dispatch({
                    type: 'wechat/addToContacts',
                    payload: {
                      phone
                    }
                  })
                  window.setTimeout(() => {
                    history.push('/contacts')
                  }, 3000)
                } else {
                  Toast.info('添加失败')
                }
              })
            }}>添加到通讯录</Button>
          </Group> 
        }
        
      </div>
    </DetailContainer>
  )
}

export default Component
