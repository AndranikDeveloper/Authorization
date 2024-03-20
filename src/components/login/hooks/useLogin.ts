import { useAppDispatch } from '@hooks/useAppDispatch';
import { useShowPassword } from '@hooks/useShowPassword';
import { useSnackbar } from 'notistack';
import { useState } from 'react';

export const useLogin = () => {
  const [isValidate, setIsValidate] = useState(false);
  const { handleClickShowPassword, showPassword } = useShowPassword();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();

  return {
    enqueueSnackbar,
    isValidate,
    setIsValidate,
    dispatch,
    handleClickShowPassword,
    showPassword,
  };
};
