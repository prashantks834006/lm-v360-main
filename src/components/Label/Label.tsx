import { Box, styled } from '@mui/material';
import React, { FC } from 'react';

type Props = {
  text: string;
};

const LabelWrapper = styled(Box)(() => ({
  border: '0.8px solid black',
  width: 'max-content',
  fontSize: 10,
  padding: '3px',
  borderRadius: '3px',
}));

const Label: FC<Props> = ({ text }) => <LabelWrapper>{text}</LabelWrapper>;

export default Label;
