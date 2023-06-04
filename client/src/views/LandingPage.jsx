import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "primereact/button";

export const LandingPage = () => {
  return (
    <>
      <Link to="/home">
        <Button label="Home" style={{ width: '100px' }} />
      </Link>
    </>
  );
};
