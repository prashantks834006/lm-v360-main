import React, { FC } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// @mui
import { Box, Typography } from '@mui/material';

import BaseOptionChart from '../../hooks/useChartsDefaultOptions';

// ----------------------------------------------------------------------

interface Props {
  chartData: {
    label: string;
    homeDelivery: number;
    pickup: number;
  }[];
  title: string;
}

const NextWeekDeliveriesChart: FC<Props> = ({ chartData, title }) => {
  const chartLabels = chartData.map((i) => i.label);

  const chartHomeDeliverySeries = chartData.map((i) => i.homeDelivery);
  const chartPickupSeries = chartData.map((i) => i.pickup);

  const chartOptions: ApexOptions = {
    ...BaseOptionChart(),
    tooltip: {
      enabled: false,
    },
    plotOptions: {
      bar: { horizontal: false, borderRadius: 8, columnWidth: '30%' },
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
      {title && <Typography sx={{ fontWeight: 400, fontSize: '32px', px: 2 }}> {title} </Typography>}
      <ReactApexChart
        type="bar"
        series={[
          { data: chartHomeDeliverySeries, name: 'Home Delivery', color: '#4B96D8' },
          { data: chartPickupSeries, name: 'Pickup', color: '#2649AD' },
        ]}
        options={chartOptions}
        height={150}
      />
    </Box>
  );
};

export default NextWeekDeliveriesChart;
