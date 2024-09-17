import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { pluginSass } from '@rsbuild/plugin-sass';
import packageJson from './package.json';

// const isPro = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [pluginVue(), pluginSass()],
  server: {
    port: 3006,
  },
  source: {
    alias: {
      '@': './src'
    }
  },
  output: {
    // assetPrefix: isPro ? '/child/app-vue3/': '/'
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
