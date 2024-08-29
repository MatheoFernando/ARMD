/// <reference no-default-lib="true"/>
/* eslint-disable */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './routes/Login.tsx';
import { Admin } from './routes/Admin.tsx';
import { Client } from './routes/Client.tsx';
import { Home } from './routes/Home.tsx';
import Contactos from './routes/Contactos.tsx';
import LegislaçãoDocumentos from './routes/LegislaçãoDocumentos.tsx';
import { SobreNos } from './routes/sobreNos.tsx';
import Farmacovigilância from './routes/Farmacovigilância.tsx';
import PrivateRoute from './components/PrivateRoute.tsx';
import { AuthProvider } from './components/contetxApi.tsx/AuthContext.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "Sobre-Nós",
    element: <SobreNos />
  },
  {
    path: "Farmacovigilância",
    element: <Farmacovigilância />
  },
  {
    path: "Legislação-Documentos",
    element: <LegislaçãoDocumentos />
  },
  {
    path: "Contactos",
    element: <Contactos />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "admin",
    element: <PrivateRoute role="admin"><Admin /></PrivateRoute>,
  },
  {
    path: "client",
    element: <PrivateRoute role="client"><Client /></PrivateRoute>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
