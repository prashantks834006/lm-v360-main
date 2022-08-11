import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Icon } from '@iconify/react';
import { PATHS } from '../../utils/constants';
import Link from '../../components/Link/Link';

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavigationDrawer: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setIsOpen((prev) => !prev);
  };

  const navItems = [
    {
      path: PATHS.dashboard,
      icon: 'humbleicons:dashboard',
      text: 'Dashboard',
    },
    {
      path: PATHS.vehicles,
      icon: 'ant-design:search-outlined',
      text: 'Vehicles Search',
    },
    {
      path: PATHS.help,
      icon: 'ic:baseline-help-outline',
      text: 'Help',
    },
  ];

  return (
    <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
      <Box sx={{ width: 250, p: 3 }} role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
        <List>
          {navItems.map(({ text, icon, path }) => (
            <Link to={path}>
              <ListItem key={text} disablePadding>
                <ListItemButton sx={{ borderRadius: 2 }}>
                  <ListItemIcon>
                    <Icon icon={icon} />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default NavigationDrawer;
