/**
 * @File   : constant.js
 * @Author : Richard Hsueh <xiaowei.hsueh@gmail.com> (https://www.gistop.com/)
 * @Link   : http://www.gistop.com/
 * @Date   : 2018-6-22 16:57:28
 */


export const NAMESPACE = 'wechat'


// 消息定义
export const RTC_MESSAGE_TYPE = {
  CANDIDATE: 'new-ice-candidate',
  HANG_UP: 'hang-up',
  VIDEO_OFFER: 'video-offer',
  VIDEO_ANSWER: 'video-answer',
  INVITE_OFFER: 'invite-offer',
  INVITE_ACCEPT: 'invite-accept',
  INVITE_REFUSE: 'invite-refuse',
  INVITE_CANCEL: 'invite-cancel'
}

// 视频对话状态
export const VIDEO_CONVERSATION_STATE = {
  INVITE_SENDED: 'sended',
  INVITE_RECEIVED: 'received',
  CONNECTING: 'connecting',
  CHATING: 'chating',
  HANGUP: 'hangup'
}
