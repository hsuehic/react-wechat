import React from 'react'
import { connect } from 'dva'
import { Router, Route, Switch } from 'dva/router'
import App from '../../containers/App'
import Login from '../../containers/Login'
import GenericChat from '../../containers/Chat/Generic'
import VideoChat from '../../containers/Chat/Video'
import ContactDetail from '../../containers/ContactDetail';

const mapStateToProps = state => {
  const { isLoggedIn } = state.wechat
  return {
    isLoggedIn
  }
}

@connect(mapStateToProps)
class AppRouter extends React.Component {
  render() {
    const { isLoggedIn, history } = this.props
    let node
    if (isLoggedIn) {
      node = (<Router history={history}>
        <Switch>
          <Route path="/chat/video/:phone" component={VideoChat} />
          <Route path="/chat/generic/:phone" component={GenericChat} />
          <Route path="/contact/:phone" component={ContactDetail} />
          <Route path="/" component={App} />
        </Switch>
      </Router>)
    } else {
      node = <Login history={history} />
    }
    return node
  }
}

export default AppRouter