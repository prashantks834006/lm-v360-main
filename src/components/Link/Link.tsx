import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const Link = styled(RouterLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.common.black,
}));

export default Link;
