/**
 * 自定义滚动列表
 * Copyright(c) xiaowei.hsueh@gmail.com.
 *
 * Authors: Richard Hsueh <xiaowei.hsueh@gmail.com> (https://www.gistop.com/)
 * @Date   : 2018-7-4 20:13:38
 */

import React from 'react'

export default class Component extends React.Component {
  static defaultProps = {
    fromEnd: false, // 是否从列表底部开始渲染
    pageSize: 10, // 每次滚动到底部时渲染的行数
    pullToRefresh: true, // 下拉刷新
    onRefresh: null, // 下拉刷新时触发
    dataSource: [], // 数据源
  }

  static propTypes = {
    fromEnd: PropTypes.bool,
    pageSize: PropTypes.number,
    pullToRefresh: PropTypes.bool,
    onRefresh: PropTypes.func,
    dataSource: PropTypes.array,
    renderRow: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  getRowsToBeRendered() {

  }

  render() {
    return <div
      ref={
        el => {
          if (el) {
            this.scrollContainer = el
          }
        }
      }
    >自定义组件</div>
  }
}
