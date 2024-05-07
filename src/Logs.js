import Login from "./Components/auth/login";
import Register from "./Components/auth/Register";
import Home from "./Components/home";
import Header from "./Components/header/Header";
import { AuthProvider } from "./contexts/authContext";
import { BrowserRouter, useRoutes } from "react-router-dom";
import React, { useState } from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Navbar from "./Navbar";


function Logs() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/Register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    

   
    
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <>
   
    <AuthProvider>
      {routesElement}
      <Routes>
    
     
        </Routes>
      
    </AuthProvider>
    </>
   
  );
}

export default Logs;
