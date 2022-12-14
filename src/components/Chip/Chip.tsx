import { Box, styled } from '@mui/material';
import React, { FC } from 'react';

type Props = {
  text: string;
  fontSize?: string;
  color?: string;
  borderColor?: string;
};

const ChipWrapper = styled(Box)(({ theme }) => ({
  border: '0.8px solid black',
  height: 'max-content',
  width: 'max-content',
  fontSize: 10,
  padding: '1px 8px',
  borderRadius: '3px',
  lineHeight: '10px',
  fontFamily: theme.typography.fontFamily,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
}));

const Chip: FC<Props> = ({ text, fontSize, color, borderColor }) => (
  <ChipWrapper fontSize={fontSize} color={color} borderColor={borderColor}>
    {text}
  </ChipWrapper>
);

export default Chip;
