// eslint react/no-deprecated: "off"

/**
 * 音视频聊天窗口
 * 
 *
 * Authors:
 *  Richard <xiaowei.hsueh@gmail.com> (https://www.gistop.com)
 */

import React from 'react'
import { Toast } from 'antd-mobile'
import { FillIcon } from '../../components/CustomIcon'
import { RTC_MESSAGE_TYPE, VIDEO_CONVERSATION_STATE } from '../../constant'

import './index.less'

const reportError = (errMessage) => {
  console.error("Error " + errMessage.name + ": " + errMessage.message)
}

/**
 * send msg to server via websocket
 * @param {*} msg msg to be send and before send it will be stringfied using JSON
 */
const sendToServer = msg => {
  const message = JSON.stringify(msg)
  window.sendMessage(message)
}

// video properties
const mediaConstraints = {
  audio: false,            // We want an audio track
  video: true             // ...and we want a video track
}

export default class Component extends React.Component {
  constructor(props) {
    super(props)
    const { history } = props
    const { location } = history
    const { state = {} } = location
    const { inviteMessage } = state
    this.state = {
      inviteMessage,
      conversationState: inviteMessage ? VIDEO_CONVERSATION_STATE.INVITE_RECEIVED : VIDEO_CONVERSATION_STATE.INVITE_SENDED // 通话状态， 详情见VIDEO_CONVERSATION_STATE 定义
    }
    this.handleICECandidateEvent = this.handleICECandidateEvent.bind(this)
    this.handleRemoveStreamEvent = this.handleRemoveStreamEvent.bind(this)
    this.handleICEConnectionStateChangeEvent = this.handleICEConnectionStateChangeEvent.bind(this)
    this.handleICEGatheringStateChangeEvent = this.handleICEGatheringStateChangeEvent.bind(this)
    this.handleSignalingStateChangeEvent = this.handleSignalingStateChangeEvent.bind(this)
    this.handleNegotiationNeededEvent = this.handleNegotiationNeededEvent.bind(this)
    this.handleTrackEvent = this.handleTrackEvent.bind(this)
    this.handleAddStreamEvent = this.handleAddStreamEvent.bind(this)
    this.handleGetUserMediaError = this.handleGetUserMediaError.bind(this)
    this.onMessage = this.onMessage.bind(this)
    this.onCancelInvite = this.onCancelInvite.bind(this)
    this.onAcceptInvite = this.onAcceptInvite.bind(this)
    this.onRefuseInvite = this.onRefuseInvite.bind(this)
  }

  componentDidMount() {
    window.addMessageHandler(this.onMessage)
    const { inviteMessage } = this.state
    // 发果非应答，则需要发送邀请
    if (!inviteMessage) {
      this.sendInvite()
    }
  }

  componentWillUnmount() {
    window.removeMessageHandler(this.onMessage)
    this.closeVideoCall()
  }

  /**
   * 取消息视频通话邀请
   */
  onCancelInvite() {
    this.sendRTCMessage(RTC_MESSAGE_TYPE.INVITE_CANCEL)
  }

  /**
   * 接受视频通话邀请
   */
  onAcceptInvite() {
    this.sendRTCMessage(RTC_MESSAGE_TYPE.INVITE_ACCEPT)
  }

  /**
   * 拒绝视频通话邀请
   */
  onRefuseInvite() {
    this.sendRTCMessage(RTC_MESSAGE_TYPE.INVITE_REFUSE)
  }

  /**
   * 协议消息处理
   */
  onMessage(msg) {
    const { type, payload } = msg
    switch(type) {
      case RTC_MESSAGE_TYPE.CANDIDATE:
        this.handleNewICECandidateMsg(payload)
        break
      case RTC_MESSAGE_TYPE.HANG_UP:
        break
      case RTC_MESSAGE_TYPE.VIDEO_ANSWER:
        this.handleVideoAnswerMsg(payload)
        break
      case RTC_MESSAGE_TYPE.INVITE_ACCEPT:
        this.handleInviteAcceptMsg()
        break
      case RTC_MESSAGE_TYPE.INVITE_REFUSE:
        this.handleInviteRefuseMsg()
        break
      case RTC_MESSAGE_TYPE.INVITE_CANCEL:
        this.handleInviteCancelMsg()
        break
      case RTC_MESSAGE_TYPE.VIDEO_OFFER:
        this.handleVideoOfferMsg(payload)
        break
      default:
        break
    }
  }

