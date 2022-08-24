import React, { FC, useId, useCallback, useState, MouseEvent, useEffect } from 'react';
import { Stack, Typography, Menu, MenuItem } from '@mui/material';
import { Icon } from '@iconify/react';
import { getLanguages } from '../../services/LanguageDataService';
import { ILanguage } from '../../types/language';
import { ReactComponent as GlobeIcon } from '../../assets/icons/globe.svg';

const LocalizationMenu: FC = () => {
  const [langCode, setLangCode] = useState('en-us');
  const [languages, setLanguages] = useState<ILanguage[]>([]);
  const [anchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = useCallback((event: MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget);
  }, []);

  const handleMenuClose = useCallback(() => {
    setMenuAnchorEl(null);
  }, []);

  const handleMenuSelect = useCallback((newLangCode: string) => {
    setMenuAnchorEl(null);
    setLangCode(newLangCode);
  }, []);

  useEffect(() => {
    getLanguages().then((data) => {
      setLangCode(data.defaultLang);
      setLanguages(data.languages);
    });
  }, []);

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="centr"
        gap={0.25}
        sx={{ cursor: 'pointer', fontSize: 12 }}
        onClick={handleMenuOpen}
      >
        <GlobeIcon />
        <Typography fontSize={12}>{langCode.toUpperCase()}</Typography>
        <Icon icon="bi:caret-down-fill" />
      </Stack>
      <Menu
        id={useId()}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {languages.map((language: ILanguage) => (
          <MenuItem key={language.langCode} onClick={() => handleMenuSelect(language.langCode)}>
            {language.LangDescription}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LocalizationMenu;
