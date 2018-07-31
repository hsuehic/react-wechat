/**
 * @File   : notification.js
 * @Author : Richard Hsueh <xiaowei.hsueh@gmail.com> (https://www.gistop.com/)
 * @Link   : http://www.gistop.com/
 * @Date   : 2018-7-31 16:57:34
 */

function showNotification(title, options) {
  try {
    new Notification(title, options)
  } catch(ex) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.showNotification(title, options)
    })
  }
}

export function notify(title, options) {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support system notifications")
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    showNotification(title, options)
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        showNotification(title, options)
      }
    })
  }
}
