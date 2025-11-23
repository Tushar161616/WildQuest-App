import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";




import Home from "./pages/Home";
import Tracking from "./pages/Tracking";
import Safari from "./pages/Safari";
import Services from "./pages/Services";
import Contact from "./pages/Contact";


const router = createBrowserRouter([

  {
    path : "/",
    element : <AppLayout />,
    children : [
      {
        path : "/",
        element : <Home />,
      },

      {
        path : "tracking",
        element : <Tracking />,
      },

      {
        path : "safari",
        element : <Safari />,
      },

      {
        path : "services",
        element : <Services />,
      },

      {
        path : "contact",
        element : <Contact />,
      },


    ],
  }


]);


function App() {
 

  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;