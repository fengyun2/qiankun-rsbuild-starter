const opt = Object.prototype.toString;

export function isArray(obj: unknown): obj is unknown[] {
  return opt.call(obj) === '[object Array]';
}

export function isObject(obj: unknown): obj is { [key: string]: unknown } {
  return opt.call(obj) === '[object Object]';
}

export function isString(obj: unknown): obj is string {
  return opt.call(obj) === '[object String]';
}

export function isNumber(obj: unknown): obj is number {
  return opt.call(obj) === '[object Number]' && obj === obj;
}

export function isRegExp(obj: unknown) {
  return opt.call(obj) === '[object RegExp]';
}

export function isFile(obj: unknown): obj is File {
  return opt.call(obj) === '[object File]';
}

export function isBlob(obj: unknown): obj is Blob {
  return opt.call(obj) === '[object Blob]';
}

export function isUndefined(obj: unknown): obj is undefined {
  return obj === undefined;
}

export function isNull(obj: unknown): obj is null {
  return obj === null;
}

export function isFunction(obj: unknown): obj is (...args: unknown[]) => unknown {
  return typeof obj === 'function';
}

export function isEmptyObject(obj: unknown): boolean {
  return isObject(obj) && Object.keys(obj).length === 0;
}

export function isExist(obj: unknown): boolean {
  return obj || obj === 0;
}

export function isWindow(el: unknown): el is Window {
  return el === window;
}
