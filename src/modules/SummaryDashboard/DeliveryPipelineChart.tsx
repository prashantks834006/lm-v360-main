import { Box, Stack, Typography } from '@mui/material';
import React, { FC } from 'react';
import Tooltip from '../../components/Tooltip/Tooltip';

type BarProps = {
  offTrack: number;
  onTrack: number;
};

const offTrackColor = '#E04732';
const onTrackColor = '#4B96D8';

const DeliveryPipelineBar: FC<BarProps> = ({ offTrack, onTrack }) => {
  return (
    <Tooltip
      title={
        <Box>
          <Typography fontSize={10}> On Track - 50 </Typography>
          <Typography fontSize={10}> On Track - 8 </Typography>
        </Box>
      }
      placement="top-start"
    >
      <Box width="100%" position="relative" height="8px">
        <Box
          width={`${offTrack}%`}
          bgcolor={offTrackColor}
          height="100%"
          position="absolute"
          left="0"
          zIndex={3}
          borderRadius="5px"
        />
        <Box
          width={`${offTrack + 1.2}%`}
          bgcolor="white"
          height="100%"
          position="absolute"
          left="0"
          zIndex={2}
          borderRadius="3px"
        />
        <Box
          width={`${onTrack}%`}
          bgcolor={onTrackColor}
          height="100%"
          position="absolute"
          left="0"
          zIndex={1}
          borderRadius="5px"
        />
      </Box>
    </Tooltip>
  );
};

const DeliveryPipelineChart = () => {
  const data = [
    {
      name: 'Reservation',
      offTrack: 13,
      onTrack: 83,
    },
    {
      name: 'Order',
      offTrack: 33,
      onTrack: 81,
    },
    {
      name: 'Production',
      offTrack: 30,
      onTrack: 100,
    },
    {
      name: 'Transit',
      offTrack: 6.66,
      onTrack: 83,
    },
    {
      name: 'Inspection',
      offTrack: 3.33,
      onTrack: 50,
    },
    {
      name: 'Delivery',
      offTrack: 3.33,
      onTrack: 82,
    },
  ];

  return (
    <>
      <Typography sx={{ fontWeight: 400, fontSize: '28px' }}> 54 customers </Typography>
      {data.map((row) => (
        <Stack direction="row" alignItems="center" justifyContent="center" key={row.name}>
          <Typography
            variant="caption"
            width="40%"
            fontSize={11}
            fontWeight={400}
            color={(theme) => theme.palette.grey[600]}
          >
            {row.name}
          </Typography>
          <DeliveryPipelineBar offTrack={row.offTrack} onTrack={row.onTrack} />
        </Stack>
      ))}

      <Stack direction="row" alignItems="center" justifyContent="center">
        <Box width="40%" />
        <Box width="100%">
          <Stack direction="row" alignItems="center" justifyContent="space-between" width="100%">
            {[0, 10, 20, 30, 40, 50, 60].map((i) => (
              <Typography fontSize={11} fontWeight={400} color={(theme) => theme.palette.grey[600]}>
                {i}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="center" mt={2} gap={2}>
        <Stack direction="row" alignItems="center" justifyContent="center" gap={1}>
          <Box borderRadius="50%" height="8px" width="8px" bgcolor={offTrackColor} />
          <Typography fontSize={11} fontWeight={400}>
            Off Track
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="center" gap={1}>
          <Box borderRadius="50%" height="8px" width="8px" bgcolor={onTrackColor} />
          <Typography fontSize={11} fontWeight={400}>
            On Track
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default DeliveryPipelineChart;
