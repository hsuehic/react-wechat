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
import { stat } from 'fs-extra';


/**
 * 合并对话列表
 * @param {Object} c1 对话列表1
 * @param {Array} c2 对话列表2
 */
const mergeConversations = (c1, c2) => {
  const newConversations = { ...c1 }
  c2.forEach(c => {
    const { phone, ...rest } = c
    let o = c1[phone] 
    if (o) {
      o = {
        ...rest,
        items: [...o.items, ...c.items]
      }
    } else {
      o = {
        ...rest
      }
    }
    newConversations[phone] = o
  })
  return newConversations
}

const isLoggedIn = getItemValue('isLoggedIn', false)
let contacts = []
let conversations = {}
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
    newMessageCount: 0,
    currentConversation: '',
  },
  reducers: {
    save(state, { payload: newState }) {
      const { conversations, contacts } = newState
      const { currentConversation } = state
      let { newMessageCount } = state
      // 此处需要优化： 不要在接收到就保存到本地存储中，需要考虑性能
      if (conversations) {
        if (conversations.length > 0) {
          newState.conversations = mergeConversations(state.conversations, conversations)
          conversations.forEach(c => {
            if (c.phone !== currentConversation) {
              const { items } = c
              if (items && items.length > 0) {
                newMessageCount += items.length
              }
            }
          })
        } else {
          newState.conversations = state.conversations          
        }
      }
      if (contacts && contacts.length > 0) {
        setItemValue('contacts', contacts)
      }
      return { ...state, ...newState, newMessageCount }
    },
    saveMessage(state, { payload: message }) {
      const { conversations, currentConversation, info } = state
      let { newMessageCount } = state
      const { phone: myPhone } = info
      const { to, from, timestamp } = message
      let phone = to
      if (phone === myPhone) {
        phone = from
      }
      if (phone !== currentConversation) {
        newMessageCount += 1
      }
      
      const conversation = {
        phone,
        timestamp,
        newCount: 0,
        items: [message]
      }
      const newConversations = mergeConversations(conversations, [conversation])
      // 此处需要优化： 
      setTimeout(() => {
        setItemValue('conversations', newConversations)
      }, 10)
      return { ...state, newMessageCount, conversations: newConversations }
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
