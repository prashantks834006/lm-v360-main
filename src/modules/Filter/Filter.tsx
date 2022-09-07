import React from 'react';
import { Stack, Typography, Box, Button, IconButton, Checkbox, Menu } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import Close from '@mui/icons-material/Close';
import Accordion from '../../components/Accordian/Accordian';
import IFilterGroup from '../../types/FilterGroup';

interface IProps {
  filters: IFilterGroup[];
}

const Filter: React.FC<IProps> = ({ filters }) => {
  const [expanded, setExpanded] = React.useState<number[]>(filters.map((data) => data.id));
  const handleChange = (panelId: number) => () => {
    if (expanded.includes(panelId)) setExpanded(expanded.filter((data) => data !== panelId));
    else setExpanded(expanded.concat(panelId));
  };
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const filterDetails = filters.map((filterGroup) => (
    <Accordion
      key={filterGroup.id}
      header={filterGroup.type}
      expanded={expanded.includes(filterGroup.id)}
      onChange={handleChange(filterGroup.id)}
    >
      {filterGroup.filters.map((filter) => (
        <Stack direction="row" alignItems="center" key={filter}>
          <Checkbox />
          <Typography variant="body2">{filter}</Typography>
        </Stack>
      ))}
    </Accordion>
  ));

  return (
    <>
      <Button
        disableRipple
        variant="text"
        size="small"
        startIcon={<FilterListIcon />}
        onClick={handleClick}
        sx={{ textTransform: 'none' }}
      >
        Filter
      </Button>
      <Menu
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box display="flex" justifyContent="space-between" width={300} p={1}>
          <Stack direction="row" alignItems="center" gap={1.5}>
            <FilterListIcon />
            <Typography variant="subtitle1" fontWeight={500}>
              Apply Filters
            </Typography>
          </Stack>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </Box>
        {filterDetails}
        <Box display="flex" alignItems="flex-end" flexDirection="column">
          <Button variant="outlined" size="small">
            Clear all
          </Button>
        </Box>
      </Menu>
    </>
  );
};

export default Filter;
