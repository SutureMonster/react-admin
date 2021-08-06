import React, { useState } from 'react'
import { Layout } from 'antd';
import CjSider from './CjSider';
import CjHeader from './CjHeader';
import CjContent from './CjContent';
import './index.scss'
const { Header, Sider, Content } = Layout;


export default () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <CjSider value={collapsed} onChange={bol => setCollapsed(bol)} />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <CjHeader />
          </Header>

          <Content className="site-layout-background" >
            <CjContent />
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}