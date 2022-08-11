import { Box, Divider, Menu, MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material';
import React, { FC, useCallback, useId, useState } from 'react';

type Props = {
  anchorEl: null | HTMLElement;
  id: string;
  handleMenuClose: () => void;
};

const NotificationMenu: FC<Props> = ({ id, anchorEl, handleMenuClose }) => {
  const [range, setRange] = useState('Last 3 days');

  const selectId = useId();

  const handleRangeChange = useCallback((e: SelectChangeEvent) => {
    setRange(e.target.value);
  }, []);

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={id}
      keepMounted
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      <Box sx={{ p: 1, maxWidth: 500, width: '80vw' }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack direction="row" gap={1} alignItems="center">
            <Typography>Notifications</Typography>
            <Select
              size="small"
              variant="outlined"
              id={selectId}
              value={range}
              onChange={handleRangeChange}
              label=""
              sx={{ fontSize: 10 }}
            >
              <MenuItem value="Last 3 days" sx={{ fontSize: 10 }}>
                All
              </MenuItem>
              <MenuItem value="Last 3 days" sx={{ fontSize: 10 }}>
                Today
              </MenuItem>
              <MenuItem value="Last 3 days" sx={{ fontSize: 10 }}>
                Last 3 days
              </MenuItem>
              <MenuItem value="Last 3 days" sx={{ fontSize: 10 }}>
                This Week
              </MenuItem>
            </Select>
          </Stack>
          <Typography variant="caption" sx={{ cursor: 'pointer' }} color="primary">
            Mark all as read
          </Typography>
        </Stack>
      </Box>
      <Divider />
    </Menu>
  );
};

export default NotificationMenu;
