import React from 'react';
import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';
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
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const Tabs: React.FC<TabsProps> = ({ tabItems, ...other }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <MuiTabs value={value} onChange={handleChange} {...other}>
          {tabItems.map(({ label }, index) => (
            <MuiTab key={label} label={label} {...a11yProps(index)} disableFocusRipple disableRipple />
          ))}
        </MuiTabs>
      </Box>
      {tabItems.map(({ content, label }, index) => (
        <TabPanel value={value} index={index} key={label}>
          {content}
        </TabPanel>
      ))}
    </Box>
  );
};

export default Tabs;
