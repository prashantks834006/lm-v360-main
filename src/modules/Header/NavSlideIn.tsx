import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Icon } from '@iconify/react';
import { PATHS, FEEDBACK_URL } from '../../utils/constants';
import Link from '../../components/Link/Link';
import ExternalLink from '../../components/ExternalLink/ExternalLink';

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
      path: FEEDBACK_URL,
      icon: 'ant-design:search-outlined',
      text: 'Report and Feedback',
      external: true,
    },
    {
      path: PATHS.help,
      icon: 'ic:baseline-help-outline',
      text: 'Help',
    },
  ];

  return (
    <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
      <Box sx={{ width: 200, p: 3 }} role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
        <List>
          {navItems.map(({ text, icon, path, external }) => {
            const listItem = (
              <ListItem disablePadding>
                <ListItemButton sx={{ borderRadius: 2 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <Icon icon={icon} fontSize={16} />
                  </ListItemIcon>
                  <ListItemText primary={text} primaryTypographyProps={{ fontSize: 12 }} />
                </ListItemButton>
              </ListItem>
            );

            if (!external) {
              return (
                <Link to={path} key={text}>
                  {listItem}
                </Link>
              );
            }
            return (
              <ExternalLink href={path} target="_blank" rel="noreferrer">
                {listItem}
              </ExternalLink>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};

export default NavigationDrawer;
