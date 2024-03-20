import { resetPasswordApi } from '../requests/requests';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: IInitialState<IPasswordResetResponse> = {
  error: '',
  isLoading: false,
  response: null,
};

const resetPasswordSlice = createSlice({
  name: 'resetPasswordSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(resetPasswordApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPasswordApi.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.response = null;
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(
        resetPasswordApi.fulfilled,
        (state, action: PayloadAction<IPasswordResetResponse>) => {
          state.error = '';
          state.isLoading = false;
          state.response = action.payload;
        },
      );
  },
  selectors: {
    getAllFromResetPassword: (state) => state,
  },
});

export default resetPasswordSlice.reducer;

export const { getAllFromResetPassword } = resetPasswordSlice.selectors;
