import { Box, Divider, Grid, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Link from '../../components/Link/Link';

import Typography from '../../components/Typography/Typography';
import Team from './TeamList';
import GridLabels from './GridLabels';
import { team } from './VehicleVerticalTabs.mock';
import { getVehicleDetails, getVehicleDetailsMetaData } from '../../services/vehicles';

const QuickGlance = () => {
  const location = useLocation();
  const temp = location.pathname.split('/');
  const lucidId = temp[temp.length - 1];
  const [metadata, setMetadata] = useState<any>();
  const [data, setData] = useState<any>();
  useEffect(() => {
    getVehicleDetailsMetaData().then((response) => setMetadata(response.selectedTab));
  }, []);
  useEffect(() => {
    getVehicleDetails(null, null, lucidId).then((response) => setData(response));
  }, []);
  if (!metadata || !data) return <>Loading...</>;
  const vehicleLabels = metadata.rows[1].rows.map((row: any) => {
    return { label: row.propertyName, title: data[row.property] };
  });
  const img = data[metadata.rows[0].property];
  debugger;
  return (
    <Box sx={{ width: '100%' }}>
      <img src={img} alt="car" style={{ width: '300px', display: 'block', objectFit: 'cover' }} />
      <Grid container spacing={2}>
        <GridLabels labels={vehicleLabels} />
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
