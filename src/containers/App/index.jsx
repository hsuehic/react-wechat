
import React, { Component } from 'react';
import { NavBar, Tabs } from 'antd-mobile';
import AppTabItem from '../../components/AppTabItem';
import CustomIcon from '../../components/CustomIcon';
import ContactMessage from '../../containers/ContactMessage';
import My from '../../components/My';
import Discovery from '../../components/Discovery';
import Contact from '../../containers/Contact';

const TABS = {
  CONVERSATION: 'conversation',
  CONTACT: 'contact',
  DISCOVERY: 'discovery',
  MY: 'my'
}

class App extends Component {
  render() {
    const { history, match } = this.props
    const messageCount = 2
    const messageCountStr = messageCount > 0 ? `(${messageCount})` : ''
    let matchParams = { tab: 'conversation' }
    if (match && match.params) {
      matchParams = match.params
    }
    const { tab } = matchParams

    let initialPage
    switch (tab) {
      case TABS.CONVERSATION:
        initialPage = 0
        break
      case TABS.CONTACT:
        initialPage = 1
        break
      case TABS.DISCOVERY:
        initialPage = 2
        break
      case TABS.MY:
        initialPage = 3
        break
      default:
        initialPage = 0
        break
    }

    const tabs = [
      { title: <AppTabItem text="微信" icon="weixin" badgeText={messageCount} active={initialPage === 0} />, name: TABS.CONVERSATION },
      { title: <AppTabItem text="通信录" icon="contact" active={initialPage === 1} />, name: TABS.CONTACT },
      { title: <AppTabItem text="发现" icon="compass" badgeDot active={initialPage === 2} />, name: TABS.DISCOVERY },
      { title: <AppTabItem text="我" icon="my" active={initialPage === 3} />, name: TABS.MY },
    ];
    return (
      <div className="app">
         <NavBar
          className="header"
          mode="dark"
          leftContent={`微信${messageCountStr}`}
          rightContent={[
            <CustomIcon key="0" type="search" size="lg" style={{ marginRight: '16px' }} />,
            <CustomIcon key="1" type="plus-s" size="lg" />,
          ]}
        ></NavBar>
        <div className="body">
          <Tabs tabs={tabs}
            page={initialPage}
            tabBarPosition="bottom"
            renderTab={tab => tab.title }
            onChange={(tab) => { history.push(`/${tab.name}`) }}
          >
            <div className="body-pane">
              <ContactMessage />
            </div>
            <div className="body-pane">
              <Contact {...this.props} />
            </div>
            <div className="body-pane">
              <Discovery {...this.props} />
            </div>
            <div className="body-pane">
              <My {...this.props} />
            </div>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default App;
