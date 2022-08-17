import React from 'react';

import { TabItem } from '../../components/Tabs';
import { ReactComponent as StarIcon } from '../../assets/icons/star.svg';
import { ReactComponent as VehicleIcon } from '../../assets/icons/vehicle.svg';
import { ReactComponent as CustomerIcon } from '../../assets/icons/customer.svg';
import { ReactComponent as PaymentIcon } from '../../assets/icons/payment.svg';
import { ReactComponent as RegistrationIcon } from '../../assets/icons/registration.svg';
import { ReactComponent as InsuranceIcon } from '../../assets/icons/insurance.svg';
import { ReactComponent as DocumentsIcon } from '../../assets/icons/documents.svg';
import { ReactComponent as TeamIcon } from '../../assets/icons/team.svg';
import { ReactComponent as DeliveryIcon } from '../../assets/icons/delivery.svg';

const tabItems: TabItem[] = [
  {
    label: 'Quick glance',
    content: <div> Quick Glance </div>,
    icon: <StarIcon />,
  },
  {
    label: 'Vehicle',
    content: <div> Quick Glance </div>,
    icon: <VehicleIcon />,
  },
  {
    label: 'Customer',
    content: <div> Customer </div>,
    icon: <CustomerIcon />,
  },
  {
    label: 'Payment',
    content: <div> Payment </div>,
    icon: <PaymentIcon />,
  },
  {
    label: 'Registration',
    content: <div> Registration </div>,
    icon: <RegistrationIcon />,
  },
  {
    label: 'Insurance',
    content: <div> Insurance </div>,
    icon: <InsuranceIcon />,
  },
  {
    label: 'Documents',
    content: <div> Documents </div>,
    icon: <DocumentsIcon />,
  },
  {
    label: 'Team',
    content: <div> Team </div>,
    icon: <TeamIcon />,
  },
  {
    label: 'Delivery',
    content: <div> Delivery </div>,
    icon: <DeliveryIcon />,
  },
];

export default tabItems;
