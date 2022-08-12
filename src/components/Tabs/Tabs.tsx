import React from 'react';
import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TabsProps } from './types';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const Tabs: React.FC<TabsProps> = ({ tabItems }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

interface IProps {
  tabs: string[];
  selectedTab?: number;
  setselectedTab?: (selectedTab: number) => void;
}

const ATabs: React.FC<IProps> = ({ tabs, selectedTab, setselectedTab }) => {
  const handleTabSelect = (index: number) => {
    if (setselectedTab) setselectedTab(index);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <MuiTabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {tabItems.map(({ label }) => (
            <MuiTab label={label} {...a11yProps(0)} />
          ))}
        </MuiTabs>
      </Box>
      {tabItems.map(({ content }, index) => (
        <TabPanel value={value} index={index}>
          {content}
        </TabPanel>
      ))}
    </Box>
  );
};

export default Tabs;
