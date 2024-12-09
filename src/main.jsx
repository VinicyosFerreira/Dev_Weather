import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DataContextProvider } from './context/DataContext.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

const future = {
  future: {
    v7_relativeSplatPath: true, 
    v7_fetcherPersist: true,   
    v7_normalizeFormMethod: true, 
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true, 
  }
}

const routes = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children : [
        {
          path: "/" ,
          element: <Home/>,
        },
        {
          path: "/about",
          element: <About/>
        }
      
      ]
    }
    
], future)


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <DataContextProvider>
          <RouterProvider router={routes} future={{v7_startTransition: true}}>
            <App />
         </RouterProvider>
      </DataContextProvider>
  </StrictMode>,
)