  /**
   * 发送rtc 请求
   */
  sendRTCMessage(type, payload = {}) {
    const { contact, info } = this.props
    const { phone: from } = info
    const { phone: to } = contact
    const msg = {
      type,
      payload: {
        from,
        to,
        ...payload
      }
    }
    sendToServer(msg)
  }

  // Called by the WebRTC layer to let us know when it's time to
  // begin (or restart) ICE negotiation. Starts by creating a WebRTC
  // offer, then sets it as the description of our local media
  // (which configures our local media stream), then sends the
  // description to the callee as an offer. This is a proposed media
  // format, codec, resolution, etc.
  handleNegotiationNeededEvent() {
    this.sendOffer()
  }

  // 发送视频邀请
  sendInvite() {
    this.sendRTCMessage(RTC_MESSAGE_TYPE.INVITE_OFFER)
    // 会话状态改变为 邀请已经发起
    this.setState({
      conversationState: VIDEO_CONVERSATION_STATE.INVITE_SENDED
    })
  }

  /**
   * 创建点点对连接对象
   */
  createPeerConnection() {
    this.myPeerConnection = new RTCPeerConnection({
      iceServers: [{
        credential: "root",
        username: "123456",
        urls: [
          "turn:www.gismall.com:3478"
        ]
      },{
        urls:["stun:www.gismall.com:3478"]
      },{
        url: 'stun:23.21.150.121'
      },{
        "url": "stun:193.112.85.61:19302"
      }, {
        "url": "stun:stun.1.google.com:19302"
      }]
    })
  
    // Do we have addTrack()? If not, we will use streams instead.
    const {
      myPeerConnection,
      handleICECandidateEvent,
      handleRemoveStreamEvent,
      handleICEConnectionStateChangeEvent,
      handleICEGatheringStateChangeEvent,
      handleSignalingStateChangeEvent,
      // handleNegotiationNeededEvent,
      handleTrackEvent,
      handleAddStreamEvent
    } = this
    const hasAddTrack = (myPeerConnection.addTrack !== undefined);
  
    // Set up event handlers for the ICE negotiation process.
  
    myPeerConnection.onicecandidate = handleICECandidateEvent
    myPeerConnection.onnremovestream = handleRemoveStreamEvent
    myPeerConnection.oniceconnectionstatechange = handleICEConnectionStateChangeEvent
    myPeerConnection.onicegatheringstatechange = handleICEGatheringStateChangeEvent
    myPeerConnection.onsignalingstatechange = handleSignalingStateChangeEvent
    // send offer immediately after connection created while the negotiationneeded event compatiblity.
    // myPeerConnection.onnegotiationneeded = handleNegotiationNeededEvent;
  
    // Because the deprecation of addStream() and the addstream event is recent,
    // we need to use those if addTrack() and track aren't available.
  
    if (hasAddTrack) {
      myPeerConnection.ontrack = handleTrackEvent
    } else {
      myPeerConnection.onaddstream = handleAddStreamEvent
    }
  }

  /**
   * 发送视频对话邀请
   */
  sendOffer() {
    const { myPeerConnection } = this
    const { contact, info } = this.props
    const { phone: to } = contact
    const { phone: from } = info
    myPeerConnection.createOffer().then(function(offer) {
      myPeerConnection.setLocalDescription(offer)
      sendToServer({
        type: RTC_MESSAGE_TYPE.VIDEO_OFFER,
        payload: {
          from,
          to,
          sdp: myPeerConnection.localDescription
        }
      })
    })
    .catch(reportError)
  }

  // Called by the WebRTC layer when events occur on the media tracks
  // on our WebRTC call. This includes when streams are added to and
  // removed from the call.
  //
  // track events include the following fields:
  //
  // RTCRtpReceiver       receiver
  // MediaStreamTrack     track
  // MediaStream[]        streams
  // RTCRtpTransceiver    transceiver
  handleTrackEvent(event) {
    this.remoteVideo.srcObject = event.streams[0];
  }
  
