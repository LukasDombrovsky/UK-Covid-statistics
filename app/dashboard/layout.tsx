'use client';

import { Layout, Typography } from 'antd';

import styles from './styles.module.scss';

const { Title } = Typography;

const { Header, Content } = Layout;

const DashboardLayout: React.FC<{ children: React.ReactNode }> = (props) => {
  const { children } = props;

  return (
    <Layout>
      <Header className={styles.header}>
        <Title level={4}>UK Covid statistics</Title>
      </Header>
      <Content className={styles.content}>{children}</Content>
    </Layout>
  );
};
export default DashboardLayout;
