/**
 * 联系人模型
 * @File   : contact.js
* @Author : Richard <xiaowei.hsueh@gmail.com> (https://www.gistop.com)
 * @Link   : http://www.gistop.com/
 * @Date   : 2018-6-21 15:33:31
 */

import { request } from '../utils/fetch';
import { NAMESPACE } from '../constant';

export default {
  namespace: NAMESPACE,
  state: {
    contacts: [],
    messages: [],
    info: {},
    isLoggedIn: false,
    token: null
  },
  reducers: {
    save(state, { payload: newState }) {
      return { ...state, ...newState };
    }
  },
  effects: {
    * login({ payload: { params } }, { put, call }) {
      const res = yield call(request, '/api/login', params);
      if (res.code === 0) {
        yield put({
          type: 'save', 
          payload: {
            ...res.data,
            isLoggedIn: true
          }
        })
      }
      return res;
    },
    * register({ payload: { params } }, { call }) {
      const res = yield call(request, '/api/login', params);
      return res;
    }
  }
}
