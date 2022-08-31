import { Badge as MuiBadge, BadgeProps, styled } from '@mui/material';

const Badge = styled(MuiBadge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    fontSize: 12,
    padding: 0,
    height: 16,
    minWidth: 16,
    backgroundColor: theme.palette.error.light,
    top: 2,
    right: 2,
  },
}));

export default Badge;
