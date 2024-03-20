import QencodeLogo from '@assets/qencode-logo';
import Auth from '@components/auth';
import AuthHeader from '@components/auth/header';
import Divider from '@components/divider';
import Button from '@components/ui/button';
import Input from '@components/ui/input';
import { buttonText } from '@utils/auth';
import { FormProvider } from 'react-hook-form';
import { login } from '@utils/submit';
import { useFormMethods } from '@hooks/useFormMethods';
import { useLogin } from './hooks/useLogin';
import { getAllFromLogin } from '@store/slices/loginSlice';
import { useEffect } from 'react';
import { handleEnqueue } from '@utils/handle-enqueue';
import { useAppSelector } from '@hooks/useAppSelector';
import { RootState } from '@store/store';

const Login = () => {
  const {
    dispatch,
    isValidate,
    setIsValidate,
    enqueueSnackbar,
    handleClickShowPassword,
    showPassword,
  } = useLogin();

  const { handleSubmit, methods } = useFormMethods();
  const { error: loginError, response: loginResponse } = useAppSelector(getAllFromLogin);
  const healthError = useAppSelector((state: RootState) => state.heathCheckSlice.error);

  useEffect(() => {
    if (loginError) {
      handleEnqueue(loginError, 'error', enqueueSnackbar);
    }
    if (loginResponse) {
      handleEnqueue('You are Logged In', 'success', enqueueSnackbar);
    }

    if (healthError) {
      handleEnqueue(healthError, 'error', enqueueSnackbar);
    }
  }, [enqueueSnackbar, healthError, loginError, loginResponse]);

  return (
    <Auth>
      <QencodeLogo />
      <AuthHeader />
      <Divider />
      <FormProvider {...methods}>
        <form
          style={{ width: '100%' }}
          onSubmit={handleSubmit((data) => login({ dispatch, data }))}
        >
          <Input name="email" placeholder="Work email" type="text" />
          {isValidate && (
            <>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                style={{ marginTop: '25px' }}
                showPassword={showPassword}
                handleClickShowPassword={handleClickShowPassword}
                isForgotPassword
              />
            </>
          )}
          <Button
            variant="resolve"
            type={isValidate ? 'submit' : 'button'}
            setIsValidate={setIsValidate}
          >
            {buttonText.login}
          </Button>
        </form>
      </FormProvider>
    </Auth>
  );
};

export default Login;
