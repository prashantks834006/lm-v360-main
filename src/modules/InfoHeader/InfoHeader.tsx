import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { PATHS } from '../../utils/constants';
import Breadcrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import Label from '../../components/Label/Label';

const vin = 'DJ8474938304562';

const links = [
  { label: 'Dashboard', link: PATHS.dashboard },
  { label: vin, link: PATHS.vahicle(vin) },
];

const InfoHeader = () => {
  return (
    <Box sx={{ backgroundColor: (theme) => theme.palette.common.white, p: 1 }}>
      <Breadcrumbs links={links} />
      <Stack direction="row" gap={8} alignItems="center" justifyContent="center">
        <Typography variant="h5">Elsie Harper</Typography>
        <Box flexGrow={1} />
        <Label label="Vin" title={vin} />
        <Label label="Phone" title="415-672-0945" />
        <Label label="Email" title="--" />
        <Label label="Delivery scheduled" title="Sep 12, 2022, 4:00PM" />
        <Label label="Delivery Readiness" type="progress" progress={33} />
        <Label label="Customer Status" title="Collect information" />
      </Stack>
    </Box>
  );
};

export default InfoHeader;
