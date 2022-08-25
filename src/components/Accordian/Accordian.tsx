import React from 'react';
import {
  Accordion as MuiAccordian,
  AccordionSummary,
  AccordionDetails,
  Typography,
  styled,
  AccordionProps,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StyledAccordian = styled(MuiAccordian)(() => ({
  boxShadow: 'none',
  ':before': {
    backgroundColor: 'transparent',
  },
  ' .MuiAccordionSummary-content': {
    margin: '10px 4px',
  },
  ' .MuiAccordionSummary-content.Mui-expanded': {
    margin: '10px 4px',
  },
  ' .MuiAccordionSummary-expandIcon': {
    marginRight: '4px',
  },
  ' .MuiAccordionSummary-root.Mui-expanded': {
    minHeight: '40px',
  },
  ' .MuiAccordionDetails-root': {
    padding: '0px',
  },
}));

const AccordianSecondary = styled(MuiAccordian)(() => ({
  boxShadow: 'none',
  border: '1px solid #E3E3E3',
  '& .MuiButtonBase-root.MuiAccordionSummary-root': {
    alignItems: 'start',
    padding: '12px',
  },
  '& .MuiAccordionSummary-content': {
    margin: '0px',
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: 'blue',
  },
  '& .MuiAccordionDetails-root': {
    padding: '11px 13px 14px',
  },
}));

interface IProps extends AccordionProps {
  header: string | React.ReactNode;
  styleVariant?: 'primary' | 'secondary';
}

const Accordion: React.FC<IProps> = ({ header, styleVariant = 'primary', children, ...other }) => {
  if (styleVariant === 'secondary') {
    return (
      <AccordianSecondary disableGutters {...other}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>{header}</AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </AccordianSecondary>
    );
  }
  return (
    <StyledAccordian disableGutters {...other}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{header}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </StyledAccordian>
  );
};

export default Accordion;
