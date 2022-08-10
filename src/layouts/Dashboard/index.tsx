import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default DashboardLayout;