  // Called by the WebRTC layer when a stream starts arriving from the
  // remote peer. We use this to update our user interface, in this
  // example.
  handleAddStreamEvent(event) {
    const { remoteVideo } = this
    const { stream } = event
    remoteVideo.src = window.URL.createObjectURL(stream)
    remoteVideo.srcObject = stream
    this.setState({
      conversationState: VIDEO_CONVERSATION_STATE.CHATING
    })
  }

  // An event handler which is called when the remote end of the connection
  // removes its stream. We consider this the same as hanging up the call.
  // It could just as well be treated as a "mute".
  //
  // Note that currently, the spec is hazy on exactly when this and other
  // "connection failure" scenarios should occur, so sometimes they simply
  // don't happen.
  handleRemoveStreamEvent() {
    this.closeVideoCall();
  }

  // Handles |icecandidate| events by forwarding the specified
  // ICE candidate (created by our local ICE agent) to the other
  // peer through the signaling server.
  handleICECandidateEvent(event) {
    const { candidate } = event
    if (candidate) {
      this.sendRTCMessage(RTC_MESSAGE_TYPE.CANDIDATE, { candidate })
    }
  }

  // Handle |iceconnectionstatechange| events. This will detect
  // when the ICE connection is closed, failed, or disconnected.
  //
  // This is called when the state of the ICE agent changes.
  handleICEConnectionStateChangeEvent() {
    const { myPeerConnection } = this
    if (myPeerConnection) {
      switch(myPeerConnection.iceConnectionState) {
        case 'closed':
        case 'failed':
        case 'disconnected':
          Toast.info('连接挂断')
          this.closeVideoCall()
          break
      }
    }
  }
  
  // Set up a |signalingstatechange| event handler. This will detect when
  // the signaling connection is closed.
  //
  // NOTE: This will actually move to the new RTCPeerConnectionState enum
  // returned in the property RTCPeerConnection.connectionState when
  // browsers catch up with the latest version of the specification!

  handleSignalingStateChangeEvent() {
    const { myPeerConnection } = this
    switch(myPeerConnection.signalingState) {
      case 'closed':
        this.closeVideoCall();
        break
    }
  }

  // Handle the |icegatheringstatechange| event. This lets us know what the
  // ICE engine is currently working on: "new" means no networking has happened
  // yet, "gathering" means the ICE engine is currently gathering candidates,
  // and "complete" means gathering is complete. Note that the engine can
  // alternate between "gathering" and "complete" repeatedly as needs and
  // circumstances change.
  //
  // We don't need to do anything when this happens, but we log it to the
  // console so you can see what's going on when playing with the sample.

  handleICEGatheringStateChangeEvent() {
    const { myPeerConnection } = this
    console.log('*** ICE gathering state changed to: ' + myPeerConnection.iceGatheringState)
  }

  closeVideoCall() {
    const { localVideo, remoteVideo, myPeerConnection } = this
  
    // Close the RTCPeerConnection
    if (myPeerConnection) {
      myPeerConnection.onaddstream = null;  // For older implementations
      myPeerConnection.ontrack = null;      // For newer ones
      myPeerConnection.onremovestream = null;
      myPeerConnection.onnicecandidate = null;
      myPeerConnection.oniceconnectionstatechange = null;
      myPeerConnection.onsignalingstatechange = null;
      myPeerConnection.onicegatheringstatechange = null;
      myPeerConnection.onnotificationneeded = null;
  
      // Stop the videos
      if (remoteVideo.srcObject) {
        remoteVideo.srcObject.getTracks().forEach(track => track.stop());
      }
  
      if (localVideo.srcObject) {
        localVideo.srcObject.getTracks().forEach(track => track.stop());
      }
  
      remoteVideo.src = null;
      localVideo.src = null;
  
      // Close the peer connection
      myPeerConnection.close();
      this.myPeerConnection = null;
    }
  }

  // Hang up the call by closing our end of the connection, then
  // sending a "hang-up" message to the other peer (keep in mind that
  // the signaling is done on a different connection). This notifies
  // the other peer that the connection should be terminated and the UI
  // returned to the "no call in progress" state.

  hangUpCall() {
    this.closeVideoCall();
    const { contact, info } = this.props
    const { phone: to } = contact
    const { phone: from } = info
    sendToServer({
      type: 'hang-up',
      payload: {
        from,
        to
      }
    })
  }

  // Handle a click on an item in the user list by inviting the clicked
  // user to video chat. Note that we don't actually send a message to
  // the callee here -- calling RTCPeerConnection.addStream() issues
  // a |notificationneeded| event, so we'll let our handler for that
  // make the offer.

