import { Box, Card, Grid, Stack, styled } from '@mui/material';
import React, { FC } from 'react';
import moment from 'moment';
import { Icon } from '@iconify/react';
import { stages } from '../../utils/constants';
import Stepper from '../../components/Stepper';
import Typography from '../../components/Typography/Typography';
import Chip from '../../components/Chip/Chip';
import { ISummaryVehicle } from '../../types';
import image1 from '../../assets/images/image1.png';

type Props = {
  car: ISummaryVehicle;
  isActive: boolean;
};

const CarTaskItem: FC<Props> = ({ car, isActive }) => {
  const Image = styled('img')({
    height: 50,
    width: 120,
    objectFit: 'cover',
  });

  return (
    <Card
      elevation={0}
      variant="outlined"
      sx={{ ...(isActive && { border: (theme) => `2px solid ${theme.palette.primary.main}` }), px: 1, py: 0.5, my: 1 }}
    >
      <Grid container>
        <Grid item xs={12} md={6} lg={5}>
          <Stack direction="row" gap={2} alignItems="center" justifyContent="center">
            <Image src={car.imageUrl === 'N/A' ? image1 : car.imageUrl} alt={car.VIN} />
            <Box sx={{ flexGrow: 1 }}>
              <Typography weight={500} size={14}>
                {car.customerName}
              </Typography>
              <Typography weight={500} size={11} sx={{ color: (theme) => theme.palette.primary.main }}>
                {car.VIN}
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Stack alignItems="flex-start" justifyContent="center" sx={{ height: '100%' }}>
            <Stack direction="row">
              <Typography weight={500} size={12}>
                {car.currentStage}
              </Typography>
              <Stepper.StepperInline
                activeStep={stages.indexOf(car.currentStage)}
                steps={stages as unknown as string[]}
              />
            </Stack>
            <Stack direction="row" gap={1}>
              <Typography weight={400} size={11} noWrap>
                {car.currentCustomerstage}
              </Typography>
              <Chip text={car.vehicleStatus} />
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
          <Stack direction="row" alignItems="center" justifyContent="center" gap={0.5} sx={{ height: '100%' }}>
            <Typography weight={500} size={12} noWrap>
              {car.totalTasks} {car.totalTasks > 1 ? 'Tasks' : 'Task'}
            </Typography>
            <Icon icon="akar-icons:chevron-right" fontSize={12} />
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CarTaskItem;
