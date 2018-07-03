/**
 * 联系人模型
 * @File   : contact.js
* @Author : Richard <xiaowei.hsueh@gmail.com> (https://www.gistop.com)
 * @Link   : http://www.gistop.com/
 * @Date   : 2018-6-21 15:33:31
 */

import { request } from '../utils/fetch'
import { getItemValue, setItemValue } from '../utils/storage'

import { NAMESPACE } from '../constant'

const isLoggedIn = getItemValue('isLoggedIn', false)
let contacts = []
let conversations = []
let info = {}
let token = null

if (isLoggedIn) {
  contacts = getItemValue('contacts', contacts)
  conversations = getItemValue('conversations', conversations)
  info = getItemValue('info', info)
  token = getItemValue('token', token)
}


export default {
  namespace: NAMESPACE,
  state: {
    contacts,
    conversations,
    info,
    isLoggedIn,
    token,
  },
  reducers: {
    save(state, { payload: newState }) {
      return { ...state, ...newState };
    },
    saveMessage(state, { payload: message }) {
      const { conversations } = state
      let newConversations = [...conversations]
      const { content, phone, timeStamp } = message
      let conversation = newConversations.find(c => c.phone === phone)
      const newMessageItem = {
        content,
        phone,
        timeStamp
      }
      if (!conversation) {
        conversation = {
          phone,
          timeStamp,
          items: [newMessageItem]
        }
        newConversations.unshift(conversation)
      } else {
        conversation.items = conversation.items.concat(newMessageItem)
        const index = newConversations.indexOf(conversation)
        conversations.splice(index, 1);
        conversations.unshift(conversation);
      }
      return { ...state, conversations: newConversations }
    }
  },
  effects: {
    * login({ payload: { params } }, { put, call }) {
      const res = yield call(request, '/api/login', params);
      if (res.code === 0) {
        const { token, info } = res.data
        setItemValue('token', token)
        setItemValue('info', info)
        setItemValue('isLoggedIn', true)
        yield put({
          type: 'save', 
          payload: {
            token,
            info,
            isLoggedIn: true
          }
        })
      }
      return res;
    },
    * info({ payload: { params } }, { put, call }) {
      const res = yield call(request, '/api/info', params);
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
      const res = yield call(request, '/api/reg', params);
      return res;
    }
  }
}
