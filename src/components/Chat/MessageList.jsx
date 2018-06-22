/**
 * 对话列表
 * 
 * @Author : Richard <xiaowei.hsueh@gmail.com> (https://www.gistop.com)
 * @Link   : https://www.gistop.com
 * @Date   : 2018-6-22 15:50:02
 */

import React from 'react'

import { ListView } from 'antd-mobile'

const Component = ({ messageItems }) => {
  const dataSource = []
  return <ListView
    dataSource={dataSource}
  />
}

export default Component
