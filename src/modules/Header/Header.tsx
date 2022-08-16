import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { Icon } from '@iconify/react';
import { Avatar, Stack } from '@mui/material';
import Logo from '../../assets/images/logo.png';
import NavSlidein from './NavSlideIn';
import NotificationMenu from './NotificationMenu';
import SearchBar from './Search';

const Image = styled('img')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '80px',
  },
}));

const Header = () => {
  const [notificationMenuAnchorEl, setNotificationMenuAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isSideNavOpen, setIsSideNavOpen] = React.useState<boolean>(false);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationMenuAnchorEl(event.currentTarget);
  };

  const menuId = React.useId();

  const notificationMenuId = React.useId();
  const handleMenuClose = () => {
    setNotificationMenuAnchorEl(null);
  };

  return (
    <>
      <NotificationMenu id={notificationMenuId} anchorEl={notificationMenuAnchorEl} handleMenuClose={handleMenuClose} />
      <NavSlidein isOpen={isSideNavOpen} setIsOpen={setIsSideNavOpen} />
      <AppBar position="static" sx={{ backgroundColor: (theme) => theme.palette.grey[800] }}>
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => setIsSideNavOpen((prev) => !prev)}
          >
            <Icon icon="ci:hamburger" />
          </IconButton>
          <Image src={Logo} alt="LUCID" />
          <Box sx={{ flexGrow: 1 }} />
          <SearchBar />
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row" gap={2}>
            <IconButton
              size="small"
              edge="end"
              aria-label="Notifications of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
              onClick={handleMobileMenuOpen}
            >
              <Badge badgeContent={4} color="primary">
                <Icon icon="clarity:notification-line" />
              </Badge>
            </IconButton>
            <Avatar sx={{ width: 30, height: 30, fontSize: 12, color: (theme) => theme.palette.grey[700] }}>JE</Avatar>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
