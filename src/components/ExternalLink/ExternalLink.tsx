import { styled } from '@mui/material';

const ExternalLink = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main,
  fontSize: 11,
  fontFamily: theme.typography.fontFamily,
}));

export default ExternalLink;
