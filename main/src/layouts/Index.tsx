import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { history } from 'umi';

import RenderComponent from './RenderComponent';
import './style.less';

const { Header, Content } = Layout;

const CommonLayout: React.FC = (props) => {
  // state
  const [navkey, setNavKey] = useState<string[]>([]);

  console.log('navkey', navkey);

  // useEffect
  useEffect(() => {
    const current = ['/'];
    current.push(window.location.pathname);
    Array.from(new Set(current));
    setNavKey(current);
  }, [window.location.pathname]);

  // function
  const handleLink = (url: string) => () => {
    let arr = [];
    arr.push(url);
    setNavKey(arr);
    history.push(url);
  };

  return (
    <Layout>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Menu theme="dark" mode="horizontal" selectedKeys={navkey}>
            <Menu.Item key="/main" onClick={handleLink('/main')}>
              Home
            </Menu.Item>
            <Menu.Item key="/app1" onClick={handleLink('/app1')}>
              app1
            </Menu.Item>
            <Menu.Item key="/app2" onClick={handleLink('/app2')}>
              app2
            </Menu.Item>
          </Menu>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <RenderComponent {...props} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default CommonLayout;
