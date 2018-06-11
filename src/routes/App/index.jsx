
import React, { Component } from 'react';
import { NavBar, Tabs } from 'antd-mobile';
import AppTabItem from '../../components/AppTabItem';
import CustomIcon from '../../components/CustomIcon';
import ContactMessage from '../../containers/ContactMessage';
import My from '../../components/My';
import Discovery from '../../components/Discovery';
import Contact from '../../containers/Contact';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      initialPage: 0
    };
  }
  render() {
    const messageCount = 2;
    const { initialPage } = this.state;
    const tabs = [
      { title: <AppTabItem text="微信" icon="weixin" badgeText={messageCount} active={initialPage === 0} /> },
      { title: <AppTabItem text="通信录" icon="contact" active={initialPage === 1} /> },
      { title: <AppTabItem text="发现" icon="compass" badgeDot active={initialPage === 2} /> },
      { title: <AppTabItem text="我" icon="my" active={initialPage === 3} /> },
    ];
    return (
      <div className="app">
         <NavBar
          className="header"
          mode="dark"
          leftContent={`微信(${messageCount})`}
          rightContent={[
            <CustomIcon key="0" type="search" size="lg" style={{ marginRight: '16px' }} />,
            <CustomIcon key="1" type="plus-s" size="lg" />,
          ]}
        ></NavBar>
        <div className="body">
          <Tabs tabs={tabs}
            initialPage={initialPage}
            tabBarPosition="bottom"
            renderTab={tab => tab.title }
            onChange={(tab, index) => { this.setState({ initialPage: index }); }}
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
              <My id="hsuehic" nick="Richard" thumb="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3347079475,331825128&fm=58" {...this.props} />
            </div>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default App;
