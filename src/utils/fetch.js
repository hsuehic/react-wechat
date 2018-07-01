/**
 * @File   : utils.js
* @Author : Richard <xiaowei.hsueh@gmail.com> (https://www.gistop.com)
 * @Link   : http://www.gistop.com/
 * @Date   : 2018-6-18 16:01:55
 */

import fetch from 'dva/fetch'


/**
 * 将对象转成query string. 对象的属性如果是数组,只支持一维数组
 * @param obj {object}
 * @return {string} query string
 */
export function toQueryString(obj) {
  const items = []
  let v
  if (obj) {
    const keys = Object.keys(obj)
    keys.forEach((k) => {
      v = obj[k]
      if (v && v.constructor === Array) {
        const len = v.length
        for (let i = 0; i < len; i++) {
          const m = v[i]
          items.push(`${encodeURI(k)}[]=${m}`)
        }
      } else {
        items.push(`${encodeURI(k)}=${v}`)
      }
    })
  }
  const value = items.join('&')
  return value
}

/**
 * 构建FormData
 * @param {object} obj 要构建formdata的key，value对
 */
export function toFormData(obj) {
  const formData = new FormData()
  let v
  if (obj) {
    const keys = Object.keys(obj)
    keys.forEach((k) => {
      v = obj[k]
      formData.append(k, v)
    })
  }
  return formData
}

/**
 * 执行fetch请求
 * @param url {string} 请求路径
 * @param opts {object} 请求选项, @see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

 * @return {*}
 */
export async function request(url, params, opts) {
  const headers = {};

  // jwt 认证头部信息, 这个信息由两种方式返回，后台直接吐在页面中， 二是 调用登录等接口后赋值到window.SEC_TOKEN
  if (window.SEC_TOKEN) {
    Object.assign(headers, {
      'Authorization': `Bearer ${window.SEC_TOKEN}`
    })
  }

  const options = {
    method: 'POST',
    headers,
    body: toFormData(params),
    credentials: 'same-origin',
    ...opts
  }
  const response = await fetch(url, options)
  if (response.status < 200 || response.status >= 300) {
    throw new Error(response.statusText)
  }
  const resp = response.json()
  return resp
}
