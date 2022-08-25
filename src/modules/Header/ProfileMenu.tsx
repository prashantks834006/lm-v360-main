import { Box, Menu, MenuItem, Stack, Typography } from '@mui/material';
import { useOktaAuth } from '@okta/okta-react';
import React, { FC } from 'react';
import Link from '../../components/Link/Link';

type Props = {
  anchorEl: null | HTMLElement;
  id: string;
  handleMenuClose: () => void;
};

const ProfileMenu: FC<Props> = ({ anchorEl, id, handleMenuClose }) => {
  const { oktaAuth } = useOktaAuth();

  return (
    <Menu anchorEl={anchorEl} id={id} keepMounted open={Boolean(anchorEl)} onClose={handleMenuClose}>
      <Box maxWidth={300} width="90vw">
        <Typography sx={{ fontSize: 14 }} fontWeight={600} px={2} gutterBottom>
          My account
        </Typography>
        <Stack direction="row" alignItems="center" justifyContent="space-between" px={2} mt={2}>
          <Typography sx={{ fontSize: 14 }}>Time zone</Typography>
          <Link to="/">Change</Link>
        </Stack>
        <Typography px={2} sx={{ color: (theme) => theme.palette.grey[500], fontSize: 10 }} mb={2}>
          UTC-08:00 Pacific Time (US & Canada)
        </Typography>
        <MenuItem sx={{ fontSize: 14 }}>Feedback</MenuItem>
        <MenuItem sx={{ fontSize: 14 }} onClick={() => oktaAuth.signOut()}>
          Sign out
        </MenuItem>
      </Box>
    </Menu>
  );
};

export default ProfileMenu;
