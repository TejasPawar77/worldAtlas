import React from 'react'
import {AppLayout} from './components/AppLayout'
import "./App.css"
import { HashRouter, RouterProvider} from 'react-router-dom'

import {Home} from './pages/Home'
import {About} from './pages/About'
import {Contact} from './pages/Contact'
import {Country} from './pages/Country'
import {ErrorPage} from './pages/ErrorPage'

const router = HashRouter([
  {
    path:"/",
    element: <AppLayout />,
    errorElement: <ErrorPage/>,
    children: [
        {
        path: "/",
        element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "country",
          element: <Country />,
        }
    ]
  }
])


const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;