import React, { Component } from 'react';
import { Badge, Icon, NavBar, Tabs } from 'antd-mobile';
import './App.css';

const tabs = [
  { title: <Badge text={'3'}>微信</Badge> },
  { title: <Badge text={'5'}>通信录</Badge> },
  { title: <Badge dot>发现</Badge> },
  { title: <Badge dot>我</Badge> },
];

class App extends Component {
  render() {
    return (
      <div className="app">
         <NavBar
          className="header"
          mode="dark"
          leftContent={"微信"}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        ></NavBar>
        <Tabs tabs={tabs}
          className="body"
          initialPage={1}
          tabBarPosition="bottom"
          renderTab={tab => <span>{tab.title}</span>}
        >
          <div className="body-pane">
            Content of first tab
          </div>
          <div className="body-pane">
            Content of second tab
          </div>
          <div className="body-pane">
            Content of third tab
          </div>
          <div className="body-pane">
            Content of third tab
          </div>
        </Tabs>
      </div>
    );
  }
}

export default App;
