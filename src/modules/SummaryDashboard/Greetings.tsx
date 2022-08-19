import React from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';

const Greetings = () => {
  return (
    <>
      <Box sx={{ my: 3 }}>
        <Typography sx={{ fontWeight: 600, fontSize: 24 }}> Good Morning, John!</Typography>
        <Typography sx={{ fontWeight: 400, fontSize: 14 }}>Here is your day looks like.</Typography>
      </Box>
      <Stack direction="row">
        <Box sx={{ pr: 2, textAlign: 'center' }}>
          <Typography sx={{ fontWeight: 600, fontSize: 40 }}>4</Typography>
          <Typography sx={{ fontWeight: 500, fontSize: 12, color: '#717171' }}>Due Today</Typography>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box sx={{ pl: 2, textAlign: 'center' }}>
          <Typography sx={{ fontWeight: 600, fontSize: 40 }}>20</Typography>
          <Typography sx={{ fontWeight: 500, fontSize: 12, color: '#717171' }}>Upcoming</Typography>
        </Box>
      </Stack>
    </>
  );
};

export default Greetings;
