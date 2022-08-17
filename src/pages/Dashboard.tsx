import React from 'react';
import TasksList from '../modules/TasksList';
import SummaryDashboard from '../modules/SummaryDashboard';
import Page from '../components/Page/Page';

const Dashboard = () => {
  return (
    <Page sx={{ p: 1 }}>
      <SummaryDashboard />
      <TasksList />
    </Page>
  );
};

export default Dashboard;
