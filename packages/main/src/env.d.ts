/// <reference types="@rsbuild/core/types" />

declare global {
  interface Window {
    __POWERED_BY_QIANKUN__: boolean;
    __INJECTED_PUBLIC_PATH_BY_QIANKUN__: string;
    qiankunStarted: boolean;
  }

  const process: {
    env: {
      NODE_ENV: 'development' | 'production';
    }
  }

  interface Navigator {
    msSaveOrOpenBlob: (blob: Blob, fileName: string) => void;
    browserLanguage: string;
  }

  interface ImportMeta {
    env: Record<string, string>;
  }

  namespace JSX {
    interface IntrinsicAttributes {
      class?: unknown;
      style?: unknown;
    }
  }
}

export {};

declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  // biome-ignore lint/complexity/noBannedTypes: reason
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
