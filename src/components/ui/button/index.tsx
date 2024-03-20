import React from 'react';
import styles from './style.module.css';
import classNames from 'classnames';
import { useFormContext } from 'react-hook-form';
import { useThrottle } from '@hooks/useThrottle';

interface Props {
  children: string;
  onClick?: () => void;
  variant: 'resolve' | 'reject';
  type?: 'submit' | 'button';
  setIsValidate?: (val: boolean) => void;
}

const Button: React.FC<Props> = ({
  children,
  variant,
  type = 'submit',
  setIsValidate,
  onClick,
}) => {
  const { trigger } = useFormContext<Fields>();
  const { disabled, setClicked } = useThrottle();

  const triggerEmail = async (e: any) => {
    e.preventDefault();
    if (setIsValidate) {
      const validate = await trigger('email');
      setIsValidate(validate);
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={
        type === 'button'
          ? triggerEmail
          : variant === 'reject'
          ? onClick
          : () => setClicked((prev) => !prev)
      }
      className={classNames(styles.button, {
        [styles.resolveButton]: variant === 'resolve',
        [styles.rejectButton]: variant === 'reject',
      })}
    >
      {children}
    </button>
  );
};

export default Button;
