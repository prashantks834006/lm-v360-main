import { Box, Divider, Menu, MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material';
import React, { FC, useCallback, useId, useState } from 'react';
import { generateRandomString } from '../../utils/string';
import Tabs from '../../components/Tabs';
import { notificationsRange } from '../../utils/constants';
import Notification from './Notification';

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

  const tabItems = [
    {
      label: 'Unread',
      content: (
        <Box sx={{ maxHeight: 300, overflow: 'auto' }}>
          {[...new Array(5)]
            .map(() => generateRandomString(3))
            .map((i) => (
              <Notification key={i} />
            ))}
        </Box>
      ),
    },
    {
      label: 'read',
      content: (
        <Box sx={{ maxHeight: 300, overflow: 'auto' }}>
          {[...new Array(2)]
            .map(() => generateRandomString(3))
            .map((i) => (
              <Notification isRead key={i} />
            ))}
        </Box>
      ),
    },
  ];

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
              {notificationsRange.map((notification) => (
                <MenuItem value={notification} sx={{ fontSize: 10 }} key={notification}>
                  {notification}
                </MenuItem>
              ))}
            </Select>
          </Stack>
          <Typography variant="caption" sx={{ cursor: 'pointer' }} color="primary">
            Mark all as read
          </Typography>
        </Stack>
      </Box>
      <Divider />
      <Tabs tabItems={tabItems} />
    </Menu>
  );
};

export default NotificationMenu;
