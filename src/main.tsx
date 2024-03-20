import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import store from '@store/store.ts';
import { SnackbarProvider } from 'notistack';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider>
        <Auth0Provider
          domain={'dev-qntyny0zk0d0on58.us.auth0.com'}
          clientId={'vuJsH3uJk0O9xvzfJ5BIzdYPZ7cJjB1s'}
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <App />
        </Auth0Provider>
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
);
