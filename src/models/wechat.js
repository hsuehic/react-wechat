/**
 * 联系人模型
 * @File   : contact.js
* @Author : Richard <xiaowei.hsueh@gmail.com> (https://www.gistop.com)
 * @Link   : http://www.gistop.com/
 * @Date   : 2018-6-21 15:33:31
 */

export default {
  namespace: 'wechat',
  state: {
    contacts: [],
    messages: [],
    info: {}
  },
  reducers: {
    save(state, { payload: newState }) {
      return { ...state, ...newState };
    }
  }
}
