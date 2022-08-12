import React, { FC } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// @mui
import { Box, CardProps, Typography } from '@mui/material';

import BaseOptionChart from '../../utils/BaseOptionChart';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  chartData: {
    label: string;
    weeks: number;
  }[];
  title: string;
}

const OffTrackChart: FC<Props> = ({ chartData, title }) => {
  const chartLabels = chartData.map((i) => i.label);

  const chartWeeksSeries = chartData.map((i) => i.weeks);

  const chartOptions: ApexOptions = {
    ...BaseOptionChart(),
    tooltip: {
      y: {
        formatter: (seriesName: number) => `${seriesName}`,
        title: {
          formatter: () => '',
        },
      },
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: chartLabels,
      labels: {
        style: {
          colors: '#000',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#000',
        },
      },
    },
    grid: {
      show: false,
    },
  };

  return (
    <Box dir="ltr">
      {title && <Typography sx={{ fontWeight: 500, fontSize: '32px' }}> {title} </Typography>}
      <ReactApexChart
        type="area"
        series={[{ data: chartWeeksSeries, name: 'Home Delivery', color: '#74b9ff' }]}
        options={chartOptions}
        height={180}
      />
    </Box>
  );
};

export default OffTrackChart;