import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import AppLayout from './components/AppLayout'


function App() {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <AppLayout />,
      children : [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/projects",
          element: <Projects />
        },
        {
          path: "/skills",
          element: <Skills />
        },
        {
          path: "achievements",
          element: <Achievements />
        }
      ]
    }

  ]);

  return (
     <RouterProvider router={router}/>
  )
}

export default App
