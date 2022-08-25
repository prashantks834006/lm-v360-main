import React, { FC } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// @mui
import { Box } from '@mui/material';

import BaseOptionChart from '../../hooks/useChartsDefaultOptions';

// ----------------------------------------------------------------------

interface Props {
  chartData: {
    label: string;
    weeks: number;
  }[];
  title: React.ReactNode;
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
    title: {
      margin: 0,
    },
  };

  return (
    <Box dir="ltr">
      {title && <Box sx={{ fontWeight: 500, fontSize: '32px' }}> {title} </Box>}
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
