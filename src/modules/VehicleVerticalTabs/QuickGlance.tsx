import { Box, Divider, Grid, Stack } from '@mui/material';
import React from 'react';
import Link from '../../components/Link/Link';

import img from '../../assets/images/image1.png';
import Typography from '../../components/Typography/Typography';
import Team from './TeamList';
import GridLabels from './GridLabels';
import { labels, team } from './VehicleVerticalTabs.mock';

const QuickGlance = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <img src={img} alt="car" style={{ width: '300px', display: 'block', objectFit: 'cover' }} />
      <Grid container spacing={2}>
        <GridLabels labels={labels} />
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography size={12} weight={500} sx={{ textTransform: 'uppercase' }}>
              team
            </Typography>
            <Link to="/">see all members</Link>
          </Stack>
          <Team team={team} />
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Typography size={12} weight={500} sx={{ textTransform: 'uppercase' }} textAlign="center" mt={3} mb={1}>
              Reference Links
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-evenly"
              divider={<Divider orientation="vertical" />}
            >
              <Link to="/">Salesforce</Link>
              <Link to="/">SAP</Link>
              <Link to="/">Lucid Garage</Link>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default QuickGlance;
