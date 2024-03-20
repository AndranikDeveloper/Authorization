import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loginSlice from './slices/loginSlice';
import resetPasswordSlice from './slices/resetPasswordSlice';
import setPasswordSlice from './slices/setPasswordSlice';
import heathCheckSlice from './slices/heathCheckSlice';

const rootReducer = combineReducers({
  loginSlice,
  resetPasswordSlice,
  setPasswordSlice,
  heathCheckSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
