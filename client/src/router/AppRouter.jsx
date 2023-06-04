import React from 'react'
import { LandingPage } from "../views";
import { Route, Routes } from "react-router-dom";
import { ViewsRouter } from "./ViewsRouter";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<ViewsRouter />} />
      <Route path="/" exact element={<LandingPage />} />      
    </Routes>
  )
}
