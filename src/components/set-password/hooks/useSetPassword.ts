import { useAppDispatch } from '@hooks/useAppDispatch';
import { useFormMethods } from '@hooks/useFormMethods';
import { useShowPassword } from '@hooks/useShowPassword';
import { useSnackbar } from 'notistack';

export const useSetPassword = () => {
  const { handleSubmit, methods } = useFormMethods();
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const {
    handleClickShowPassword,
    showPassword,
    handleClickShowConfirmPassword,
    showConfirmPassword,
  } = useShowPassword();

  return {
    handleSubmit,
    methods,
    dispatch,
    enqueueSnackbar,
    handleClickShowPassword,
    showPassword,
    showConfirmPassword,
    handleClickShowConfirmPassword,
  };
};
