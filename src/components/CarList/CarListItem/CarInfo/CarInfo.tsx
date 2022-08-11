import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { ReactComponent as CarSvg } from './Car.svg';

interface IProps {
  name: string;
  model: string;
}

const CarInfo: React.FC<IProps> = ({ name, model }) => {
  return (
    <Stack direction="row" gap={0.5} width="28%">
      <Box>
        <CarSvg />
      </Box>
      <Stack direction="column">
        <Typography variant="subtitle1" fontWeight={500}>
          {name}
        </Typography>
        <Typography variant="caption" fontWeight={500} color="blue">
          {model}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default CarInfo;
