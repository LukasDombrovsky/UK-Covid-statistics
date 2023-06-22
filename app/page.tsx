'use client';

import Image from 'next/image';
import styles from './page.module.scss';
import { Col, Layout, Row, Space, Typography } from 'antd';

const { Title } = Typography;

const { Header, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};

export default function Home() {
  return (
    // <Space direction='vertical' style={{ width: '100%' }} size={[0, 48]}>
    <Layout>
      <Header className={styles.header}>
        <Title level={4}>App title</Title>
      </Header>
      <Content className={styles.content}>
        <Row>
          <Col span={24}>
            <Title level={4}>Page title</Title>
          </Col>
        </Row>
        <Row>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
        </Row>
      </Content>
    </Layout>
    // </Space>
  );
}
