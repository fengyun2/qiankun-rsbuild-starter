/**
 * 跨应用路由跳转
 * @param {String} href url地址
 * @param {String} title 标题
 */
export function routerGo(href: string = '/', title: string) {
  window.history.pushState(null, title, href);
  window.dispatchEvent(new Event('popstate'));
}
