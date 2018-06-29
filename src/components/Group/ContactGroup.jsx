/**
 * 
 *
 * 
 * @Author : Richard <xiaowei.hsueh@gmail.com> (https://www.gistop.com)
 * @Link   : https://www.gistop.com
 * @Date   : 2018-6-10 19:42:10
 */

import React from 'react';
import ContactItem from './ContactItem';
import Group from './Group';

const Component = ({ header, settings, className = '', history }) => {
  return (<Group header={header} className={className}>
    {
      settings.map((setting, i) => <ContactItem {...setting} history={history} key={`cg-${i}`} />)
    }
  </Group>);
};

export default Component;
