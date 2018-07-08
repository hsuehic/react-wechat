import React from 'react'
import { connect } from 'dva'
import App from '../../containers/App/route'
import Login from '../../containers/Login'

const mapStateToProps = state => {
  const { isLoggedIn } = state.wechat
  return {
    isLoggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class AppRouter extends React.Component {
  render() {
    const { isLoggedIn } = this.props
    let node
    if (isLoggedIn) {
      node = <App {...this.props} />
    } else {
      node = <Login {...this.props} />
    }
    return node
  }
}

export default AppRouter