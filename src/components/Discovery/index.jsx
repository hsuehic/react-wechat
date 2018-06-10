/**
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * 
 * @Authors: 兴斋 <xingzhai.xxw@alibaba-inc.com> (https://www.gistop.com/)
 * @Link   : https://www.gistop.com
 * @Date   : 2018-6-10 17:03:15
 */

import React from 'react';
import { Badge, WhiteSpace } from 'antd-mobile';
import { SetGroup } from '../Group/index';

import ImageFriend from '../../images/a7o.png';
import ImageShake from '../../images/aro.png';
import ImageGame from '../../images/ahl.png';
import ImageLook from '../../images/apv.png';

const Component = ({ id, nick, thumb, history }) => {
  return (<div>
    <WhiteSpace size="lg" />
    <SetGroup
      history={history}
      settings={[
        {
          thumb: <img src={ImageFriend} alt="Friends" />,
          text: '朋友圈',
          pathname: '/new/friends',
          extra: <div style={{ position: 'relative' }}><Badge dot><img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58" alt="" style={{ width: '30px', height: '30px' }} /></Badge></div>
        }
      ]}
    />
    <WhiteSpace size="lg" />
    <SetGroup
      history={history}
      settings={[
        {
          thumb: <img src="" alt="" />,
          text: '扫一扫',
          pathname: '/new/scan'
        },
        {
          thumb: <img src={ImageShake} alt="" />,
          text: '摇一摇',
          pathname: '/new/shake'
        }
      ]}
    />
    <WhiteSpace size="lg" />
    <SetGroup
      history={history}
      settings={[
        {
          thumb: <img src={ImageLook} alt="Look" />,
          text: '看一看',
          pathname: '/new/look'
        },
        {
          thumb: <img src="" alt="" />,
          text: '搜一搜',
          pathname: '/new/search'
        }
      ]}
    />
    <WhiteSpace size="lg" />
    <SetGroup
      history={history}
      settings={[
        {
          thumb: <img src="" alt="" />,
          text: '附近的人',
          pathname: '/new/nearby'
        },
        {
          thumb: <img src="" alt="" />,
          text: '漂流瓶',
          pathname: '/new/floater'
        }
      ]}
    />
    <WhiteSpace size="lg" />
    <SetGroup
      history={history}
      settings={[
        {
          thumb: <img src="" alt="" />,
          text: '购物',
          pathname: '/new/shopping'
        },
        {
          thumb: <img src={ImageGame} alt="" />,
          text: '游戏',
          pathname: '/new/game'
        }
      ]}
    />
    <WhiteSpace size="lg" />
    <SetGroup
      history={history}
      settings={[
        {
          thumb: <img src="" alt="" />,
          text: '小程序',
          pathname: '/new/apps'
        }
      ]}
    />
  </div>);
};

export default Component;
