import GoogleIcon from '@assets/google-icon';
import styles from './style.module.css';
import GithubIcon from '@assets/github-icon';
import { useAuth0 } from '@auth0/auth0-react';

const SocialButtons = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className={styles.buttonsWrapper}>
      <button className={styles.socialButton} type="button" onClick={() => loginWithRedirect()}>
        <GoogleIcon />
        <span className={styles.socialName}>Google</span>
      </button>
      <button className={styles.socialButton} type="button" onClick={() => loginWithRedirect()}>
        <GithubIcon />
        <span className={styles.socialName}>Github</span>
      </button>
    </div>
  );
};

export default SocialButtons;
