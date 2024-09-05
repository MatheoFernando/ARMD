import { Login } from "./routes/Login.tsx";
import { Admin } from "./routes/Admin.tsx";
import { Client } from "./routes/Client.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";
import { createBrowserRouter } from "react-router-dom";
import { Inscricoes } from "./components/Inscricoes/index.tsx";
import { HomePage } from "./components/Homepages/index.tsx";
import { App } from "./index.tsx";
import { Erropage } from "./routes/erropage.tsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Erropage/>,
    children: [
    {
    path: "/",
    element: <HomePage />,
  },
{
    path: "/inscricao",
    element: <Inscricoes />,
  },

  {
    path: "login",
    element: <Login />,
  },
  {
    path: "admin",
    element: (
      <PrivateRoute role="admin">
        <Admin />
      </PrivateRoute>
    ),
  },
  {
    path: "client",
    element: (
      <PrivateRoute role="client">
        <Client />
      </PrivateRoute>
    ),
  },
    ]
              },
    
]);
