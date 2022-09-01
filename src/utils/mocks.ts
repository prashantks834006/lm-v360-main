import img1 from '../assets/images/image1.png';
import img2 from '../assets/images/image2.png';
import img3 from '../assets/images/image3.png';

export const names: string[] = [
  'Lynn OLeeum',
  'P. Ann ORecital',
  'Ray OSun',
  'Lee A. Sun',
  'Ray Sin',
  'Isabelle Ringing',
  'Eileen Sideways',
  'Rita Book',
  'Paige Turner',
  'Rhoda Report',
  'Augusta Wind',
  'Chris Anthemum',
  'Anne Teak',
  'U.R. Nice',
  'Anita Bath',
  'Harriet Upp',
  'I.M. Tired',
  'I. Missy Ewe',
  'Ivana B. Withew',
  'Anita Letterback',
  'Hope Furaletter',
  'B. Homesoon',
  'Bea Mine',
  'Bess Twishes',
];

export const vehicles: string[] = ['Air Dream Edition(GT)', 'Air Dream Edition(Touring)'];

export const statuses: string[] = ['On Track', 'Off Track', 'Delayed'];

export const notifications: string[] = [
  'Collect payment from customer',
  'Vehicle is put on hold, but delivery is scheduled for',
  'Follow up with customer on purchase order',
];

export const stages: string[] = [
  'Reservation',
  'Order',
  'Production',
  'Transit',
  'Inspection',
  'Delivery',
  'OwnerShip',
];

export const messages: string[] = [
  'Collect information',
  'In progress',
  'Sign purchase agreement',
  'Corrections in progress',
  'Collecting customer info',
  'Body in white',
];

export const carImages: string[] = [img1, img2, img3];

export const userImages: string[] = [...new Array(20)].map(
  (_, i) => `https://source.unsplash.com/random/10${i}x10${i}/?boss,employer,employee,suit,face`
);

export const roles: string[] = [
  'Delivery Host',
  'PDI Specialist',
  'Manufacturing Associate',
  'Sales Associate',
  'Production Manager',
  'Production Associate',
  'Sales Manager',
  'PDI Manager',
  'Delivery Manager',
  'Delivery Associate',
  'PDI Associate',
  'Manufacturing Manager',
  'Manufacturing Associate',
];

export const hosts = ['gmail', 'lucid', 'lucidmotors', 'yahoo', 'hotmail', 'aol', 'outlook'];

export const carModels: string[] = ['GT', 'Touring'];
export const carColors = [
  { label: 'Stellar Silver', color1: '#F0F0F0', color2: '#E0E0E0' },
  { label: 'Infinite Black', color1: '#4B4B4B', color2: '#0E0E0E' },
  { label: 'Infinite White', color1: '#F0F0F0', color2: '#F3F3F3' },
  { label: 'Quantum Gray', color1: '#F0F0F0', color2: '#D5D5D5' },
  { label: 'Deep Red Metallic', color1: '#85787A', color2: '#510F16' },
  { label: 'Cosmos Silver', color1: '#9E9E9F', color2: '#6E6E70' },
  { label: 'Deep Blue Metallic', color1: '#F0F0F0', color2: '#E0E0E0' },
  { label: 'Cosmos Black', color1: '#F0F0F0', color2: '#E0E0E0' },
];

export const carStatuses: string[] = ['End of Line', 'In Production', 'En-route', 'Arrived', 'In Yard', 'Inspection'];
