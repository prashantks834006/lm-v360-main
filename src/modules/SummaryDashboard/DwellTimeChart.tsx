import React, { FC } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// @mui
import { Box, useTheme } from '@mui/material';

import useChartsDefaultOptions from '../../hooks/useChartsDefaultOptions';

// ----------------------------------------------------------------------

interface Props {
  chartData: {
    label: string;
    weeks: number;
  }[];
  title: React.ReactNode;
}

const DwellTimeChart: FC<Props> = ({ chartData, title }) => {
  const chartLabels = chartData.map((i) => i.label);
  const defaultOptions = useChartsDefaultOptions();
  const theme = useTheme();

  const chartWeeksSeries = chartData.map((i) => i.weeks);

  const chartOptions: ApexOptions = {
    ...defaultOptions,
    tooltip: {
      enabled: false,
    },
    fill: {
      type: 'solid',
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
    annotations: {
      yaxis: [
        {
          y: 13,
          borderColor: '#aaa',
          borderWidth: 0.5,
          strokeDashArray: 0,
          label: {
            borderColor: '#fff',
            style: {
              background: '#fff',
              color: '#000',
              fontSize: '10px',
              fontWeight: 200,
              fontFamily: theme.typography.fontFamily,
              padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              },
            },
            text: 'Current - 2 week',
            position: 'left',
            offsetX: 80,
          },
        },
        {
          y: 8,
          borderColor: '#aaa',
          borderWidth: 0.5,
          strokeDashArray: 3,
          label: {
            borderColor: '#fff',
            style: {
              background: '#fff',
              color: '#000',
              fontSize: '10px',
              fontWeight: 200,
              fontFamily: theme.typography.fontFamily,
              padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              },
            },
            text: 'Average - 1 week',
            position: 'left',
            offsetX: 80,
          },
        },
      ],
    },
  };

  return (
    <Box dir="ltr">
      {title && <Box sx={{ fontWeight: 400, fontSize: '32px', px: 2 }}> {title} </Box>}
      <ReactApexChart
        type="area"
        series={[
          { data: chartWeeksSeries, type: 'area', name: 'Dwell time for scheduling delivery', color: '#C8DCEE' },
        ]}
        options={chartOptions}
        height={150}
      />
    </Box>
  );
};

export default DwellTimeChart;
