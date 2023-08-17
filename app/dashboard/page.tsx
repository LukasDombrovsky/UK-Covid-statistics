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
import ChartLoader from '../components/chartLoader/chartLoader';

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
          <Title level={4} className={styles.title}>
            Statistics
          </Title>
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
          <Card title='5 areas with most cumulative cases'>
            <ChartLoader
              data={data && data.length && data[0]}
              chartId='chart1'
              columnXname='name'
              columnYname='cumulativeCases'
            />
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title='5 days with most new cases'>
            <ChartLoader
              data={data && data.length > 1 && data[1]}
              chartId='chart2'
              columnXname='date'
              columnYname='newCases'
              chartCordinate='theta'
            />
          </Card>
        </Col>
      </Row>
    </DashboardLayout>
  );
};

export default DashboardPage;
