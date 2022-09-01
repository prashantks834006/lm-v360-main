import React, { FC } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export interface Team {
  name: string;
  secondaryText: string;
  avatar?: string;
}

type Props = {
  team: Team[];
};

const TeamList: FC<Props> = ({ team }) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }} dense disablePadding>
      {team.map(({ avatar, name, secondaryText }) => (
        <ListItem sx={{ px: 0 }} key={name}>
          <ListItemAvatar>
            <Avatar src={avatar} />
          </ListItemAvatar>
          <ListItemText
            primary={name}
            secondary={secondaryText}
            primaryTypographyProps={{ sx: { fontSize: 12, fontWeight: 500 } }}
            secondaryTypographyProps={{ sx: { fontSize: 10, fontWeight: 500 } }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default TeamList;
