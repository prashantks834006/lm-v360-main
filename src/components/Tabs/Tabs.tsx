import React, { useMemo } from 'react';
import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Divider, Stack, styled } from '@mui/material';
import { TabPanelProps, TabsProps } from './types';

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

const Tabs: React.FC<TabsProps> = ({ tabItems, orientation, ...other }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const isVerticalTabs = useMemo(() => orientation === 'vertical', [orientation]);
  const tabIndicatorProps = isVerticalTabs ? { style: { display: 'none' } } : {};

  const Tab = useMemo(
    () =>
      styled(MuiTab)(({ theme }) =>
        isVerticalTabs
          ? {
              padding: '5px 10px',
              textTransform: 'initial',
              color: theme.palette.primary.main,
              '&.Mui-selected': {
                backgroundColor: '#456BD91A',
                borderRadius: theme.shape.borderRadius,
                color: theme.palette.common.black,
              },
            }
          : {}
      ),
    [isVerticalTabs]
  );

  return (
    <Stack direction={orientation === 'vertical' ? 'row' : 'column'} sx={{ width: '100%' }} gap={1}>
      <Box>
        <MuiTabs
          value={value}
          onChange={handleChange}
          orientation={orientation}
          {...other}
          TabIndicatorProps={tabIndicatorProps}
        >
          {tabItems.map(({ label, icon }, index) => (
            <Tab key={label} label={label} icon={icon} {...a11yProps(index)} />
          ))}
        </MuiTabs>
      </Box>
      <Divider flexItem orientation={orientation} />
      <Box sx={{ p: 1 }}>
        {tabItems.map(({ content, label }, index) => (
          <TabPanel value={value} index={index} key={label}>
            {content}
          </TabPanel>
        ))}
      </Box>
    </Stack>
  );
};

export default Tabs;
