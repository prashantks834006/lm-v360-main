import { Box, styled } from '@mui/material';
import React, { FC } from 'react';

type Props = {
  text: string;
};

const ChipWrapper = styled(Box)(() => ({
  border: '0.8px solid black',
  width: 'max-content',
  fontSize: 10,
  padding: '3px',
  borderRadius: '3px',
  lineHeight: '10px',
}));

const Chip: FC<Props> = ({ text }) => <ChipWrapper>{text}</ChipWrapper>;

export default Chip;
