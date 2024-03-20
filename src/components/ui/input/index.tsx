import styles from './style.module.css';
import classNames from 'classnames';
import { useInput } from './hooks/useInput';
import Icons from './icons';
import ForgotPasswordText from '../forgot-password-text';

interface Props {
  style?: React.CSSProperties;
  name: 'password' | 'email' | 'password_confirm';
  placeholder: string;
  label?: string;
  isForgotPassword?: boolean;
  showPassword?: boolean;
  handleClickShowPassword?: () => void;
  type?: 'text' | 'password';
}

const Input: React.FC<Props> = ({
  name,
  placeholder,
  label,
  style,
  isForgotPassword,
  type,
  showPassword,
  handleClickShowPassword,
}) => {
  const { errors, register, rules, clearErrors, currentType } = useInput({
    name,
    showPassword,
  });

  return (
    <div className={styles.inputBlock} style={style}>
      {label && <div className={styles.label}>{label}</div>}
      <>
        <div className={styles.inputWrapper}>
          <input
            {...register(name, rules)}
            type={currentType ? 'text' : showPassword ? 'text' : 'password'}
            placeholder={placeholder}
            onChange={() => clearErrors(name)}
            className={classNames(styles.input, {
              [styles.errorInput]: Boolean(errors[name]?.message),
            })}
          />
          {type === 'password' && (
            <Icons showPassword={showPassword} handleClickShowPassword={handleClickShowPassword} />
          )}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: `${isForgotPassword || Boolean(errors[name]?.message) ? '15px' : '0'}`,
          }}
        >
          {Boolean(errors[name]?.message) && (
            <div className={styles.errorMessage}>{errors[name]?.message?.toString()}</div>
          )}
          {isForgotPassword && <ForgotPasswordText />}
        </div>
      </>
    </div>
  );
};

export default Input;
