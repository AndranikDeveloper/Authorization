import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loginApi } from '@store/requests/requests';

const initialState: IInitialState<ILoginResponse> = {
  error: '',
  isLoading: false,
  response: null,
};

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
    resetLoginError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginApi.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false;
        state.error = action.payload;
        state.response = null;
      })
      .addCase(loginApi.fulfilled, (state, action: PayloadAction<ILoginResponse>) => {
        const { access_token, refresh_token, ...resp } = action.payload;
        state.error = '';
        state.isLoading = false;
        state.response = resp as ILoginResponse;
        localStorage.setItem('accessToken', JSON.stringify(access_token));
        localStorage.setItem('refreshToken', JSON.stringify(refresh_token));
      });
  },
  selectors: {
    getAllFromLogin: (state) => state,
  },
});

export default loginSlice.reducer;
export const { resetLoginError } = loginSlice.actions;
export const { getAllFromLogin } = loginSlice.selectors;
