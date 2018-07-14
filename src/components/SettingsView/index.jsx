/**
 * Copyright(c) xiaowei.hsueh@gmail.com.
 *
 * Authors: Richard Hsueh <xiaowei.hsueh@gmail.com> (https://www.gistop.com/)
 * @Date   : 2018-7-14 15:40:00
 */

import React from 'react'

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

    </DetailContainer>
  }
}
