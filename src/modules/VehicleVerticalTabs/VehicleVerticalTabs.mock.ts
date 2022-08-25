import { generateRandomName, generateRandomRole, generateRandomUserImage, generateEmail } from '../../utils/string';
import { Field } from './FieldList';
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

export const vehicleLabels: GridLabel[] = [
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

export const vehicleFields: Field[] = [
  {
    field: 'VIN',
    value: 'W32C21AQW3RW2DV4',
  },
  {
    field: 'Year',
    value: '2022',
  },
  {
    field: 'Model',
    value: 'Air',
  },
  {
    field: 'Trim',
    value: 'Dream Edition',
  },
  {
    field: 'Edition',
    value: 'Dream Edition',
  },
  {
    field: 'Interior color',
    value: 'Santa Cruz',
  },
  {
    field: 'Exterior color',
    value: 'Quantum grey',
  },
  {
    field: 'Drivetrain',
    value: '-',
  },
  {
    field: 'Battery',
    value: '-',
  },
  {
    field: 'Drivetrain',
    value: '-',
  },
  {
    field: 'ADAS',
    value: 'Dream Edition',
  },
  {
    field: 'Wheels',
    value: '21" Aero blade',
  },
  {
    field: 'Roof',
    value: '-',
  },
  {
    field: 'Sound system',
    value: '-',
  },
  {
    field: 'Software version',
    value: 'Version 3.4',
  },
  {
    field: 'State of charge',
    value: '40%',
  },
];

export const customer: Field[] = [
  {
    field: 'Name',
    value: 'John Doe',
  },
  {
    field: 'Phone',
    value: '+1 (123) 456-7890',
  },
  {
    field: 'Email',
    value: 'john@mail.com',
  },
  {
    field: 'Mailing address',
    value: '123 Main St, New York, NY 10001',
  },
  {
    field: 'Last contact date',
    value: 'July 2, 2022',
  },
  {
    field: 'Last contact method',
    value: 'Phone',
  },
];

export const profile: Field[] = [
  {
    field: 'EV Ownership',
    value: 'John Doe',
  },
  {
    field: 'EV Knowledge',
    value: 'Basic understanding',
  },
  {
    field: 'Current car',
    value: '330i',
  },
  {
    field: 'Make of current year',
    value: '-',
  },
  {
    field: 'Objections',
    value: '-',
  },
  {
    field: 'Needs',
    value: '-',
  },
  {
    field: 'Living situation',
    value: '-',
  },
  {
    field: 'Charging Discussion',
    value: '-',
  },
  {
    field: 'Charging Instalation plans',
    value: '-',
  },
];

export const payment: Field[] = [
  {
    field: 'Payment Method',
    value: 'Cash',
  },
  {
    field: 'Payment Date',
    value: 'July 2, 2022',
  },
  {
    field: 'Remaining Amount',
    value: '$0',
  },
  {
    field: 'Delivery day payment method',
    value: 'cash',
  },
  {
    field: 'Delivery day amount',
    value: '-',
  },
  {
    field: 'Lucid financing amount',
    value: '-',
  },
  {
    field: 'other financing amount',
    value: '-',
  },
  {
    field: 'Lien holder name',
    value: 'James clarter',
  },
  {
    field: 'Lien holder address',
    value: '123 Main St, New York, NY 10001',
  },
  {
    field: 'Payment status',
    value: 'Paid',
  },
];
export const purchaseAgreement: Field[] = [
  {
    field: 'Pro-forma amount',
    value: '$50k',
  },
  {
    field: 'Generated date',
    value: 'July 2, 2022',
  },
  {
    field: 'Send date',
    value: 'July 2, 2022',
  },
  {
    field: 'Signed date',
    value: 'July 2, 2022',
  },
  {
    field: 'Rejected date',
    value: '-',
  },
];

export const registration: Field[] = [
  {
    field: 'type',
    value: 'cash',
  },
  {
    field: 'address',
    value: '123 Main St, New York, NY 10001',
  },
  {
    field: 'Buyer Name',
    value: 'John Doe',
  },
  {
    field: 'Buyer Date of birth',
    value: 'July 2, 1982',
  },
  {
    field: 'Driving license number',
    value: '123456789',
  },
  {
    field: 'Driving license State/Province',
    value: 'CA',
  },
  {
    field: 'Driving license expiration date',
    value: 'July 2, 2029',
  },
  {
    field: 'Co-buyer type',
    value: '-',
  },
  {
    field: 'Co-buyer name',
    value: '-',
  },
  {
    field: 'Co-buyer date of birth',
    value: '-',
  },
];
export const licencePlate: Field[] = [
  {
    field: 'Temperory plate number',
    value: '-',
  },
];

export const insurance: Field[] = [
  {
    field: 'Insurance name',
    value: 'American Automobile Insurance Company',
  },
  {
    field: 'Insurance policy number',
    value: '35D24D21',
  },
  {
    field: 'Company name',
    value: 'American Automobile Insurance Company',
  },
  {
    field: 'Expiration date',
    value: 'July 2, 2024',
  },
  {
    field: 'State Specific',
    value: 'CA',
  },
  {
    field: 'VIN Match',
    value: '-',
  },
];
