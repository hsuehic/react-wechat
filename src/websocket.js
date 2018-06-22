/**
 * @File   : websocket.js
* @Author : Richard <xiaowei.hsueh@gmail.com> (https://www.gistop.com)
 * @Link   : http://www.gistop.com/
 * @Date   : 2018-6-16 17:00:25
 */

 // 加载完成创建到websocket的链接

const WEBSOCKET_URL = 'ws://127.0.0.1:4000/wechat';

const websocket = window.websocket = new WebSocket(WEBSOCKET_URL);

const _messageHandlers = new Set();

websocket.onopen= evnt => {
  console.log(evnt);
};

websocket.onmessage= evnt => {
  _messageHandlers.forEach(callback => {
    callback.call(websocket, evnt);
  });
};

websocket.onerror = evnt => {
  console.log(evnt);
};

websocket.onclose = evnt => {
  console.log(evnt);
};

/**
 * 添加消息处理函数
 * @param {function} handler 消息处理函数
 */
const addMessageHandler = (handler) => {
  _messageHandlers.add(handler);
};

const removeMessageHandler = (handler) => {
  _messageHandlers.delete(handler);
}

export {
  addMessageHandler,
  removeMessageHandler
};
