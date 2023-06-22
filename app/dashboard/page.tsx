'use client';

import { Button, Col, Row, Space, Typography } from 'antd';
import {
  AlignLeftOutlined,
  DownloadOutlined,
  FilterOutlined,
} from '@ant-design/icons';

import CircleCounter from '../components/circleCounter/circleCount';
import Card from '../components/card/card';
import styles from './styles.module.scss';
import DashboardLayout from './layout';

const { Title } = Typography;

export interface DashboardPageProps {
  data: any[];
}

const DashboardPage: React.FC<DashboardPageProps> = (
  props: DashboardPageProps
) => {
  const { data } = props;

  return (
    <DashboardLayout>
      <Row gutter={[16, 12]} style={{ width: '100%', maxWidth: '1200px' }}>
        <Col span={24} className={styles.panel}>
          <Title level={4}>Page title</Title>
          <Space wrap>
            <Button>
              Export to PDF <DownloadOutlined />
            </Button>
            <Button>
              Notes (3) <AlignLeftOutlined />
            </Button>
            <Button>
              <Space>
                Filter <CircleCounter count={10} /> <FilterOutlined />
              </Space>
            </Button>
          </Space>
        </Col>
        <Col xs={24} lg={12}>
          <Card>This is content</Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card>This is content</Card>
        </Col>
      </Row>
    </DashboardLayout>
  );
};

export default DashboardPage;
