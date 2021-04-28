import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  qiankun: {
    master: {
      apps: [
        {
          name: 'app2',
          entry:
            process.env.NODE_ENV === 'development'
              ? '//localhost:3001/app2'
              : '/app2',
          codePath: 'app2',
          props: {},
        },
      ],
    },
    slave: {},
  },
});
