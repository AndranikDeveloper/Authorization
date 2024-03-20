import QencodeLogo from '@assets/qencode-logo';
import Auth from '@components/auth';
import Button from '@components/ui/button';
import Input from '@components/ui/input';
import Title from '@components/ui/title';
import { authTitle, buttonText } from '@utils/auth';
import { FormProvider } from 'react-hook-form';
import { resetPassword } from '@utils/submit';
import { useResetPassword } from './hooks/useResetPassword';
import { getAllFromResetPassword } from '@store/slices/resetPasswordSlice';
import { useEffect } from 'react';
import { handleEnqueue } from '@utils/handle-enqueue';
import { useNavigate } from 'react-router-dom';
import { navigations } from '@utils/navigations';
import { useAppSelector } from '@hooks/useAppSelector';
import { RootState } from '@store/store';

const ResetPassword = () => {
  const { dispatch, enqueueSnackbar, handleSubmit, methods } = useResetPassword();
  const navigate = useNavigate();

  const { error: resetPasswordError, response: resetPasswordResponse } =
    useAppSelector(getAllFromResetPassword);
  const healthError = useAppSelector((state: RootState) => state.heathCheckSlice.error);

  useEffect(() => {
    if (resetPasswordError) {
      handleEnqueue(resetPasswordError, 'error', enqueueSnackbar);
    }
    if (resetPasswordResponse) {
      handleEnqueue('You have sent request for set new password ', 'success', enqueueSnackbar);
    }

    if (healthError) {
      handleEnqueue(healthError, 'error', enqueueSnackbar);
    }
  }, [enqueueSnackbar, healthError, resetPasswordError, resetPasswordResponse]);

  return (
    <Auth>
      <QencodeLogo />
      <Title>{authTitle.forgotPassword}</Title>
      <FormProvider {...methods}>
        <form
          style={{ width: '100%' }}
          onSubmit={handleSubmit((data) => resetPassword({ dispatch, data }))}
        >
          <Input name="email" placeholder="Enter your email" type="text" />
          <Button variant="resolve">{buttonText.sendForgotPassword}</Button>
          <Button variant="reject" onClick={() => navigate(navigations.login)}>
            {buttonText.cancelForgotPassword}
          </Button>
        </form>
      </FormProvider>
    </Auth>
  );
};

export default ResetPassword;
