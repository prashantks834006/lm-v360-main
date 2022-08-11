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
    onTrack: number;
    offTrack: number;
  }[];
  title: string;
}

const OffTrackChart: FC<Props> = ({ chartData, title }) => {
  const chartLabels = chartData.map((i) => i.label);

  const chartOnTrackSeries = chartData.map((i) => i.onTrack);
  const chartOffTrackSeries = chartData.map((i) => i.offTrack);

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
    plotOptions: {
      bar: { barHeight: '38%', borderRadius: 1 },
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

  if (chartOptions.chart) {
    chartOptions.chart.stacked = true;
  }

  return (
    <Box dir="ltr">
      {title && (
        <Typography variant="h6" sx={{ fontWeight: 500 }}>
          {' '}
          {title}{' '}
        </Typography>
      )}
      <ReactApexChart
        type="bar"
        series={[
          { data: chartOnTrackSeries, name: 'On Track', color: 'red' },
          { data: chartOffTrackSeries, name: 'Off Track', color: '#ddd' },
        ]}
        options={chartOptions}
        height={180}
      />
    </Box>
  );
};

export default OffTrackChart;
