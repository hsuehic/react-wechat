/**
 * 离线操作方法集合
 * @File   : storage.js
 * @Author : Richard Hsueh <xiaowei.hsueh@gmail.com> (https://www.gistop.com/)
 * @Link   : http://www.gistop.com/
 * @Date   : 2018-7-2 17:03:09
 */

const { localStorage } = window
const { getItem, setItem } = localStorage

/**
 * 获取本地存储的值
 * @param {string} key 获取本地存储的值
 * @param {*} defaultValue 默认值
 */
const getItemValue = (key, defaultValue) => {
  const value = getItem(key)
  if (value !== null) {
    return JSON.parse(value)
  } else {
    return defaultValue
  }
}

/**
 * 保存到本地储存
 * @param {string} key 键
 * @param {*} value 要转化的值，可以基本数据类型， boolean, string, number, 以及由这几数据类型为节点的 plainobject 
 */
const setItemValue = (key, value) => {
  const v = JSON.stringify(value);
  setItem(key, v)
}

export {
  getItem,
  getItemValue,
  setItem,
  setItemValue
}
