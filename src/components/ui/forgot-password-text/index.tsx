import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import { navigations } from '@utils/navigations';

const ForgotPasswordText = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.forgotPasswordText} onClick={() => navigate(navigations.resetPassword)}>
      Forgot your password?
    </div>
  );
};

export default ForgotPasswordText;
