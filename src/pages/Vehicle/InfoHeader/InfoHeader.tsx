import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Breadcrumbs from '../../../components/BreadCrumbs/BreadCrumbs';
import Label from './Label';

const links = [
  { label: 'Dashboard', link: '/' },
  { label: 'DJ8474938304562', link: 'DJ8474938304562' },
];

const InfoHeader = () => {
  return (
    <Box sx={{ backgroundColor: (theme) => theme.palette.common.white, p: 1 }}>
      <Breadcrumbs links={links} />
      <Grid container>
        <Grid display="flex" item lg={4} xs={4} md={4} alignItems="flex-end">
          <Typography variant="h5">Elsie Harper</Typography>
        </Grid>
        <Grid container item lg={8} xs={8} md={8} justifyContent="space-evenly">
          <Grid item>
            <Label label="Vin" title="DJ8474938304562" />
          </Grid>
          <Grid item>
            <Label label="Phone" title="415-672-0945" />
          </Grid>
          <Grid item>
            <Label label="Email" title="--" />
          </Grid>
          <Grid item>
            <Label label="Delivery scheduled" title="Sep 12, 2022, 4:00PM" />
          </Grid>
          <Grid item>
            <Label label="Delivery Readiness" type="progress" progress={33} />
          </Grid>
          <Grid item>
            <Label label="Customer Status" title="Collect information" />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InfoHeader;
