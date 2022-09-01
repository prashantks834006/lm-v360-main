import React, { useId, useState, useCallback, MouseEvent, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Icon } from '@iconify/react';
import { Avatar, Divider, Stack, Typography } from '@mui/material';
import i18next from 'i18next';
import Badge from '../../components/Badge/Badge';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import NavSlidein from './NavSlideIn';
import NotificationMenu from './NotificationMenu';
import SearchBar from './Search';
import ProfileMenu from './ProfileMenu';
import LocalizationMenu from './LocalizationMenu';
import { ReactComponent as GlobeIcon } from '../../assets/icons/globe.svg';
import { ILanguage } from '../../types/language';
import getLanguages from '../../services/LanguageDataService';

const Header = () => {
  const [notificationMenuAnchorEl, setNotificationMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [localizationMenuAnchorEl, setLocalizationMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState('en');
  const [languages, setLanguages] = useState<ILanguage[]>([]);

  const handleNotificationMenuOpen = useCallback((event: MouseEvent<HTMLElement>) => {
    setNotificationMenuAnchorEl(event.currentTarget);
  }, []);

  const handleProfileMenuOpen = useCallback((event: MouseEvent<HTMLElement>) => {
    setProfileMenuAnchorEl(event.currentTarget);
  }, []);

  const handleLocalizationMenuOpen = useCallback((event: MouseEvent<HTMLElement>) => {
    setLocalizationMenuAnchorEl(event.currentTarget);
  }, []);

  const notificationMenuId = useId();
  const profileMenuId = useId();
  const localizationMenuId = useId();

  const handleMenuClose = useCallback(() => {
    setNotificationMenuAnchorEl(null);
  }, []);

  const handleProfileMenuClose = useCallback(() => {
    setProfileMenuAnchorEl(null);
  }, []);

  const handleLocalizationMenuClose = useCallback(() => {
    setLocalizationMenuAnchorEl(null);
  }, []);

  const handleSelectLanguage = useCallback((code: string) => {
    i18next.changeLanguage(code);
    setLanguage(code);
    const htmlElement = document.querySelector('html');
    const bodyElement = document.querySelector('body');
    if (htmlElement) {
      htmlElement.lang = code;
    }
    if (bodyElement) {
      if (code === 'ar') {
        bodyElement.dir = 'rtl';
      } else {
        bodyElement.dir = 'ltr';
      }
    }
    setLocalizationMenuAnchorEl(null);
  }, []);

  useEffect(() => {
    setLanguage(i18next.language);
  }, []);

  useEffect(() => {
    getLanguages().then((response) => setLanguages(response.languages));
  }, []);

  return (
    <>
      <NotificationMenu id={notificationMenuId} anchorEl={notificationMenuAnchorEl} handleMenuClose={handleMenuClose} />
      <ProfileMenu id={profileMenuId} anchorEl={profileMenuAnchorEl} handleMenuClose={handleProfileMenuClose} />
      <LocalizationMenu
        id={localizationMenuId}
        anchorEl={localizationMenuAnchorEl}
        handleMenuClose={handleLocalizationMenuClose}
        handleSelectLanguage={handleSelectLanguage}
        languages={languages}
      />
      <NavSlidein isOpen={isSideNavOpen} setIsOpen={setIsSideNavOpen} />
      <AppBar position="fixed" sx={{ backgroundColor: (theme) => theme.palette.grey[800], height: 55 }}>
        <Stack direction="row" height={55} alignItems="center" justifyContent="center" px={2}>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 3 }}
            onClick={() => setIsSideNavOpen((prev) => !prev)}
          >
            <Icon icon="cil:hamburger-menu" />
          </IconButton>
          <Logo />
          <Box sx={{ flexGrow: 1 }} />
          <SearchBar />
          <Box sx={{ flexGrow: 1 }} />
          <Stack
            direction="row"
            gap={1}
            divider={<Divider orientation="vertical" flexItem />}
            color={(theme) => theme.palette.grey[500]}
            alignItems="center"
          >
            <IconButton
              edge="end"
              aria-label="Notifications of current user"
              aria-controls={notificationMenuId}
              aria-haspopup="true"
              color="inherit"
              onClick={handleNotificationMenuOpen}
            >
              <Badge badgeContent={4} color="primary">
                <Icon icon="cil:bell" />
              </Badge>
            </IconButton>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="centr"
              gap={0.25}
              sx={{ cursor: 'pointer', fontSize: 12 }}
              onClick={handleLocalizationMenuOpen}
            >
              <GlobeIcon />
              <Typography fontSize={10} textTransform="uppercase">
                {language}
              </Typography>
              <Icon icon="bi:caret-down-fill" />
            </Stack>
            <Avatar
              sx={{
                width: 30,
                height: 30,
                fontSize: 12,
                color: (theme) => theme.palette.grey[700],
                cursor: 'pointer',
              }}
              aria-label="Notifications of current user"
              aria-controls={profileMenuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              JL
            </Avatar>
          </Stack>
        </Stack>
      </AppBar>
      <Box sx={{ height: 60 }} />
    </>
  );
};

export default Header;
