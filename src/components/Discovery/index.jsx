/**
 * 
 *
 * 
 * @Author : Richard <xiaowei.hsueh@gmail.com> (https://www.gistop.com)
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
import ImageShopping from '../../images/youhuiquan.png';
import ImageSearch from '../../images/ajl.png';
import ImageScan from '../../images/ao6.png';
import ImageNeighbor from '../../images/aok.png';
import ImageApp from '../../images/aix.png';
import ImageLuky from '../../images/xy.png';

const Component = ({ history }) => {
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
          thumb: <img src={ImageScan} alt="" />,
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
          thumb: <img src={ImageSearch} alt="" />,
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
          thumb: <img src={ImageNeighbor} alt="Neighbor" />,
          text: '附近的人',
          pathname: '/new/nearby'
        },
        {
          thumb: <img src={ImageLuky} alt="" />,
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
          thumb: <img src={ImageShopping} alt="" />,
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
          thumb: <img src={ImageApp} alt="App" />,
          text: '小程序',
          pathname: '/new/apps'
        }
      ]}
    />
  </div>);
};

export default Component;
