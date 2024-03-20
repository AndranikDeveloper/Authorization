import Login from '@components/login';
import SetPassword from '@components/set-password';
import Root from '@components/root';
import { Route, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom';
import ResetPassword from '@components/reset-password';

export const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route element={<Root />}>
      <Route index element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/set-password" element={<SetPassword />} />
    </Route>,
  ),
);
