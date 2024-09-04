import { Login } from "./routes/Login.tsx";
import { Admin } from "./routes/Admin.tsx";
import { Client } from "./routes/Client.tsx";
import { Home } from "./index.tsx";
import Contactos from "./routes/Contactos.tsx";
import LegislaçãoDocumentos from "./routes/LegislaçãoDocumentos.tsx";
import { SobreNos } from "./routes/sobreNos.tsx";
import Farmacovigilância from "./routes/Farmacovigilância.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";
import { createBrowserRouter } from "react-router-dom";
import { Inscricoes } from "./components/Inscricoes/index.tsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
              },
    {
    path: "/inscricao",
    element: <Inscricoes />,
  },
  {
    path: "Sobre-Nós",
    element: <SobreNos />,
  },
  {
    path: "Farmacovigilância",
    element: <Farmacovigilância />,
  },
  {
    path: "Legislação-Documentos",
    element: <LegislaçãoDocumentos />,
  },
  {
    path: "Contactos",
    element: <Contactos />,
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
]);
