import React from 'react';
import styles from './style.module.css';

interface Props {
  children: React.ReactNode;
}

const Auth: React.FC<Props> = ({ children }) => {
  return <div className={styles.auth}>{children}</div>;
};

export default Auth;
