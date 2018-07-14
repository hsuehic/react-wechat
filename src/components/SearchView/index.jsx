/**
 * Copyright(c) xiaowei.hsueh@gmail.com.
 *
 * Authors: Richard Hsueh <xiaowei.hsueh@gmail.com> (https://www.gistop.com/)
 * @Date   : 2018-7-14 15:40:00
 */

import React from 'react'

import DetailContainer from '../DetailContainer'
import CustomIcon from '../CustomIcon'

import './index.less'

export default class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: 0,
      searchContent: ''
    }
    this.onSearchContentChange = this.onSearchContentChange.bind(this)
    this.doSearch = this.doSearch.bind(this)
  }

  componentDidMount() {
  }

  onSearchContentChange(evnt) {
    const { timer, searchContent } = this.state
    const { target } = evnt
    const { value } = target
    if (value !== searchContent) {
      if (timer) {
        window.clearTimeout(timer)
      }
      let t = window.setTimeout(this.doSearch, 3000)
      this.setState({
        searchContent: value,
        timer: t
      })
    }
  }

  doSearch() {
    const { searchContent } = this.state
    const action = {
      type: 'wechat/search',
      payload: {
        searchContent
      }
    }
    const { dispatch } = this.props
    dispatch(action)
  }

  render() {
    return <DetailContainer
      title={<div styleName="search-input">
        <CustomIcon type="search" size="lg" />
        <input 
          ref={ele => {
            if (ele) {
              this.input = ele
            }
          }}
          onChange={this.onSearchContentChange}
        />
        <CustomIcon type="voice1" size="lg" />
      </div>}
    >
          <div styleName="search-title">搜索指定内容</div>
          <div styleName="search-category">
            <div styleName="category-item">朋友圈</div>
            <div styleName="category-item">文章</div>
            <div styleName="category-item">公众号</div>
          </div>
          <div styleName="search-category">
            <div styleName="category-item">小说</div>
            <div styleName="category-item">音乐</div>
            <div styleName="category-item">表情</div>
          </div>
    </DetailContainer>
  }
}
