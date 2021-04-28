import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { MicroAppWithMemoHistory, useModel } from 'umi';
import styles from './index.less';

export default function IndexPage() {
  // state
  const [visible, setVisible] = useState(false);

  // props
  const masterProps = useModel('@@qiankunStateFromMaster');

  console.log('masterProps', masterProps);

  // function
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="app2"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <MicroAppWithMemoHistory name="app2" url="/" />
      </Drawer>
    </div>
  );
}
