/**
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * 
 * @Authors: 兴斋 <xingzhai.xxw@alibaba-inc.com> (https://www.gistop.com/)
 * @Link   : https://www.gistop.com
 * @Date   : 2018-6-10 19:42:10
 */

import React from 'react';
import SetItem from './SetItem';
import Group from './Group';

const Component = ({ settings, className = '', history }) => {
  return (<Group className={className}>
    {
      settings.map(setting => <SetItem {...setting} history={history} />)
    }
  </Group>);
};

export default Component;
