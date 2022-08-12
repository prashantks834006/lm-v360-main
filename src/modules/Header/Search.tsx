import * as React from 'react';
import useAutocomplete from '@mui/material/useAutocomplete';
import { alpha, styled } from '@mui/material/styles';
import { autocompleteClasses } from '@mui/material/Autocomplete';
import { Icon } from '@iconify/react';
import { Typography, Divider, Stack, Box } from '@mui/material';
import Label from '../../components/Label/Label';
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
  maxHeight: 300,
  color: theme.palette.common.black,
  marginLeft: 30,
  width: '80vw',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  [theme.breakpoints.up('md')]: {
    width: '400px',
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

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
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

const StyledInputBase = styled('input')(({ theme }) => ({
  backgroundColor: 'transparent',
  outline: 'none',
  border: 'none',
  padding: '10px',
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

  return (
    <div>
      <div {...getRootProps()}>
        <Search>
          <StyledInputBase placeholder="Search by VIN no, vehicle name, customer name..." {...getInputProps()} />
          <SearchIconWrapper>
            {focused ? (
              <Box sx={{ cursor: 'pointer' }}>
                <Icon icon="clarity:window-close-line" fontSize={26} />
              </Box>
            ) : (
              <Icon icon="ant-design:search-outlined" />
            )}
          </SearchIconWrapper>
        </Search>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {(groupedOptions as typeof vehicles).map((option, index) => (
            <>
              <li {...getOptionProps({ option, index })}>
                <Stack direction="row">
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography sx={{ fontSize: 12, fontWeight: 'bold' }}>{option.id}</Typography>
                    <Typography sx={{ fontSize: 10 }}>
                      {option.vehicle} ordered by {option.customer}
                    </Typography>
                  </Box>
                  <div>
                    <Label text={option.status} />
                  </div>
                </Stack>
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
