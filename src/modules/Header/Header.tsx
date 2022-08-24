import React, { useId, useState, useCallback, MouseEvent } from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { Icon } from '@iconify/react';
import { Avatar, Divider, Stack } from '@mui/material';
import Logo from '../../assets/images/logo.png';
import NavSlidein from './NavSlideIn';
import NotificationMenu from './NotificationMenu';
import SearchBar from './Search';
import ProfileMenu from './ProfileMenu';
import LocalizationMenu from './LocalizationMenu';

const Image = styled('img')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '80px',
  },
}));

const Header = () => {
  const [notificationMenuAnchorEl, setNotificationMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(false);

  const handleNotificationMenuOpen = useCallback((event: MouseEvent<HTMLElement>) => {
    setNotificationMenuAnchorEl(event.currentTarget);
  }, []);

  const handleProfileMenuOpen = useCallback((event: MouseEvent<HTMLElement>) => {
    setProfileMenuAnchorEl(event.currentTarget);
  }, []);

  const notificationMenuId = useId();
  const profileMenuId = useId();

  const handleMenuClose = useCallback(() => {
    setNotificationMenuAnchorEl(null);
  }, []);

  const handleProfileMenuClose = useCallback(() => {
    setProfileMenuAnchorEl(null);
  }, []);

  return (
    <>
      <NotificationMenu id={notificationMenuId} anchorEl={notificationMenuAnchorEl} handleMenuClose={handleMenuClose} />
      <ProfileMenu id={profileMenuId} anchorEl={profileMenuAnchorEl} handleMenuClose={handleProfileMenuClose} />
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
          <Stack
            direction="row"
            gap={2}
            divider={<Divider orientation="vertical" flexItem />}
            color={(theme) => theme.palette.grey[500]}
          >
            <IconButton
              size="small"
              edge="end"
              aria-label="Notifications of current user"
              aria-controls={notificationMenuId}
              aria-haspopup="true"
              color="inherit"
              onClick={handleNotificationMenuOpen}
            >
              <Badge badgeContent={4} color="primary">
                <Icon icon="clarity:notification-line" />
              </Badge>
            </IconButton>
            <LocalizationMenu />
            <Avatar
              sx={{ width: 30, height: 30, fontSize: 12, color: (theme) => theme.palette.grey[700], cursor: 'pointer' }}
              aria-label="Notifications of current user"
              aria-controls={profileMenuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              JE
            </Avatar>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
