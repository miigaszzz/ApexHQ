import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

// Importar Layout e Páginas
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Pilotos from './pages/Pilotos'
import Classificacoes from './pages/Classificacoes'
import Calendario from './pages/Calendario'

// Configuração das Rotas
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, // O nosso "esqueleto" com navbar
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/calendario',
        element: <Calendario />,
      },
      {
        path: '/pilotos',
        element: <Pilotos />,
      },
      {
        path: '/classificacoes',
        element: <Classificacoes />,
      }
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
