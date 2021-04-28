import React, { useState } from 'react';

export function useQiankunStateForSlave() {
  const [masterState, setMasterState] = useState({
    a: 1,
  });

  return {
    masterState,
    setMasterState,
  };
}

export const qiankun = () => {
  return {
    apps: [
      {
        name: 'app1', // 子应用名称
        entry:
          process.env.NODE_ENV === 'development'
            ? '//localhost:3000/app1' // 端口对应子引用 package.json中的 start PORT:3000
            : '/app1', // 子应用入口
        codePath: 'app1', // 子应用工程目录名称，用于打包
        props: {},
      },
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
    lifeCycles: {
      afterMount: (props: any) => {
        console.log(props);
      },
    },
  };
};
