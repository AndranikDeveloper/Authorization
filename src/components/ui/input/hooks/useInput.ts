import { useFormContext } from 'react-hook-form';

interface Props {
  showPassword?: boolean;
  name: string;
}

interface IRules {
  required: string;
  minLength: { value: number; message: string };
  pattern?: {
    value: RegExp;
    message: string;
  };
}

const pattern = {
  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  message: 'Invalid email address',
};

export const useInput = ({ name, showPassword }: Props) => {
  const {
    formState: { errors },
    register,
    clearErrors,
  } = useFormContext<Fields>();

  const currentType = showPassword === undefined && 'text';

  let rules: IRules = {
    required: 'This field cannot be empty',
    minLength: { value: name === 'password' ? 5 : 3, message: 'The Field should has more symbols' },
  };

  if (name === 'email') {
    rules = {
      ...rules,
      pattern,
    };
  }

  return {
    errors,
    currentType,
    rules,
    register,
    clearErrors,
  };
};
