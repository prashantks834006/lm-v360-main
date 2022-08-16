import { Box, Card, Grid, Stack, styled } from '@mui/material';
import React, { FC, useMemo } from 'react';
import moment from 'moment';
import { Icon } from '@iconify/react';
import { stages } from '../../utils/mocks';
import Stepper from '../../components/Stepper/Stepper';
import Typography from '../../components/Typography/Typography';
import ICar from '../../types/cars';
import Label from '../../components/Label/Label';

type Props = {
  car: ICar;
  isActive: boolean;
};

const CarTaskItem: FC<Props> = ({ car, isActive }) => {
  const Image = styled('img')({
    height: 54,
    width: 127,
    objectFit: 'contain',
  });

  const activeStep = useMemo(() => stages.indexOf(car.stage), [car.stage]);

  return (
    <Card sx={{ ...(isActive && { border: '2px solid blue' }), p: 1, my: 1 }}>
      <Grid container>
        <Grid item xs={12} md={6} lg={5}>
          <Stack direction="row" gap={2} alignItems="center" justifyContent="center">
            <Image src={car.image} alt={car.id} />
            <Box sx={{ flexGrow: 1 }}>
              <Typography weight={500} size={16}>
                {car.customer}
              </Typography>
              <Typography weight={500} size={12} sx={{ color: 'blue' }}>
                {car.id}
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Stack alignItems="flex-start" justifyContent="center" sx={{ height: '100%' }}>
            <Stack direction="row">
              <Typography weight={500} size={14}>
                {car.stage}
              </Typography>
              <Stepper activeStep={activeStep} steps={stages} />
            </Stack>
            <Stack direction="row" gap={1}>
              <Typography weight={400} size={12}>
                {car.message}
              </Typography>
              <Label text={car.status} />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          {car.scheduledOn && (
            <Stack alignItems="center" justifyContent="center" sx={{ height: '100%' }}>
              <Typography weight={500} size={14}>
                Delivery Scheduled
              </Typography>
              <Typography weight={400} size={12}>
                {moment(car.scheduledOn).format('MMM DD, YYYY hh:mm a')}
              </Typography>
            </Stack>
          )}
        </Grid>
        <Grid item xs={12} md={6} lg={1}>
          <Stack direction="row" alignItems="center" justifyContent="center" gap={1} sx={{ height: '100%' }}>
            <Typography weight={500} size={14} noWrap>
              {car.tasks} {car.tasks > 1 ? 'Tasks' : 'Task'}
            </Typography>
            <Icon icon="akar-icons:chevron-right" />
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CarTaskItem;