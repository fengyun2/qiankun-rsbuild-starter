/**
 * @description 判读是否为外链
 * @param path
 * @returns {boolean}
 */
export function isExternal(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @description 校验密码是否小于6位
 * @param str
 * @returns {boolean}
 */
export function isPassword(str: string) {
  return str.length >= 6
}

/**
 * @description 判断是否是字符串
 * @param str
 * @returns {boolean}
 */
export function isString(str: unknown) {
  return typeof str === 'string' || str instanceof String
}

/**
 * @description 判断是否是数组
 * @param arg
 * @returns {arg is any[]|boolean}
 */
export function isArray(arg: unknown) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

/**
 * @description 判断是否是手机号
 * @param str
 * @returns {boolean}
 */
export function isPhone(str: string) {
  const reg = /^1\d{10}$/
  return reg.test(str)
}
