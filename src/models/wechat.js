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

/**
 * 合并对话列表
 * @param {Object} c1 对话列表1
 * @param {Array} c2 对话列表2
 */
const mergeConversations = (c1, c2, currentConversation) => {
  const newConversations = { ...c1 }
  let messageCount = 0
  c2.forEach(c => {
    const { phone, ...rest } = c
    let o = c1[phone]
    let { length: count } = c.items
    if (phone === currentConversation) {
      count = 0
    }
    if (!c.notificationOff) {
      messageCount += count
    }
    if (o) {
      const { newCount = 0 } = o
      o = {
        ...rest,
        newCount: newCount + count,
        items: [...o.items, ...c.items]
      }
    } else {
      o = {
        newCount: count,
        ...rest
      }
    }
    newConversations[phone] = o
  })
  return {
    messageCount,
    newConversations
  }
}

const saveToLocal = (key, value) => {
  setTimeout(() => {
    setItemValue(key, value)
  })
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
      let { newMessageCount } = state
      // 此处需要优化： 不要在接收到就保存到本地存储中，需要考虑性能
      if (conversations) {
        const { currentConversation } = state
        if (conversations.length > 0) {
          const { messageCount, newConversations } = mergeConversations(state.conversations, conversations, currentConversation)
          newState.conversations = newConversations
          newMessageCount += messageCount
        } else {
          newState.conversations = state.conversations          
        }
      }
      if (contacts && contacts.length > 0) {
        saveToLocal('contacts', contacts)
      }
      return { ...state, ...newState, newMessageCount }
    },

    // 接收新的离线会话
    saveConversation(state, { payload: { conversations: offLineConversations } }) {
      const keys = Object.keys(offLineConversations)
      const conversations = []
      keys.forEach(phone => {
        const conversation = {phone, ...offLineConversations[phone]}
        conversations.push(conversation)
      })
      const { messageCount, newConversations } = mergeConversations(state.conversations, conversations, state.currentConversation)
      const newMessageCount = state.newMessageCount + messageCount
      return { ...state, newMessageCount, conversations: newConversations }
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
      const c = conversations[phone] || {}
      const { notificationOff = false } = c
      let newCount = 0
      if (phone !== currentConversation) {
        newCount = 1
      }
      if (!notificationOff) {
        newMessageCount += newCount
      }
      
      const conversation = {
        phone,
        timestamp,
        newCount,
        items: [message]
      }
      const { newConversations } = mergeConversations(conversations, [conversation], currentConversation) 
      saveToLocal('conversation', newConversations)
      return { ...state, newMessageCount, conversations: newConversations }
    },

    readConversationMessage(state, { payload: { currentConversation } }) {
      const { conversations } = state
      let { newMessageCount } = state
      const conversation = conversations[currentConversation]
      if (conversation) {
        const { notificationOff, newCount } = conversation 
        if (!notificationOff) {
          newMessageCount -= newCount
          if (newMessageCount < 0) {
            newMessageCount = 0
          }
        }

        const newConversation = { ...conversation, newCount: 0 }
        const newConversations = {...conversations, [currentConversation]: newConversation }
        saveToLocal('conversations', newConversations)
        return { ...state, conversations: newConversations, newMessageCount, currentConversation }
      } else {
        return { ...state, currentConversation }
      }
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
