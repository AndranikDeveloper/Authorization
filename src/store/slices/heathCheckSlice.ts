import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { healthCheckApi } from '@store/requests/requests';

const initialState: IInitialState<null> = {
  error: '',
  isLoading: false,
  response: null,
};

const healthCheckSlice = createSlice({
  name: 'healthCheckSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(healthCheckApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(healthCheckApi.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(healthCheckApi.fulfilled, (state, action: PayloadAction<null>) => {
        state.error = '';
        state.isLoading = false;
        state.response = action.payload;
      });
  },
});

export default healthCheckSlice.reducer;
