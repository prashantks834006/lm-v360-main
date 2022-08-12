import React from 'react';
import TasksList from '../modules/TasksList';
import SummaryDashboard from '../modules/SummaryDashboard';

const Dashboard = () => {
  return (
    <>
      <SummaryDashboard />
      <TasksList />
    </>
  );
};

export default Dashboard;
