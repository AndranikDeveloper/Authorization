import {
  healthCheckApi,
  loginApi,
  resetPasswordApi,
  setPasswordApi,
} from '@store/requests/requests';
import { resetLoginError } from '@store/slices/loginSlice';
import { resetSetPasswordError } from '@store/slices/setPasswordSlice';
import { AppDispatch } from '@store/store';

interface Props<T> {
  dispatch: AppDispatch;
  data: T;
}

export const login = ({ dispatch, data }: Props<ILoginData>) => {
  dispatch(healthCheckApi());
  dispatch(loginApi(data));
  dispatch(resetLoginError(''));
};

export const resetPassword = ({ dispatch, data }: Props<IPasswordResetData>) => {
  dispatch(healthCheckApi());
  dispatch(resetPasswordApi(data));
};

export const setPassword = ({ dispatch, data }: Props<IPasswordSetData>) => {
  dispatch(healthCheckApi());
  dispatch(setPasswordApi(data));
  dispatch(resetSetPasswordError(''));
};
