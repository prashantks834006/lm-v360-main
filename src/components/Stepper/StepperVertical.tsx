import React from 'react';
import MUIStepper from '@mui/material/Stepper';
import {
  Step,
  StepConnector,
  stepConnectorClasses,
  StepContent,
  StepIconProps,
  StepLabel,
  styled,
  Typography,
} from '@mui/material';
import { Check } from '@mui/icons-material';

interface IProps {
  steps: Array<string> | number;
  activeStep: number;
}

const StepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(({ ownerState }) => ({
  display: 'flex',
  alignItems: 'center',
  width: 16,
  height: 16,
  top: '-20px',
  borderRadius: '50%',
  ...(ownerState.active && {
    boxSizing: 'border-box',
    border: '4px solid black',
    width: 18,
    height: 18,
  }),
  '& .StepIcon-completedIcon': {
    color: 'white',
    zIndex: 1,
    border: '1px solid black',
    background: 'black',
    borderRadius: '50%',
    width: 16,
    height: 16,
  },
  '& .StepIcon-circle': {
    backgroundColor: 'white',
    border: '1px solid grey',
    width: 16,
    borderRadius: '50%',
    height: 14,
    ...(ownerState.active && {
      border: 'none',
      width: 0,
      height: 0,
    }),
  },
  '& .line': {
    top: '30%',
    left: 8,
    height: '100%',
    position: 'absolute',
    borderLeft: '2px solid black',
  },
}));

const StepIcon: React.FC<StepIconProps> = ({ active, className, completed }) => {
  return (
    <StepIconRoot ownerState={{ active }} className={className}>
      {completed ? <Check className="StepIcon-completedIcon" /> : <div className="StepIcon-circle" />}
    </StepIconRoot>
  );
};

const Connector = styled(StepConnector)(() => ({
  marginLeft: 8,
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 7,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: 'black',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: 'black',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: 'black',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const StepperVertical: React.FC<IProps> = ({ steps, activeStep }) => {
  return (
    <MUIStepper activeStep={activeStep} connector={<Connector />} orientation="vertical">
      {Array.isArray(steps) &&
        steps.map((step) => (
          <Step key={step} expanded>
            <StepLabel StepIconComponent={StepIcon} sx={{ position: 'relative', alignItems: 'flex-start' }}>
              <Typography variant="body2" fontWeight={600}>
                {step}
              </Typography>
            </StepLabel>
            <StepContent sx={{ ml: 1, borderColor: 'black', borderTopWidth: 3 }}>
              <Typography variant="caption" component="div">
                July 10, 2022 - Actual arrival date
              </Typography>
              <Typography variant="caption" component="div">
                July 10, 2022 - Actual arrival date
              </Typography>
            </StepContent>
          </Step>
        ))}
    </MUIStepper>
  );
};

export default StepperVertical;
