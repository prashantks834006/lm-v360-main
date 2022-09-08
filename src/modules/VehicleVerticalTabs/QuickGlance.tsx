import { Box, Divider, Grid, Skeleton, Stack } from '@mui/material';
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
  }, [lucidId]);
  if (!metadata || !data) {
    return (
      <Box display="flex" flexDirection="column" gap={1}>
        <Skeleton animation="wave" height={170} width={300} sx={{ transform: 'none' }} />
        {Array(3)
          .fill(0)
          .map(() => (
            <Stack direction="row">
              <Box width={200}>
                <Skeleton animation="wave" height={25} width={100} />
                <Skeleton animation="wave" height={25} width={100} />
              </Box>
              <Box>
                <Skeleton animation="wave" height={25} width={100} />
                <Skeleton animation="wave" height={25} width={100} />
              </Box>
            </Stack>
          ))}
        <Box>
          <Skeleton animation="wave" height={25} width={100} />
          <Skeleton animation="wave" height={25} width={100} />
        </Box>
        <Box display="flex" flexDirection="column" gap={0.5}>
          <Stack direction="row" display="flex" justifyContent="space-between" alignItems="center">
            <Skeleton animation="wave" height={30} width={50} />
            <Skeleton animation="wave" height={20} width={100} />
          </Stack>
          {Array(5)
            .fill(0)
            .map(() => (
              <Stack direction="row" gap={1}>
                <Skeleton animation="wave" height={50} width={50} variant="rounded" sx={{ borderRadius: '50%' }} />
                <Box>
                  <Skeleton animation="wave" height={30} width={100} />
                  <Skeleton animation="wave" height={15} width={150} />
                </Box>
              </Stack>
            ))}
        </Box>
        <Box display="flex" justifyContent="center">
          <Skeleton animation="wave" height={30} width={150} />
        </Box>
        <Box display="flex" justifyContent="center" gap={5}>
          <Skeleton animation="wave" height={15} width={60} />
          <Skeleton animation="wave" height={15} width={30} />
          <Skeleton animation="wave" height={15} width={80} />
        </Box>
      </Box>
    );
  }
  const vehicleLabels = metadata.rows[1].rows.map((row: any) => {
    return { label: row.propertyName, title: data[row.property] };
  });
  const img = data[metadata.rows[0].property];
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
