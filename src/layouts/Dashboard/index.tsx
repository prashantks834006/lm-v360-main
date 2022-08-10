import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <>
      <nav> Header </nav>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
