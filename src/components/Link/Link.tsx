import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const Link = styled(RouterLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main,
  fontSize: 12,
}));

export default Link;
