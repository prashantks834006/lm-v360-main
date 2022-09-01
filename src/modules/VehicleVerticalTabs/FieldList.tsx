import { Box, Divider, Stack } from '@mui/material';
import React, { FC } from 'react';
import Typography from '../../components/Typography/Typography';

type ListItemProps = {
  field: string;
  value: string;
};

const ListItem: FC<ListItemProps> = ({ field, value }) => (
  <Stack direction="row" alignItems="center" justifyContent="space-between" gap={4} my={1.5}>
    <Typography
      weight={400}
      size={13}
      sx={{ color: (theme) => theme.palette.grey['500'], textTransform: 'capitalize' }}
    >
      {field}
    </Typography>
    <Typography weight={500} size={14} maxWidth="50%">
      {value}
    </Typography>
  </Stack>
);

export interface Field {
  field: string;
  value: string;
}

type Props = {
  fields: Field[];
};

const FieldList: FC<Props> = ({ fields }) => (
  <Box my={2}>
    {fields.map((field) => (
      <React.Fragment key={field.field}>
        <ListItem key={field.field} {...field} />
        <Divider sx={{ borderStyle: 'dashed' }} />
      </React.Fragment>
    ))}
  </Box>
);

export default FieldList;
