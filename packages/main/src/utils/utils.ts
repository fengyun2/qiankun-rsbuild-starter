import { setRouteEmitter } from '@/utils/route-listener';

/**
 * 跨应用路由跳转
 * @param {String} href url地址
 * @param {String} title 标题
 */
export function routerGo(href: string = '/', title: string, target?: string) {
  if (!href) return;
  if (href?.startsWith('http:') || href?.startsWith('https:')) {
    window.open(href, target);
  } else {
    window.history.pushState(null, title, href);
  }
  setRouteEmitter({ path: href, title })
  window.dispatchEvent(new Event('popstate'));
}
