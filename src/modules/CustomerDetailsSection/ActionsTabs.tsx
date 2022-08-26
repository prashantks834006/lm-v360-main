import React from 'react';
import { Box } from '@mui/material';
import ActionRequired from '../ActionRequired/ActionRequired';
import actions from '../../mock/Actions';
import Tabs from '../../components/Tabs';
import ActionCompleted from '../ActionCompleted/ActionCompleted';

const ActionsTabs = () => {
  const tabItems = [
    {
      label: 'Actions Required (2)',
      content: (
        <Box gap={1.25} display="flex" flexDirection="column" mt={2}>
          {actions.map((action) => !action.isComplete && <ActionRequired key={action.id} {...action} />)}
        </Box>
      ),
    },
    {
      label: 'Upcoming Tasks (0)',
      content: (
        <Box gap={1.25} display="flex" flexDirection="column" mt={2}>
          {actions.map((action) => !action.isComplete && <ActionRequired key={action.id} {...action} />)}
        </Box>
      ),
    },
    {
      label: 'Actions Completed (1)',
      content: (
        <Box gap={1.25} display="flex" flexDirection="column" mt={2}>
          {actions.map((action) => action.isComplete && <ActionCompleted key={action.id} {...action} />)}
        </Box>
      ),
    },
  ];
  return <Tabs tabItems={tabItems} />;
};

export default ActionsTabs;
