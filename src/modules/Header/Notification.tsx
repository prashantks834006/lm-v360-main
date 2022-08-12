import React, { FC } from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { generateRandomString, getRandomNotification } from '../../utils/string';

type Props = {
  isRead?: boolean;
};

const Notification: FC<Props> = ({ isRead = false }) => {
  return (
    <>
      <Stack sx={{ py: 1, px: 2, cursor: 'pointer' }} direction="row">
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="body2"> {getRandomNotification()} </Typography>
          <Typography variant="caption" sx={{ color: (theme) => theme.palette.primary.main }}>
            {generateRandomString(15)}
          </Typography>
          <Typography sx={{ fontSize: 10, color: (theme) => theme.palette.grey[500] }}>
            {' '}
            Yesterday as 11:42 PM{' '}
          </Typography>
        </Box>
        {!isRead && (
          <Box
            sx={{
              width: '10px',
              height: '10px',
              backgroundColor: (theme) => theme.palette.primary.main,
              borderRadius: '50%',
            }}
          />
        )}
      </Stack>
      <Divider />
    </>
  );
};

export default Notification;
