import { generateRandomName, generateRandomRole, generateRandomUserImage, generateEmail } from '../../utils/string';
import { GridLabel } from './GridLabels';
import { Team } from './TeamList';

export const team: Team[] = [...new Array(5)].map(() => ({
  name: generateRandomName(),
  secondaryText: generateRandomRole(),
  avatar: generateRandomUserImage(),
}));

export const teamWithEmail: Team[] = [...new Array(5)].map(() => {
  const name = generateRandomName();
  return {
    name,
    secondaryText: generateEmail(name),
    avatar: generateRandomUserImage(),
  };
});

export const labels: GridLabel[] = [
  {
    label: 'Edition',
    title: 'Dream',
  },
  {
    label: 'Payment Method',
    title: 'Cash',
  },
  {
    label: 'Interior color',
    title: 'Santa Cruz',
  },
  {
    label: 'Exterior color',
    title: 'Quantum grey',
  },
  {
    label: 'Wheels',
    title: '21" Aero blade',
  },
  {
    label: 'EV Ownership',
    title: 'First time',
  },
];
