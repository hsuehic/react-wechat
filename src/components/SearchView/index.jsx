/**
 * Copyright(c) xiaowei.hsueh@gmail.com.
 *
 * Authors: Richard Hsueh <xiaowei.hsueh@gmail.com> (https://www.gistop.com/)
 * @Date   : 2018-7-14 15:40:00
 */

import React from 'react'

import DetailContainer from '../DetailContainer'
import CustomIcon from '../CustomIcon'
import { ContactItem } from '../Group';

import './index.less'
import { ListView } from 'antd-mobile';

export default class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: 0
    }
    this.onSearchContentChange = this.onSearchContentChange.bind(this)
    this.doSearch = this.doSearch.bind(this)
  }

  componentDidMount() {
  }

  onSearchContentChange(evnt) {
    const { timer } = this.state
    const { dispatch, searchContent } = this.props
    const { target } = evnt
    const { value } = target
    if (value !== searchContent) {
      if (timer) {
        window.clearTimeout(timer)
      }
      let t = window.setTimeout(this.doSearch, 300)
      dispatch({
        type: 'wechat/save',
        payload: {
          searchContent: value
        }
      })
      this.setState({
        timer: t
      })
    }
  }

  doSearch() {
    const { searchContent } = this.props
    if (searchContent.length > 2) {
      const action = {
        type: 'wechat/search',
        payload: {
          params: {
            keyword: searchContent
          }
        }
      }
      const { dispatch } = this.props
      dispatch(action)
    }
  }

  render() {

    const { searchContent, searchResult, history } = this.props

    let nodeMain
    if (searchContent && searchContent.length > 2) {
      if (searchResult && searchResult.length > 0) {
        let dataSource = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        })
        dataSource = dataSource.cloneWithRows(searchResult)
        nodeMain = (<div 
          styleName="container"
          style={{ padding: '30px 15px' }}
        >
          <ListView
            style={{ flex: '1 1 auto' }}
            dataSource={dataSource}
            renderRow={({ nick, thumb, phone }) => <ContactItem history={history} pathname={`/contact/${phone}`} text={nick} thumb={<img src={thumb} alt={nick} />} /> }
          />
        </div>)
      } else {
        nodeMain = <div styleName="search-title">没有符合条件的结果</div>
      }
    } else {
      nodeMain = (<div styleName="container">
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
      </div>)
    }

    return (<DetailContainer
      title={<div styleName="search-input">
        <CustomIcon type="search" size="lg" />
        <input 
          ref={ele => {
            if (ele) {
              this.input = ele
            }
          }}
          value={searchContent}
          onChange={this.onSearchContentChange}
        />
        <CustomIcon type="voice1" size="lg" />
      </div>}
    >
      {nodeMain}
    </DetailContainer>)
  }
}
