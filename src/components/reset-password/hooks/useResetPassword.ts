import { useAppDispatch } from '@hooks/useAppDispatch';
import { useFormMethods } from '@hooks/useFormMethods';
import { useSnackbar } from 'notistack';

export const useResetPassword = () => {
  const { handleSubmit, methods } = useFormMethods();
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  return {
    handleSubmit,
    methods,
    dispatch,
    enqueueSnackbar,
  };
};
