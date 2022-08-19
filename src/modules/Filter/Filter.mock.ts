import IFilterGroup from '../../types/FilterGroup';

const FILTERS: IFilterGroup[] = [
  {
    id: 1,
    type: 'Vehicle Stage',
    filters: [
      'Reservation',
      'Ordering',
      'Production',
      // 'Reservation', 'Transit', 'Inspection', 'Delivery', 'Ownership'
    ],
  },
  {
    id: 2,
    type: 'Customer Stage',
    filters: [
      'Reserved',
      'Information gathering',
      'Purchase agreement',
      // 'Payment collection',
      // 'Schedule delivery',
      // 'Vehicle registration',
      // 'Owner',
    ],
  },
];

export default FILTERS;
