import React, { FC } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { Box, Typography } from '@mui/material';
import useChartsDefaultOptions from '../../hooks/useChartsDefaultOptions';

// ----------------------------------------------------------------------

interface Props {
  chartData: {
    label: string;
    onTrack: number;
    offTrack: number;
  }[];
  title: string;
}

// ----------------------------------------------------------------------

const OffTrackChart: FC<Props> = ({ chartData, title }) => {
  const chartLabels = chartData.map((i) => i.label);
  const defaultOptions = useChartsDefaultOptions();

  const chartOnTrackSeries = chartData.map((i) => i.onTrack);
  const chartOffTrackSeries = chartData.map((i) => i.offTrack);

  const chartOptions: ApexOptions = {
    ...defaultOptions,
    tooltip: {
      y: {
        formatter: (seriesName: number) => `${seriesName}`,
        title: {
          formatter: () => '',
        },
      },
      items: {
        display: 'flex',
      },
      marker: {
        show: true,
      },
      theme: 'dark',
      followCursor: true,
    },
    plotOptions: {
      bar: { horizontal: true, barHeight: '50%', borderRadius: 5 },
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
      {title && <Typography sx={{ fontWeight: 500, fontSize: '32px' }}> {title} </Typography>}
      <ReactApexChart
        type="bar"
        series={[
          { data: chartOffTrackSeries, name: 'Off Track', color: '#E04732' },
          { data: chartOnTrackSeries, name: 'On Track', color: '#588CFC' },
        ]}
        options={chartOptions}
        height={180}
      />
    </Box>
  );
};

export default OffTrackChart;
