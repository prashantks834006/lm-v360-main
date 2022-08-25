import React, { FC } from 'react';
import { Grid } from '@mui/material';
import Label from '../../components/Label/Label';

export interface GridLabel {
  label: string;
  title: string;
}

type Props = {
  labels: GridLabel[];
};

const GridLabels: FC<Props> = ({ labels }) => {
  return (
    <>
      {labels.map(({ label, title }) => (
        <Grid item xs={6} key={title}>
          <Label label={label} title={title} />
        </Grid>
      ))}
    </>
  );
};

export default GridLabels;
