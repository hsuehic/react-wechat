/**
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * 
 * @Authors: 兴斋 <xingzhai.xxw@alibaba-inc.com> (https://www.gistop.com/)
 * @Link   : https://www.gistop.com
 * @Date   : 2018-6-10 17:57:30
 */

import React from 'react';
import { ListView, WhiteSpace } from 'antd-mobile';
import { ContactGroup, ContactItem, Group } from '../Group';
import ImageGongzhonhao from '../../images/gongzhonghao.png';
import ImageGroup from '../../images/group.png';
import ImageNewFriend from '../../images/new-friend.png';
import ImageTag from '../../images/tag.png';

import './index.less';

const { IndexedList } = ListView;

class Component extends React.Component {
  constructor(props, context) {
    super(props, context);
    const dataSource = new ListView.DataSource({
      getRowData: (dataBlob, sectionID, rowID) => {
        return dataBlob[sectionID][[rowID]]
      },
      getSectionHeaderData: (dataBlob, sectionID) => dataBlob[sectionID].name,
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });
    this.state = {
      dataSource
    };
  }

  render() {
    const { props, state } = this;
    const { dataSource } = state;
    const { history, items, sectionIDs, rowIDs } = props;
    const ds = dataSource.cloneWithRowsAndSections(items, sectionIDs, rowIDs);

    return (<div styleName="container">
      <div
        className="v-container"
        styleName="flex-grow">
        <IndexedList
          renderHeader={() => <ContactGroup
            history={history}
            settings={[
              {
                thumb: <img src={ImageNewFriend} alt="Wallet" />,
                text: '新的朋友',
                pathname: '/contact/new'
              },
              {
                thumb: <img src={ImageGroup} alt="Wallet" />,
                text: '群聊',
                pathname: '/contact/group'
              },
              {
                thumb: <img src={ImageGongzhonhao} alt="Wallet" />,
                text: '公众号',
                pathname: '/contact/gzh'
              },
              {
                thumb: <img src={ImageTag} alt="Wallet" />,
                text: '标签',
                pathname: '/settings/wallet'
              }
            ]}
          />}
          dataSource={ds}
          renderRow={({ text, thumb, id }, sectionID, rowID) => <ContactItem history={history} pathname={`/contact/${id}`} key={`${sectionID}-${rowID}`} text={text} thumb={<img src={thumb} alt={text} />} /> }
          renderSectionHeader={(sectionData) => <div>{sectionData}</div>}
          renderSectionWrapper={sectionID => (
            <div
              key={`s_${sectionID}_c`}
              className="s_wrapper"
              style={{ zIndex: 4 }}
            />
          )}
          renderSectionBodyWrapper={(sectionID) => <Group key={`g_${sectionID}`} />}
        />
      </div>
      
    </div>);
  }
}

export default Component;
