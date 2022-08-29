import React, { useMemo } from 'react';
import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Divider, Stack, styled } from '@mui/material';
import { TabPanelProps, TabsProps } from './types';

const CustomTabs = styled(MuiTabs)(() => ({
  '& .MuiTabs-indicator': {
    backgroundColor: 'black',
    height: '5px',
  },
}));

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`} {...other}>
      {value === index && children}
    </div>
  );
};

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

interface IProps extends TabsProps {
  sibling?: React.ReactNode;
}

const Tabs: React.FC<IProps> = ({ tabItems, orientation, sibling, ...other }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const isVerticalTabs = useMemo(() => orientation === 'vertical', [orientation]);
  const tabIndicatorProps = isVerticalTabs ? { style: { display: 'none' } } : {};

  const Tab = useMemo(
    () =>
      styled(MuiTab)(({ theme }) => ({
        ...(isVerticalTabs
          ? {
              padding: '0px',
              fontSize: 10,
              fontWeight: 500,
              minWidth: 80,
              minHeight: 70,
              '&.Mui-selected': {
                backgroundColor: '#456BD91A',
                borderRadius: theme.shape.borderRadius,
                color: theme.palette.common.black,
              },
            }
          : {
              padding: '0px 5px',
              fontSize: 12,
              '&.Mui-selected': {
                color: theme.palette.common.black,
              },
            }),
        textTransform: 'initial',
        color: theme.palette.primary.main,
      })),
    [isVerticalTabs]
  );

  return (
    <Stack direction={isVerticalTabs ? 'row' : 'column'} sx={{ width: '100%' }} gap={isVerticalTabs ? 1 : 0}>
      <Box display="flex" justifyContent="space-between" alignItems={isVerticalTabs ? 'flex-start' : 'flex-end'}>
        <CustomTabs
          value={value}
          onChange={handleChange}
          orientation={orientation}
          {...other}
          TabIndicatorProps={tabIndicatorProps}
        >
          {tabItems.map(({ label, icon }, index) => (
            <Tab key={label} label={label} icon={icon} {...a11yProps(index)} />
          ))}
        </CustomTabs>
        {sibling}
      </Box>
      <Divider flexItem orientation={orientation} />
      <Box sx={{ flexGrow: 1 }}>
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
