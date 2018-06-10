/**
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * 
 * @Authors: 兴斋 <xingzhai.xxw@alibaba-inc.com> (https://www.gistop.com/)
 * @Link   : https://www.gistop.com
 * @Date   : 2018-6-10 19:42:10
 */

import React from 'react';
import ContactItem from './ContactItem';
import Group from './Group';

const Component = ({ header, settings, className = '', history }) => {
  return (<Group header={header} className={className}>
    {
      settings.map(setting => <ContactItem {...setting} history={history} />)
    }
  </Group>);
};

export default Component;
