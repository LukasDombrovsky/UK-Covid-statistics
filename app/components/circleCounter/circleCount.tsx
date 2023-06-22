import React from 'react';
import styles from './circleCounter.module.scss';

export interface CircleCounterProps {
  count: number;
}

const CircleCounter: React.FC<CircleCounterProps> = (
  props: CircleCounterProps
) => {
  const { count } = props;

  return (
    <div className={styles.circle}>
      <div className={styles.number}>{count > 9 ? '9+' : count}</div>
    </div>
  );
};
export default CircleCounter;
