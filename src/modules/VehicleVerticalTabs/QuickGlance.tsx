import { Box, Divider, Grid, Stack } from '@mui/material';
import React from 'react';
import Label from '../../pages/Vehicle/InfoHeader/Label';
import img from '../../assets/images/image1.png';
import Typography from '../../components/Typography/Typography';

const QuickGlance = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <img src={img} alt="car" style={{ width: '300px', display: 'block', objectFit: 'cover' }} />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Label label="Edition" title="Dream" />
        </Grid>
        <Grid item xs={6}>
          <Label label="Payment Method" title="Cash" />
        </Grid>
        <Grid item xs={6}>
          <Label label="Interior color" title="Santa Cruz" />
        </Grid>
        <Grid item xs={6}>
          <Label label="Exterior color" title="Quantum grey" />
        </Grid>
        <Grid item xs={6}>
          <Label label="Wheels" title={"21' Aero blade"} />
        </Grid>
        <Grid item xs={6}>
          <Label label="EV Ownership" title="First time" />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Stack>
            <Typography size={12} weight={500} sx={{ textTransform: 'uppercase' }}>
              team
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default QuickGlance;
