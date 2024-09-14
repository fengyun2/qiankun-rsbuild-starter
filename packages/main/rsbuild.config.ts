import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { pluginSass } from '@rsbuild/plugin-sass';

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
    assetPrefix: isPro ? '/main/': '/'
  }
});
