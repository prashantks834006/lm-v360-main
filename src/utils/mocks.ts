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
  (_, i) => `https://source.unsplash.com/random/10${i}x10${i}/?boss,man,employer,employee,suit`
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
