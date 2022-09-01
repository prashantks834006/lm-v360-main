import { InputBase, InputBaseProps, Stack, styled } from '@mui/material';
import React, { FC, ReactNode } from 'react';

type Props = {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  height?: string;
} & InputBaseProps;

const Input = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',

  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 2),
    width: '100%',
  },
}));

const InputWrapper = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  borderRadius: theme.shape.borderRadius,
}));

const TextField: FC<Props> = ({ startIcon, endIcon, height, ...other }) => {
  return (
    <InputWrapper direction="row" alignItems="center" justifyContent="center" height={height}>
      {startIcon && (
        <Stack alignItems="center" justifyContent="center" p={1}>
          {startIcon}
        </Stack>
      )}
      <Input {...other} />
      {endIcon && (
        <Stack alignItems="center" justifyContent="center" p={1}>
          {endIcon}
        </Stack>
      )}
    </InputWrapper>
  );
};

export default TextField;