  offer() {
    let { myPeerConnection } = this
    if (myPeerConnection) {
      alert('You can not start a call because you already have one open!');
    } else {

      this.createPeerConnection()
      myPeerConnection = this.myPeerConnection
      // const hasAddTrack =  myPeerConnection.addTrack !== undefined
      navigator.mediaDevices.getUserMedia(mediaConstraints)
      .then(stream => {
        const { localVideo } = this
        this.localStream = stream
        localVideo.src = window.URL.createObjectURL(stream)
        localVideo.srcObject = stream

        // if (hasAddTrack) {
        //   stream.getTracks().forEach(track => myPeerConnection.addTrack(track, stream))
        // } else {
        myPeerConnection.addStream(stream)
        // }
        this.sendOffer()
      })
      .catch(this.handleGetUserMediaError)
    }
  }

  /**
   * 处理视频邀请取消
   */
  handleInviteCancelMsg() {
    Toast.info('对方取消了视频邀请')
    setTimeout(() => {
      const { history } = this
      history.goBack()
    }, 1000)
  }


  /**
   * 处理视频邀请接受消息
   */
  handleInviteRefuseMsg() {
    const { history } = this.props
    Toast.info('对方拒绝了您的请求')
    setTimeout(() => {
      history.goBack()
    }, 3000)
  }

  /**
   * 处理视频邀请接受消息
   */
  handleInviteAcceptMsg() {
    this.offer() // 发起视频offer
    this.setState({
      conversationState: VIDEO_CONVERSATION_STATE.CONNECTING // 聊天状态改为连接中
    })
  }

  // Accept an offer to video chat. We configure our local settings,
  // create our RTCPeerConnection, get and attach our local camera
  // stream, then create and send an answer to the caller.

  handleVideoOfferMsg(payload) {
    const { to, from, sdp } = payload

    // Call createPeerConnection() to create the RTCPeerConnection.
    this.createPeerConnection()

    // We need to set the remote description to the received SDP offer
    // so that our local WebRTC layer knows how to talk to the caller.

    const desc = new RTCSessionDescription(sdp);
    const { myPeerConnection } = this
    // const hasAddTrack =  myPeerConnection.addTrack !== undefined
    myPeerConnection.setRemoteDescription(desc).then(function () {
      return navigator.mediaDevices.getUserMedia(mediaConstraints);
    })
    .then(localStream => {
      const { localVideo } = this
      this.localStream = localStream
      localVideo.src = window.URL.createObjectURL(localStream)
      localVideo.srcObject = localStream

      // if (hasAddTrack) {
      //   localStream.getTracks().forEach(track => myPeerConnection.addTrack(track, localStream))
      // } else {
      myPeerConnection.addStream(localStream)
      // }
    })
    .then(function() {
      // Now that we've successfully set the remote description, we need to
      // start our stream up locally then create an SDP answer. This SDP
      // data describes the local end of our call, including the codec
      // information, options agreed upon, and so forth.
      return myPeerConnection.createAnswer()
    })
    .then(function(answer) {
      // We now have our answer, so establish that as the local description.
      // This actually configures our end of the call to match the settings
      // specified in the SDP.
      const msg = {
        type: 'video-answer',
        payload: {
          to: from,
          from: to,
          sdp: answer
        }
      }

      // We've configured our end of the call now. Time to send our
      // answer back to the caller so they know that we want to talk
      // and how to talk to us.
      sendToServer(msg)
      return myPeerConnection.setLocalDescription(answer)
    })
    .catch(this.handleGetUserMediaError)
  }

  // Responds to the "video-answer" message sent to the caller
  // once the callee has decided to accept our request to talk.

  handleVideoAnswerMsg(payload) {
    // Configure the remote description, which is the SDP payload
    // in our "video-answer" message.
  
    const desc = new RTCSessionDescription(payload.sdp)
    this.myPeerConnection.setRemoteDescription(desc).catch(reportError)
  }

  // A new ICE candidate has been received from the other peer. Call
  // RTCPeerConnection.addIceCandidate() to send it along to the
  // local ICE framework.

  handleNewICECandidateMsg(payload) {
    const candidate = new RTCIceCandidate(payload.candidate)
    const { myPeerConnection } = this
    myPeerConnection.addIceCandidate(candidate).catch(reportError);
  }

