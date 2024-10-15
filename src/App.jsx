import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Country from "./Pages/Country";
import AppLayout from "./Components/Layout/AppLayout";
import ErrorPage from "./Pages/ErrorPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/contact", element: <Contact /> },
        { path: "/about", element: <About /> },
        { path: "/country", element: <Country /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
