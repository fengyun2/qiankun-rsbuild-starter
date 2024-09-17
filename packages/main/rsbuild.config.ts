import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { pluginSass } from '@rsbuild/plugin-sass';
import packageJson from './package.json';

const isPro = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [pluginVue(), pluginSass()],
  server: {
    port: 3005,
  },
  source: {
    alias: {
      '@': './src'
    }
  },
  output: {
    assetPrefix: isPro ? '/': '/',
    distPath: {
      root: `../../dist/${packageJson.name}`
    }
  },
  html: {
    title: '东半球最强的微前端框架'
  }
});
