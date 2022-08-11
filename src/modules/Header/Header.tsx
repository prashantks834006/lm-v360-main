import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import { Icon } from '@iconify/react';
import { Avatar, Stack } from '@mui/material';
import Logo from '../../assets/images/logo.png';
import NavSlidein from './NavSlideIn';
import NotificationMenu from './NotificationMenu';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  right: 0,
  top: 0,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 0, 1, 1),
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('md')]: {
      width: '400px',
    },
  },
}));

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
          <Search>
            <StyledInputBase
              placeholder="Search by VIN no, vehicle name, customer name..."
              inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIconWrapper>
              <Icon icon="ant-design:search-outlined" />
            </SearchIconWrapper>
          </Search>
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
