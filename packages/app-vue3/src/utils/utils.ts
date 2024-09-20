/**
 * 判断是否存于qiankun中
 * @returns {boolean}
 */
export function useQiankun() {
  return window.__POWERED_BY_QIANKUN__;
}

export function isDev() {
  return process.env.NODE_ENV === 'development';
}

export function isProd() {
  return process.env.NODE_ENV === 'production';
}