import React, { FC } from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';

import { Icon } from '@iconify/react';
import TextField from '../../components/TextField/TextField';
import Button from '../../components/Button/Button';

type Props = {
  onSearch: (searchText: string) => void;
  onToggleToolPanelClick: (panelId: 'columns' | 'filters') => void;
};

const GridTopActions: FC<Props> = ({ onSearch, onToggleToolPanelClick }) => {
  return (
    <Stack direction="row" p={1} alignItems="center" gap={2}>
      <Typography variant="h6" component="h2">
        All Vehicles
      </Typography>
      <Box flexGrow={1} />
      <Box>
        <Button size="small" endIcon={<Icon icon="akar-icons:chevron-down" />}>
          My saved fitlers
        </Button>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box width={300}>
        <TextField
          placeholder="Search..."
          sx={{ width: 1000, maxWidth: '100%' }}
          fullWidth
          endIcon={<Icon icon="ant-design:search-outlined" />}
          onChange={(e) => onSearch(e.target.value)}
        />
      </Box>
      <Box>
        <Button
          size="small"
          startIcon={<Icon icon="fluent:column-triple-20-regular" />}
          onClick={() => onToggleToolPanelClick('columns')}
        >
          Manage Columns
        </Button>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box>
        <Button
          size="small"
          startIcon={<Icon icon="cil:list-filter" />}
          onClick={() => onToggleToolPanelClick('filters')}
        >
          Filters
        </Button>
      </Box>
    </Stack>
  );
};

export default GridTopActions;
