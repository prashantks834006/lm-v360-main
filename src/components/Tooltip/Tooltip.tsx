import React from 'react';
import { styled } from '@mui/material/styles';
import MuiTooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

const Tooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  transform: 'translateY(10px)',
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
    transform: 'translate3d(6px, 0px, 0px) !important',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    maxWidth: 220,
    marginBottom: '5px !important',
  },
}));

export default Tooltip;