  // Handle errors which occur when trying to access the local media
  // hardware; that is, exceptions thrown by getUserMedia(). The two most
  // likely scenarios are that the user has no camera and/or microphone
  // or that they declined to share their equipment when prompted. If
  // they simply opted not to share their media, that's not really an
  // error, so we won't present a message in that situation.

  handleGetUserMediaError(e) {
    switch(e.name) {
      case 'NotFoundError':
        alert('Unable to open your call because no camera and/or microphone were found.');
        break;
      case 'SecurityError':
      case 'PermissionDeniedError':
        // Do nothing; this is the same as the user canceling the call.
        break;
      default:
        alert(`Error opening your camera and/or microphone: ${e.message}`);
        break;
    }

    // Make sure we shut down our end of the RTCPeerConnection so we're
    // ready to try again.

    this.closeVideoCall();
  }

  render() {
    const { props } = this
    const { contact, history } = props
    const { nick, thumb } = contact
    const { conversationState } = this.state
    let stateMessage
    switch (conversationState) {
      case VIDEO_CONVERSATION_STATE.CONNECTING:
        stateMessage = '连接中...'
        break
      case VIDEO_CONVERSATION_STATE.INVITE_RECEIVED:
        stateMessage = '邀请您视频通话...'
        break
      case VIDEO_CONVERSATION_STATE.INVITE_SENDED:
        stateMessage = '正在等待对方接受邀请...'
        break
      default:
        break
    }
    return (<div className="app">
      <div styleName="container">
        {
          conversationState !== VIDEO_CONVERSATION_STATE.CHATING &&
          <div styleName="info">
            <div className="t-c">
              <img src={thumb} style={{ width: '120px', height: '120px' }} alt="" />
            </div>
            <div className="t-c" styleName="nick">{nick}</div>
            <div className="t-c" styleName="hint">{stateMessage}</div>
          </div>
        }
        <video
          ref={el => {
            if (el) {
              this.remoteVideo = el
            }
          }}
          styleName="video"
          autoPlay
          playsInline
        />
        <video
          ref={el => {
            if (el) {
              this.localVideo = el
            }
          }}
          styleName="my-video"
          autoPlay
          playsInline
        />
        {
          conversationState === VIDEO_CONVERSATION_STATE.INVITE_SENDED && 
          <div styleName="action">
            <div styleName="action-item">
              <FillIcon type="jingyin1" size="xxl" styleName="icon icon-disabled" />
              <div styleName="text disabled">静音</div>
            </div>
            <div styleName="action-item" onClick={() => { history.goBack() }}>
              <FillIcon type="hangup" size="xxl" styleName="icon icon-warning" />
              <div styleName="text">取消</div>
            </div>
            <div styleName="action-item">
              <FillIcon type="mianti1" size="xxl" styleName="icon icon-secondary" />
              <div styleName="text">免提</div>
            </div>
          </div>
        }

        {
          conversationState === VIDEO_CONVERSATION_STATE.INVITE_RECEIVED && 
          <div styleName="action">
            <div styleName="action-item">
              <FillIcon type="dianhua" size="xxl" styleName="icon icon-success" onClick={this.onAcceptInvite} />
              <div styleName="text">接听</div>
            </div>
            <div styleName="action-item" onClick={() => { history.goBack() }}>
              <FillIcon type="hangup" size="xxl" styleName="icon icon-warning" />
              <div styleName="text">挂断</div>
            </div>
          </div>
        }



        {
          conversationState === VIDEO_CONVERSATION_STATE.CHATING && 
          <div styleName="action">
            <div styleName="action-item">
              <FillIcon type="jingyin1" size="xxl" styleName="icon icon-secondary" />
              <div styleName="text">静音</div>
            </div>
            <div styleName="action-item" onClick={() => { history.goBack() }}>
              <FillIcon type="hangup" size="xxl" styleName="icon icon-warning" />
              <div styleName="text">挂断</div>
            </div>
            <div styleName="action-item" onClick={() => { history.goBack() }}>
              <FillIcon type="mianti1" size="xxl" styleName="icon icon-secondary" />
              <div styleName="text">免提</div>
            </div>
          </div>
        }
      </div>
    </div>)
  }
}
