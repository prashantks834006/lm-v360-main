import { Box, Button, Typography } from '@mui/material';
import { useOktaAuth } from '@okta/okta-react';
import React from 'react';

const Logout = () => {
  const { oktaAuth } = useOktaAuth();

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap={3}
    >
      <Typography variant="h3">You are loggedout successfully</Typography>
      <Button variant="contained" onClick={() => oktaAuth.signInWithRedirect()}>
        Login again
      </Button>
    </Box>
  );
};

export default Logout;
