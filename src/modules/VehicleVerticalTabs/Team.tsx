import { Box } from '@mui/material';
import React from 'react';
import Typography from '../../components/Typography/Typography';
import TeamList from './TeamList';
import { teamWithEmail } from './VehicleVerticalTabs.mock';

const Team = () => {
  return (
    <Box>
      <Typography size={12} weight={500} uppercase sx={{ mb: 2 }}>
        team
      </Typography>
      <TeamList team={teamWithEmail} />
    </Box>
  );
};

export default Team;
