import * as React from 'react';
import useAutocomplete from '@mui/material/useAutocomplete';
import { alpha, styled } from '@mui/material/styles';
import { autocompleteClasses } from '@mui/material/Autocomplete';
import { Icon } from '@iconify/react';
import { Typography, Divider, Stack, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Link from '../../components/Link/Link';
import { PATHS } from '../../utils/constants';
import Chip from '../../components/Chip/Chip';
import {
  generateRandomName,
  generateRandomString,
  generateRandomVehicle,
  generateRandomStatus,
} from '../../utils/string';

const Listbox = styled('ul')(({ theme }) => ({
  margin: 0,
  padding: 10,
  zIndex: 1,
  position: 'absolute',
  listStyle: 'none',
  backgroundColor: theme.palette.background.paper,
  overflow: 'auto',
  maxHeight: 800,
  color: theme.palette.common.black,
  marginLeft: 30,
  width: '80vw',
  height: '80vh',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  [theme.breakpoints.up('md')]: {
    width: '420px',
  },
  [`& li`]: {
    padding: '10px',
    borderRadius: theme.shape.borderRadius,
  },
  [`& li.${autocompleteClasses.focused}`]: {
    backgroundColor: theme.palette.grey[200],
    cursor: 'pointer',
  },
  '& li:active': {
    backgroundColor: theme.palette.grey[300],
  },
}));

const vehicles = [
  ...[...new Array(20)].map(() => ({
    id: generateRandomString(15),
    vehicle: generateRandomVehicle(),
    customer: generateRandomName(),
    status: generateRandomStatus(),
  })),
];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  height: 38,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.55),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.65),
  },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1.5),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  right: 0,
  top: 0,
}));

const StyledInputBase = styled('input')(({ theme }) => ({
  backgroundColor: 'transparent',
  outline: 'none',
  border: 'none',
  padding: '12px',
  paddingRight: theme.spacing(5),
  color: theme.palette.common.white,
  width: '50px',
  [theme.breakpoints.up('md')]: {
    width: '400px',
  },
}));

const SearchBar = () => {
  const { getRootProps, getInputProps, getListboxProps, getOptionProps, groupedOptions, focused } = useAutocomplete({
    id: 'vehicles-search',
    options: vehicles,
    getOptionLabel: (option) => option.id,
  });

  const { t } = useTranslation();

  return (
    <div>
      <div {...getRootProps()}>
        <Search>
          <StyledInputBase placeholder={`${t('header_search')}`} {...getInputProps()} />
          <SearchIconWrapper>
            {focused ? (
              <Icon icon="clarity:window-close-line" fontSize={26} color="gray" />
            ) : (
              <Icon icon="bytesize:search" color="gray" />
            )}
          </SearchIconWrapper>
        </Search>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {(groupedOptions as typeof vehicles).map((option, index) => (
            <>
              <li {...getOptionProps({ option, index })} key={option.id}>
                <Link to={PATHS.vahicle(option.id)} sx={{ color: (theme) => theme.palette.common.black }}>
                  <Stack direction="row">
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography sx={{ fontSize: 12, fontWeight: 400 }}>{option.id}</Typography>
                      <Typography sx={{ fontSize: 10 }}>
                        {option.vehicle} ordered by {option.customer}
                      </Typography>
                    </Box>
                    <div>
                      <Chip text={option.status} />
                    </div>
                  </Stack>
                </Link>
              </li>
              <Divider />
            </>
          ))}
        </Listbox>
      ) : null}
    </div>
  );
};

export default SearchBar;
