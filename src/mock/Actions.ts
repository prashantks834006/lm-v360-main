import IAction from '../types/action';

export const taskOutcomes: { value: string; label: string }[] = [
  { label: 'Made contact', value: '1' },
  { label: 'Email sent', value: '2' },
  { label: 'Left voicemail', value: '3' },
  { label: 'Did not contact', value: '4' },
  // { label: 'Wrong number', value: '5' },
  // { label: 'Email bounced', value: '6' },
  // { label: 'Did not answer', value: '7' },
];

const actions: IAction[] = [
  {
    id: 1,
    name: 'Collect Information',
    dueDate: 'July 25, 2022',
    tasks: [
      { id: 1, name: 'Collect DMV info', canAutoComplete: true },
      { id: 2, name: 'Collect Delivery info' },
      { id: 3, name: 'Collect Registration info' },
    ],
  },
  {
    id: 2,
    name: 'Reach out to customer to sign purchase agreement',
    dueDate: 'July 25, 2022',
    tasks: [
      { id: 1, name: 'Introduce customer to purchase agreement', canAutoComplete: true },
      { id: 2, name: 'Empathize customer by resolving all queries' },
      { id: 3, name: 'Collect Registration info' },
    ],
  },
  {
    id: 3,
    name: 'Collect Information',
    dueDate: 'July 25, 2022',
    tasks: [
      { id: 1, name: 'Collect DMV info', canAutoComplete: true },
      { id: 2, name: 'Collect Delivery info' },
      { id: 3, name: 'Collect Registration info' },
    ],
    taskOutcome: '',
    comment: '',
    isComplete: true,
  },
];

export default actions;
