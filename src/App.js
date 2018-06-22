import dva from 'dva'
import createLoading from 'dva-loading'
import { browserHistory } from 'dva/router'
import { addMessageHandler } from './websocket'
import routers from './routes'
import modelWechat from './models/wechat'

import './App.less'

const app = dva({
  history: browserHistory
})

app.use(createLoading())
app.model(modelWechat)
app.router(routers)

addMessageHandler(evnt => {
  console.log(`Message: ${evnt.data}`)
})

export default app.start()
