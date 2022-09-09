import { Box, Divider, Grid, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { META_DATA_MODULES, META_DATA_SUB_MODULES } from '../../utils/constants';
import Link from '../../components/Link/Link';

import Typography from '../../components/Typography/Typography';
import Team from './TeamList';
import GridLabels from './GridLabels';
import { team } from './VehicleVerticalTabs.mock';
import { getVehicleDetails } from '../../services/vehicles';
import QuickGlanceLoader from './QuickGlanceLoader';
import useMetaData from '../../hooks/useMetaData';

const QuickGlance = () => {
  const { lucidId } = useParams();
  const [data, setData] = useState<any>();
  const metaData = useMetaData(META_DATA_MODULES.v360Page, META_DATA_SUB_MODULES.vehicleDetailsTabs);

  useEffect(() => {
    if (lucidId) {
      getVehicleDetails(lucidId).then((response) => setData(response));
    }
  }, [lucidId]);

  if (!metaData || !data) return <QuickGlanceLoader />;

  const vehicleLabels =
    metaData?.selectedTab.rows?.[1]?.rows?.map((row: any) => {
      return { label: row.propertyName, title: data[row.property] };
    }) || [];

  const img = data[metaData?.selectedTab?.rows?.[0]?.property];

  return (
    <Box sx={{ width: '100%' }}>
      <img src={img} alt="car" style={{ width: '100%', display: 'block', objectFit: 'cover', minHeight: 200 }} />
      <Grid container spacing={2} mt={1}>
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
