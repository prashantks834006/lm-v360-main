import React from 'react';
import { Box, Tab as MUITab, Tabs as MUITabs, TabsProps, TabProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const Tabs = styled(MUITabs)<TabsProps>(() => ({
  '& .MuiTabs': {
    color: 'blue',
  },
  '& .MuiTabs-scroller .MuiTabs-indicator': {
    backgroundColor: 'black',
    border: 4,
  },
  '& .MuiTabs-flexContainer': {
    gap: '24px',
  },
}));

const Tab = styled(MUITab)<TabProps>(({ theme }) => ({
  '&': {
    padding: theme.spacing(0, 0),
    textTransform: 'none',
    fontSize: 14,
    fontWeight: '500',
    color: 'blue',
  },
  '&.Mui-selected': {
    color: 'black',
  },
}));

interface IProps {
  tabs: string[];
  selectedTab?: number;
  setselectedTab?: any;
}

const ATabs: React.FC<IProps> = ({ tabs, selectedTab, setselectedTab }) => {
  const handleTabSelect = (index: number) => {
    if (setselectedTab) setselectedTab(index);
  };
  return (
    <Box>
      <Tabs value={selectedTab ?? 0} disableRipple>
        {tabs.map((tab, index) => (
          <Tab label={tab} onClick={() => handleTabSelect(index)} />
        ))}
      </Tabs>
    </Box>
  );
};

export default ATabs;
