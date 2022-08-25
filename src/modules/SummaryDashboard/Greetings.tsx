import React from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';

const Greetings = () => {
  return (
    <>
      <Box sx={{ my: 2 }}>
        <Typography fontSize={22} fontWeight={400}>
          Good Morning, John!
        </Typography>
        <Typography fontSize={12} fontWeight={300} color={(theme) => theme.palette.grey[600]}>
          Here is your day looks like.
        </Typography>
      </Box>
      <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} textAlign="center" mt={3}>
        <Box pr={4}>
          <Typography sx={{ fontWeight: 500, fontSize: 36, lineHeight: 1 }}>4</Typography>
          <Typography sx={{ fontWeight: 300, fontSize: 12, color: '#717171' }}>Due Today</Typography>
        </Box>
        <Box pl={4}>
          <Typography sx={{ fontWeight: 500, fontSize: 36, lineHeight: 1 }}>20</Typography>
          <Typography sx={{ fontWeight: 300, fontSize: 12, color: '#717171' }}>Upcoming</Typography>
        </Box>
      </Stack>
    </>
  );
};

export default Greetings;
