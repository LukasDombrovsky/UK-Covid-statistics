import React from 'react';
import styles from './card.module.scss';
import { Row, Card as AntdCard, Avatar, Space } from 'antd';
import { CommentOutlined } from '@ant-design/icons';

export interface CardProps {
  children?: React.ReactNode;
  title: string;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  const { children, title } = props;

  return (
    <AntdCard
      className={styles.card}
      title={title}
      bordered={false}
      actions={[
        <Row
          key='comments'
          justify='space-between'
          align='middle'
          className={styles.actions}
        >
          <Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel' />

          <Space className={styles.comment}>
            3 <CommentOutlined />
          </Space>
        </Row>,
      ]}
    >
      <div className={styles.chart}>{children}</div>
    </AntdCard>
  );
};

export default Card;
