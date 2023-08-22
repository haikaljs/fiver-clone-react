import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import "./index.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const App = () => {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
