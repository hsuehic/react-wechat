/**
 * 
 *
 * 
 * @Author : Richard <xiaowei.hsueh@gmail.com> (https://www.gistop.com)
 * @Link   : https://www.gistop.com
 * @Date   : 2018-6-10 14:45:19
 */

import React from 'react';
import { ListView } from 'antd-mobile';
import Item from './Item';

const Component = ({ items, hasMore }) => {
  let dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });
  dataSource = dataSource.cloneWithRows(items);
  return (<ListView
    dataSource={dataSource}
    onEndReachedThreshold={1000}
    renderRow={(rowData) => <Item {...rowData} />}
    style={{
      height: '100%',
      overflow: 'auto',
    }}
  />);
};

export default Component;
