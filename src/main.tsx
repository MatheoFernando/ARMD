import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import { Login } from './routes/Login.tsx'
import { Admin } from './routes/Admin.tsx'
import { Client } from './routes/Client.tsx'
import { Home } from './routes/Home.tsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "login",
    element: <Login/>
  },
  {
    path: "admin",
    element: <Admin/>
  },
  {
    path: "client",
    element: <Client/>
  },
  


])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
