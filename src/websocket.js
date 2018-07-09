/**
 * @File   : websocket.js
* @Author : Richard <xiaowei.hsueh@gmail.com> (https://www.gistop.com)
 * @Link   : http://www.gistop.com/
 * @Date   : 2018-6-16 17:00:25
 */

 // 加载完成创建到websocket的链接

import { getItemValue } from './utils/storage'

const createWebsocket = (dispatch) => {
  let host
  if (__DEV__) {
    host = `${window.location.hostname}:8000`
  } else {
    host = window.location.host
  }
  
  const _messageHandlers = new Set()

  let timer
  // 发送心跳包，防止websocket 断开
  const sendHeartBeat = () => {
    const heartbeatMessage = JSON.stringify({
      type: 'heartbeat',
      payload: {
        time: (new Date()).getTime()
      }
    })
    window.websocket.send(heartbeatMessage)
  }

  // 连接上后开始发送心跳
  const openHandle = () => {
    console.log('WebSocket connected!')
    if (!__DEV__) {
      window.clearInterval(timer)
      timer = window.setInterval(sendHeartBeat, 10000)
    }
  }

  // 消息处理
  const messageHandle = evnt => {
    const { data } = evnt
    const message = JSON.parse(data);
    _messageHandlers.forEach(callback => {
      callback(message)
    })
    dispatch(message)
  }
  
  // 错误日志
  const errorHandle = evnt => {
    console.error(`WebSocket error:${evnt.message}`)
  }

  let createTimer
  // 链接断开后，尝试重连
  const closeHandle = () => {
    window.clearInterval(createTimer)
    createTimer = window.setInterval(() => {
      if (window.websocket && window.websocket.readyState === WebSocket.OPEN) {
        window.clearInterval(createTimer)
      } else {
        doCreateWebSocket()
      }
      
    }, 5000)
  }

  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:'

  function doCreateWebSocket() {
    if (!window.SEC_TOKEN) {
      window.SEC_TOKEN = getItemValue('token', '')
    }
    const WEBSOCKET_URL = `${protocol}//${host}/wechat/${window.SEC_TOKEN}`
    const websocket = window.websocket = new WebSocket(WEBSOCKET_URL)
    websocket.onmessage = messageHandle
    websocket.onopen= openHandle
    websocket.onerror = errorHandle
    websocket.onclose = closeHandle
    window.websocket = websocket
    return websocket
  }
  
  doCreateWebSocket()

  /**
   * 添加消息处理函数
   * @param {function} handler 消息处理函数
   */
  const addMessageHandler = (handler) => {
    _messageHandlers.add(handler)
  }
  
  /**
   * 移除消息处理函数
   * @param {function} handler 要移除的消息处理函数
   */
  const removeMessageHandler = (handler) => {
    _messageHandlers.delete(handler)
  }

  return {
    addMessageHandler,
    removeMessageHandler
  }
}

export default createWebsocket
