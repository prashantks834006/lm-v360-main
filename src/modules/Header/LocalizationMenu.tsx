import React, { FC } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

type Props = {
  anchorEl: null | HTMLElement;
  id: string;
  handleMenuClose: () => void;
  handleSelectLanguage: (code: string) => void;
};

const LocalizationMenu: FC<Props> = ({ id, anchorEl, handleMenuClose, handleSelectLanguage }) => {
  return (
    <Menu
      id={id}
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      <MenuItem onClick={() => handleSelectLanguage('en')}>English</MenuItem>
      <MenuItem onClick={() => handleSelectLanguage('de')}>Deutsch</MenuItem>
      <MenuItem onClick={() => handleSelectLanguage('ar')}>اللغة العربية</MenuItem>
    </Menu>
  );
};

export default LocalizationMenu;
