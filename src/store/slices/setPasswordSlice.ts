import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { setPasswordApi } from '@store/requests/requests';

const initialState: IInitialState<IPasswordSetResponse> = {
  error: '',
  isLoading: false,
  response: null,
};

const setPasswordSlice = createSlice({
  name: 'setPasswordSlice',
  initialState,
  reducers: {
    resetSetPasswordError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setPasswordApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setPasswordApi.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.response = null;
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(setPasswordApi.fulfilled, (state, action: PayloadAction<IPasswordSetResponse>) => {
        state.error = '';
        state.isLoading = false;
        state.response = action.payload;
      });
  },
  selectors: {
    getAllFromSetPassword: (state) => state,
  },
});

export default setPasswordSlice.reducer;
export const { resetSetPasswordError } = setPasswordSlice.actions;
export const { getAllFromSetPassword } = setPasswordSlice.selectors;
