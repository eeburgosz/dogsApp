import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { CreatePage, DescriptionPage, HomePage } from "../views";
import { NavBar } from "../components";

export const ViewsRouter = () => {
   return (
      <>
         <NavBar />
         <Routes>
            <Route path="/home" exact element={<HomePage />} />
            <Route path="/description/:id" element={<DescriptionPage />} />
            <Route path="/create" exact element={<CreatePage />} />
            <Route path="/*" exact element={<Navigate to="/home" />} />
         </Routes>
      </>
   );
};
