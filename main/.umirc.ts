import { defineConfig } from 'umi';

import apps from './src/config/microApps';
import routes from './src/config/routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  qiankun: {
    master: {
      // 注册子应用
      // apps,
      // jsSandbox: true, // 使用 js 沙盒
    },
  },
});
