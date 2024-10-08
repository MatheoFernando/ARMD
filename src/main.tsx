/// <reference no-default-lib="true"/>
/* eslint-disable */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {  RouterProvider } from 'react-router-dom';
import { AuthProvider } from './components/contextsApi/AuthContext.tsx';
import { router } from './routers.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
