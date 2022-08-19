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

interface IProps extends AccordionProps {
  title: string;
}

const Accordion: React.FC<IProps> = ({ title, children, ...other }) => {
  return (
    <StyledAccordian disableGutters {...other}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </StyledAccordian>
  );
};

export default Accordion;
