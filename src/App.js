import dva from 'dva'
import createLoading from 'dva-loading';
import { browserHistory } from 'dva/router';
import routers from './routes';
import './App.less';

const app = dva({
  history: browserHistory
});

app.use(createLoading());
app.router(routers);

export default app.start();
