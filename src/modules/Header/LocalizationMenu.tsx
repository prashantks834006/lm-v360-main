import React, { FC } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { ILanguage } from '../../types/language';

type Props = {
  anchorEl: null | HTMLElement;
  id: string;
  handleMenuClose: () => void;
  handleSelectLanguage: (code: string) => void;
  languages: ILanguage[];
};

const LocalizationMenu: FC<Props> = ({ id, anchorEl, handleMenuClose, handleSelectLanguage, languages }) => {
  return (
    <Menu
      id={id}
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
      MenuListProps={{
        'aria-labelledby': 'Localisation',
      }}
    >
      {languages.map((language: ILanguage) => {
        const value = language.langCode.split('-')[0].trim();
        return (
          <MenuItem key={language.langCode} onClick={() => handleSelectLanguage(value)} value={value}>
            {language.LangDescription}
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default LocalizationMenu;
