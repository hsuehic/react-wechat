/**
 * 
 *
 * Authors:
 *  Richard <xiaowei.hsueh@gmail.com> (https://www.gistop.com)
 */

import React from 'react';
import { connect } from 'dva';

import Contact from '../../components/Contact';

const mapStateToProps = (state) => {
  const { contacts } = state.wechat;
  return {
    contacts
  };
};

@connect(mapStateToProps)
export default class Component extends React.Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
      thumb: PropTypes.string,
      userName: PropTypes.string,
      phone: PropTypes.string,
      nick: PropTypes.string,
      group: PropTypes.string
    }))
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { contacts } = this.props;
    let items = {};
    let index = 0;
    const sectionIDs = [];
    const rowIDs = [];
    let lastGroup;
    let lastRowIds;

    contacts.forEach(({ thumb, userName, nick, group, phone }) => {
      if (group !== lastGroup) {
        lastRowIds = [];
        rowIDs.push(lastRowIds);
        lastGroup = group;
      }
      const sectionId = `S_${group}`
      sectionIDs.push(sectionId)
      let section = items[sectionId]
      if (!section) {
        section = {
          name: group
        };
        items[sectionId] = section;
      }
      index += 1;
      const rowId = `R_${index}`;
      lastRowIds.push(rowId);
      section[rowId] = {
        thumb,
        userName,
        nick,
        group,
        phone
      };
    });

    const props = { items, sectionIDs, rowIDs}

    return <Contact {...this.props} {...props} />;
  }
}
