import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { ConfigProvider, theme as antdTheme } from 'antd';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './app/router/AppRouter';
import { i18n } from './i18n';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <I18nextProvider i18n={i18n}>
        <ConfigProvider
          theme={{
            algorithm: antdTheme.defaultAlgorithm,
            token: {
              colorPrimary: '#00A651',
              colorInfo: '#1A365D',
              borderRadius: 16,
              fontFamily: 'Inter, sans-serif'
            }
          }}
        >
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </ConfigProvider>
      </I18nextProvider>
    </HelmetProvider>
  </React.StrictMode>
);
