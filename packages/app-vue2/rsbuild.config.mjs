import { defineConfig } from '@rsbuild/core';
import { pluginVue2 } from '@rsbuild/plugin-vue2';
import packageJson from './package.json';

// const isPro = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [pluginVue2()],
  server: {
    port: 3007,
  },
  source: {
    alias: {
      '@': './src'
    }
  },
  output: {
    // assetPrefix: isPro ? '/child/app-vue2/': '/'
    assetPrefix: '/'
  },
  tools: {
    rspack: {
      output: {
        library: `${packageJson.name}-[name]`,
        libraryTarget: 'umd', // 把微应用打包成 umd 库格式
        chunkLoadingGlobal: `webpackJsonp_${packageJson.name}`,
      }
    }
  }
});
