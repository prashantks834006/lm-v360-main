import React from 'react';
import { Box, Tab as MUITab, Tabs as MUITabs, TabsProps, TabProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const Tabs = styled(MUITabs)<TabsProps>(() => ({
  '& .MuiTabs': {
    color: 'blue',
  },
  '& .MuiTabs-scroller .MuiTabs-indicator': {
    backgroundColor: 'black',
  },
}));

const Tab = styled(MUITab)<TabProps>(({ theme }) => ({
  '&': {
    padding: theme.spacing(1, 1),
    fontSize: 12,
    color: 'blue',
  },
  '&.Mui-selected': {
    color: 'black',
    fontWeight: 'bold',
  },
}));

const ATabs: React.FC = () => {
  return (
    <Box>
      <Tabs value={0} disableTouchRipple disableRipple>
        <Tab label="Actions Required (2)" />
        <Tab label="Actions Completed (0)" />
      </Tabs>
    </Box>
  );
};

export default ATabs;
