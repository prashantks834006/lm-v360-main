import React from 'react';
import MUIStepper from '@mui/material/Stepper';
import {
  colors,
  Step,
  StepConnector,
  stepConnectorClasses,
  StepIconProps,
  StepLabel,
  styled,
  Typography,
} from '@mui/material';
import { Check } from '@mui/icons-material';
import _ from 'lodash';

interface IProps {
  steps: Array<string> | number;
  activeStep: number;
  orientation?: 'horizontal' | 'vertical';
}

const StepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(({ ownerState }) => ({
  display: 'flex',
  alignItems: 'center',
  width: 16,
  height: 16,
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
}));

const StepIcon: React.FC<StepIconProps> = ({ active, className, completed }) => {
  return (
    <StepIconRoot ownerState={{ active }} className={className}>
      {completed ? <Check className="StepIcon-completedIcon" /> : <div className="StepIcon-circle" />}
    </StepIconRoot>
  );
};

const Connector = styled(StepConnector)(({ theme }) => ({
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
    borderColor: theme.palette.grey[300],
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const Stepper: React.FC<IProps> = ({ steps, activeStep, orientation = 'horizontal' }) => {
  const alternativeLabel = !(!_.isEmpty(orientation) && orientation === 'vertical');

  return (
    <MUIStepper
      activeStep={activeStep}
      alternativeLabel={alternativeLabel}
      connector={<Connector />}
      orientation={orientation}
    >
      {Array.isArray(steps) &&
        steps.map((step) => (
          <Step key={step}>
            <StepLabel StepIconComponent={StepIcon}>
              <Typography variant="body1" color={colors.blue[600]} fontWeight={600}>
                {step}
              </Typography>
              <Typography variant="caption" bgcolor={colors.grey[200]} px={1} py={1 / 2}>
                21st july 2022
              </Typography>
            </StepLabel>
          </Step>
        ))}
      {typeof steps === 'number' &&
        _.map(_.range(steps), (step) => (
          <Step key={step}>
            <StepLabel StepIconComponent={StepIcon} />
          </Step>
        ))}
    </MUIStepper>
  );
};

export default Stepper;
