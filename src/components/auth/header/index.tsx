import styles from './style.module.css';
import Title from '@components/ui/title';
import SocialButtons from '@components/social-buttons';
import { authTitle } from '@utils/auth';

const AuthHeader = () => {
  return (
    <div className={styles['auth__header-block']}>
      <Title>{authTitle.login}</Title>
      <SocialButtons />
    </div>
  );
};

export default AuthHeader;
