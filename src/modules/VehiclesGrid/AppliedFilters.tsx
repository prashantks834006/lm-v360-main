import React from 'react';
import { Button, Stack, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { AgGridReact } from 'ag-grid-react';
import { IVehiclesData } from '../../types/vehicle';

interface IProps {
  filterModel: { [key: string]: any };
  gridRef?: React.RefObject<AgGridReact<IVehiclesData>>;
}

const AppliedFilters: React.FC<IProps> = ({ filterModel, gridRef }) => {
  const removeFilter = (filter: string) => {
    if (gridRef?.current?.api.setFilterModel) {
      const temp = { ...filterModel };
      delete temp[filter];
      gridRef?.current?.api.setFilterModel(temp);
    }
  };
  const clearAll = () => {
    if (gridRef?.current?.api.setFilterModel) gridRef?.current?.api.setFilterModel({});
  };
  return (
    <Stack
      direction="row"
      display="flex"
      justifyContent="space-between"
      py={1.25}
      sx={{ borderWidth: '1px 0px', borderStyle: 'solid', borderColor: '#E7E7E4' }}
      alignItems="center"
    >
      <Stack direction="row" gap={2} height="fit-content" alignItems="center">
        <Typography variant="subtitle2" lineHeight="120%" height="fit-content">
          Applied Filters
        </Typography>
        {Object.keys(filterModel).map((filter) => (
          <Stack
            direction="row"
            gap={1}
            sx={{ padding: '5px 5px 5px 8px', background: 'rgba(69, 107, 217, 0.1)', borderRadius: '3px' }}
          >
            <Typography variant="caption" fontWeight={500} lineHeight="120%" height="fit-content">
              {filter}
            </Typography>
            <Typography variant="caption" fontWeight={500} lineHeight="120%" height="fit-content">
              |
            </Typography>
            <Typography variant="caption" lineHeight="120%" height="fit-content">
              {filterModel[filter].values.join(', ')}
            </Typography>
            <IconButton onClick={() => removeFilter(filter)} sx={{ fontSize: 14, lineHeight: '100%', height: 14 }}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </Stack>
        ))}
      </Stack>
      <Stack direction="row" alignItems="center" gap={1.25} height="fit-content">
        <Button
          variant="text"
          disableRipple
          sx={{ textTransform: 'none', fontSize: '14px', padding: '0px', lineHeight: '120%', height: 'fit-content' }}
        >
          Save Filter
        </Button>
        <Typography variant="caption" fontWeight={500} lineHeight="120%" height="fit-content">
          |
        </Typography>
        <Button
          onClick={clearAll}
          variant="text"
          disableRipple
          sx={{
            textTransform: 'none',
            fontSize: '14px',
            padding: '0px',
            lineHeight: '120%',
            minWidth: 'unset',
            height: 'fit-content',
          }}
        >
          Clear All
        </Button>
      </Stack>
    </Stack>
  );
};

export default AppliedFilters;
