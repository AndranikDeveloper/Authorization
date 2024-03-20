import QencodeLogo from '@assets/qencode-logo';
import Auth from '@components/auth';
import Button from '@components/ui/button';
import Input from '@components/ui/input';
import Title from '@components/ui/title';
import { authTitle, buttonText } from '@utils/auth';
import { setPassword } from '@utils/submit';
import { FormProvider } from 'react-hook-form';
import { useSetPassword } from './hooks/useSetPassword';
import { useEffect } from 'react';
import { handleEnqueue } from '@utils/handle-enqueue';
import { useNavigate } from 'react-router-dom';
import { navigations } from '@utils/navigations';
import { getAllFromSetPassword } from '@store/slices/setPasswordSlice';
import { useAppSelector } from '@hooks/useAppSelector';
import { RootState } from '@store/store';

const SetPassword = () => {
  const {
    dispatch,
    handleSubmit,
    methods,
    enqueueSnackbar,
    handleClickShowPassword,
    showPassword,
    showConfirmPassword,
    handleClickShowConfirmPassword,
  } = useSetPassword();

  const { error: setPasswordError, response: setPasswordResponse } =
    useAppSelector(getAllFromSetPassword);
  const healthError = useAppSelector((state: RootState) => state.heathCheckSlice.error);
  const navigate = useNavigate();

  useEffect(() => {
    if (setPasswordError) {
      handleEnqueue(setPasswordError, 'error', enqueueSnackbar);
    }
    if (setPasswordResponse) {
      handleEnqueue('You have set a new password', 'success', enqueueSnackbar);
      navigate(navigations.login);
    }

    if (healthError) {
      handleEnqueue(healthError as string, 'error', enqueueSnackbar);
    }
  }, [enqueueSnackbar, healthError, navigate, setPasswordError, setPasswordResponse]);

  const reset = (data: IPasswordSetData) => {
    const token = localStorage.getItem('accessToken');

    const realData = {
      ...data,
      token,
      secret: import.meta.env.VITE_CLIENT_SECRET,
    };

    setPassword({ dispatch, data: realData as never });
  };

  return (
    <Auth>
      <QencodeLogo />
      <Title>{authTitle.reset}</Title>
      <FormProvider {...methods}>
        <form style={{ width: '100%' }} onSubmit={handleSubmit(reset)}>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            label="Password"
            showPassword={showPassword}
            handleClickShowPassword={handleClickShowPassword}
          />
          <Input
            type="password"
            name="password_confirm"
            placeholder="Password"
            label="Confirm Password"
            style={{ marginTop: '25px' }}
            showPassword={showConfirmPassword}
            handleClickShowPassword={handleClickShowConfirmPassword}
          />
          <Button variant="resolve">{buttonText.resetPassword}</Button>
        </form>
      </FormProvider>
    </Auth>
  );
};

export default SetPassword;
