import React, { useEffect, Fragment, useState } from 'react';
import { useAutocomplete, Typography, Divider, Stack, Box } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { autocompleteClasses, createFilterOptions } from '@mui/material/Autocomplete';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import useThrottle from '../../hooks/useThrottle';
import { getVehicleSearch } from '../../services/vehicles';
import Link from '../../components/Link/Link';
import { PATHS } from '../../utils/constants';
import Chip from '../../components/Chip/Chip';
import { Vehicle } from '../../types';

const filterOptions = createFilterOptions<Vehicle>({
  matchFrom: 'any',
  stringify: (option) => option.VIN + option.reservationId + option.trim,
});

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
  width: '50vw',
  height: '80vh',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  [theme.breakpoints.up('sm')]: {
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
  [theme.breakpoints.up('sm')]: {
    width: '400px',
  },
}));

const matchOptions = {
  insideWords: true,
  findAllOccurrences: true,
  requireMatchAll: true,
};

const SearchBar = () => {
  const id = React.useId();
  const [options, setOptions] = useState<Vehicle[]>([]);

  const { getRootProps, getInputProps, getListboxProps, getOptionProps, groupedOptions, focused, inputValue } =
    useAutocomplete<Vehicle>({
      id,
      options,
      getOptionLabel: (option) => option?.VIN || option.reservationId,
      filterOptions,
    });

  const { t } = useTranslation();
  const throttledInputValue = useThrottle(inputValue, 2000);

  useEffect(() => {
    getVehicleSearch(throttledInputValue).then((data) => setOptions(data.data));
  }, [throttledInputValue]);

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
          {(groupedOptions as Vehicle[]).map((option, index) => {
            const VIN = option.VIN || option.reservationId;
            const matches = match(VIN, inputValue, matchOptions);
            const parts = parse(VIN, matches);

            const secondaryText = `${option.trim} ordered by stephene nelson`;
            const secondaryMatches = match(secondaryText, inputValue, matchOptions);
            const secondaryParts = parse(secondaryText, secondaryMatches);

            return (
              <Fragment key={option._id}>
                <li {...getOptionProps({ option, index })}>
                  <Link to={PATHS.vahicle(option._id)} sx={{ color: (theme) => theme.palette.common.black }}>
                    <Stack direction="row">
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography sx={{ fontSize: 12, fontWeight: 400 }}>
                          {parts.map((part, i) => {
                            const key = `${i}-${part}`;
                            return (
                              <span
                                key={key}
                                style={{
                                  fontWeight: part.highlight ? 700 : 400,
                                }}
                              >
                                {part.text}
                              </span>
                            );
                          })}
                        </Typography>
                        <Typography sx={{ fontSize: 10 }}>
                          {secondaryParts.map((part, i) => {
                            const key = `${i}-${part}`;
                            return (
                              <span
                                key={key}
                                style={{
                                  fontWeight: part.highlight ? 700 : 400,
                                }}
                              >
                                {part.text}
                              </span>
                            );
                          })}
                        </Typography>
                      </Box>
                      <div>
                        <Chip text={option.currentStatus} />
                      </div>
                    </Stack>
                  </Link>
                </li>
                <Divider />
              </Fragment>
            );
          })}
        </Listbox>
      ) : null}
    </div>
  );
};

export default SearchBar;
