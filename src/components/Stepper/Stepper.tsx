import React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import MUIStepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';

const Connector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 4px)',
    right: 'calc(50% + 4px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.common.black,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.common.black,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 1.5,
    borderRadius: 1,
  },
}));

const StepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  zIndex: 1,

  alignItems: 'center',
  ...(ownerState.active && {
    '& :before': {
      content: "''",
      position: 'absolute',
      width: 12,
      height: 12,
      borderRadius: '50%',
      backgroundColor: theme.palette.common.black,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: -1,
    },
  }),
  '& .custom-completed-icon': {
    backgroundColor: theme.palette.common.black,
    width: 5,
    height: 5,
    borderRadius: '50%',
  },
  '& .custom-step-icon': {
    width: 5,
    height: 5,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

const StepIcon = (props: StepIconProps) => {
  const { active, completed, className } = props;

  return (
    <StepIconRoot ownerState={{ active }} className={className}>
      {completed ? <div className="custom-completed-icon" /> : <div className="custom-step-icon" />}
    </StepIconRoot>
  );
};

type Props = {
  activeStep: number;
  steps: string[];
};

const Stepper: React.FC<Props> = ({ steps, activeStep }) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
      <MUIStepper alternativeLabel activeStep={activeStep} connector={<Connector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={StepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </MUIStepper>
    </Stack>
  );
};

export default Stepper;
