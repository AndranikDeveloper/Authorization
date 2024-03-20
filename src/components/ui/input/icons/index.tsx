import React from 'react';
import styles from './style.module.css';
import CloseEye from '@assets/close-eye';
import OpenEye from '@assets/open-eye';

interface Props {
  showPassword?: boolean;
  handleClickShowPassword?: () => void;
}
const Icons: React.FC<Props> = ({ showPassword, handleClickShowPassword }) => {
  return (
    <>
      {/* {showPassword !== undefined && ( */}
      <>
        {showPassword ? (
          <div className={styles.eyeIcon} onClick={handleClickShowPassword}>
            <CloseEye />
          </div>
        ) : (
          <div className={styles.eyeIcon} onClick={handleClickShowPassword}>
            <OpenEye />
          </div>
        )}
      </>
      {/* )} */}
    </>
  );
};

export default Icons;
