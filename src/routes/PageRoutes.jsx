import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import React from "react";
import Thali from "../components/Thali/Thali";
import Checkout from "../components/Checkout/Checkout";
import routes from "../routes/routes.json";

const PageRoutes = ()=>{

  return(
    <Routes>
      <Route path={routes.HOME} element={<Home/>}></Route>
      <Route path={routes.MENU} element={<Thali/>}></Route>
      <Route path={routes.CHECKOUT} element={<Checkout/>}></Route>
    </Routes>
  )
};

export default PageRoutes;