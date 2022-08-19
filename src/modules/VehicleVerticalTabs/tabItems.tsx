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
import QuickGlance from './QuickGlance';
import Team from './Team';
import Vehicle from './Vehicle';
import Customer from './Customer';
import Payment from './Payment';
import Registration from './Registration';
import Insurance from './Insurance';
import Documents from './Documents';
import Delivery from './Delivery';

const tabItems: TabItem[] = [
  {
    label: 'Quick glance',
    content: <QuickGlance />,
    icon: <StarIcon />,
  },
  {
    label: 'Vehicle',
    content: <Vehicle />,
    icon: <VehicleIcon />,
  },
  {
    label: 'Customer',
    content: <Customer />,
    icon: <CustomerIcon />,
  },
  {
    label: 'Registration',
    content: <Registration />,
    icon: <RegistrationIcon />,
  },
  {
    label: 'Insurance',
    content: <Insurance />,
    icon: <InsuranceIcon />,
  },
  {
    label: 'Payment',
    content: <Payment />,
    icon: <PaymentIcon />,
  },
  {
    label: 'Documents',
    content: <Documents />,
    icon: <DocumentsIcon />,
  },
  {
    label: 'Team',
    content: <Team />,
    icon: <TeamIcon />,
  },
  {
    label: 'Delivery',
    content: <Delivery />,
    icon: <DeliveryIcon />,
  },
];

export default tabItems;
