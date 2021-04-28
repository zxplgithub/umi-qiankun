export default [
  {
    path: '/',
    component: '@/layouts/Index',
    routes: [
      { path: '/', redirect: '/main' },
      {
        path: '/main',
        name: 'master app',
        component: '@/pages/Master',
      },
      {
        path: '/app1',
        name: 'app1',
        microApp: 'app1',
      },
      {
        path: '/app2',
        name: 'app2',
        microApp: 'app2',
      },
    ],
  },
];
