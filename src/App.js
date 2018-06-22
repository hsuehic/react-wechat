import dva from 'dva'
import createLoading from 'dva-loading'
import { browserHistory } from 'dva/router'
import { addMessageHandler } from './websocket'
import routers from './routes'
import './App.less'

const app = dva({
  history: browserHistory
})

app.use(createLoading())
app.router(routers)

addMessageHandler(evnt => {
  console.log(`Message: ${evnt.data}`)
})

export default app.start()
