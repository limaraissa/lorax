
import Home from './pages/Home'
import Personagens from './pages/Personagens'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sinopse from './pages/Sinopse'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path:"/personagens",
    element: <Personagens/>
  },
  {
    path:"/sinopse",
    element:<Sinopse/>
  }
])

 function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App