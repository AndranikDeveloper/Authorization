import React from 'react';
import styles from './style.module.css';

interface Props {
  children: string;
}
const Title: React.FC<Props> = ({ children }) => {
  return <div className={styles.title}>{children}</div>;
};

export default Title;
