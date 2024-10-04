export interface MenuItem {
  index?: string;
  title: string;
  iconComponent?: unknown;
  children?: MenuItem[];
  path?: string;
  target?: string;
}

export interface AppState {
  navbar?: boolean;
  menuWidth?: number;
  device?: string;
  tabBar?: boolean;
  menuList: MenuItem[];
  [key: string]: unknown;
}