/**
 * Copyright(c) xiaowei.hsueh@gmail.com.
 *
 * Authors: Richard Hsueh <xiaowei.hsueh@gmail.com> (https://www.gistop.com/)
 * @Date   : 2018-7-14 15:43:46
 */

import React from 'react'
import { connect } from 'dva'

import { NAMESPACE } from '../../constant'
import SearchView from '../../components/SearchView'
const mapStateToProps = state => {
  const { searchResult, searchContent } = state.wechat
  return {
    isLoading: state.loading.effects[`${NAMESPACE}/search`],
    searchResult,
    searchContent
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Component extends React.Component {
  render() {
    return <SearchView {...this.props} />
  }
}
