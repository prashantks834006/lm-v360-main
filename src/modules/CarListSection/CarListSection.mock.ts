import ICar, { ICarsInDue } from '../../types/Car';

export const CARS_DUE_TODAY: ICar[] = [
  {
    name: 'Stephanie Nelson',
    model: 'DJ8474938304562',
    taskName: 'Ordering',
    taskStatus: 'Collect information',
    taskCount: 2,
  },
  {
    name: 'Elsie Harper',
    model: 'DJ8474938304562',
    taskName: 'Production',
    taskStatus: 'Body in White',
    schedule: 'Sep. 12, 2022, 4:00PM',
    taskCount: 2,
  },
];

export const CARS_UPCOMING_TASKS: ICarsInDue[] = [
  {
    due: 'Tommorow',
    cars: [
      {
        name: 'Elsie Harper',
        model: 'DJ8474938304562',
        taskName: 'Production',
        taskStatus: 'Body in White',
        schedule: 'Sep. 12, 2022, 4:00PM',
        taskCount: 2,
      },
    ],
  },
  {
    due: 'Aug. 10 2022',
    cars: [
      {
        name: 'Elsie Harper',
        model: 'DJ8474938304562',
        taskName: 'Production',
        taskStatus: 'Body in White',
        schedule: 'Sep. 12, 2022, 4:00PM',
        taskCount: 2,
      },
      {
        name: 'Elsie Harper',
        model: 'DJ8474938304562',
        taskName: 'Production',
        taskStatus: 'Body in White',
        schedule: 'Sep. 12, 2022, 4:00PM',
        taskCount: 2,
      },
    ],
  },
  {
    due: 'Aug. 12 2022',
    cars: [
      {
        name: 'Elsie Harper',
        model: 'DJ8474938304562',
        taskName: 'Production',
        taskStatus: 'Body in White',
        schedule: 'Sep. 12, 2022, 4:00PM',
        taskCount: 2,
      },
      {
        name: 'Elsie Harper',
        model: 'DJ8474938304562',
        taskName: 'Production',
        taskStatus: 'Body in White',
        schedule: 'Sep. 12, 2022, 4:00PM',
        taskCount: 2,
      },
      {
        name: 'Elsie Harper',
        model: 'DJ8474938304562',
        taskName: 'Production',
        taskStatus: 'Body in White',
        schedule: 'Sep. 12, 2022, 4:00PM',
        taskCount: 2,
      },
    ],
  },
  {
    due: 'Aug. 13 2022',
    cars: [
      {
        name: 'Elsie Harper',
        model: 'DJ8474938304562',
        taskName: 'Production',
        taskStatus: 'Body in White',
        schedule: 'Sep. 12, 2022, 4:00PM',
        taskCount: 2,
      },
      {
        name: 'Elsie Harper',
        model: 'DJ8474938304562',
        taskName: 'Production',
        taskStatus: 'Body in White',
        schedule: 'Sep. 12, 2022, 4:00PM',
        taskCount: 2,
      },
      {
        name: 'Elsie Harper',
        model: 'DJ8474938304562',
        taskName: 'Production',
        taskStatus: 'Body in White',
        schedule: 'Sep. 12, 2022, 4:00PM',
        taskCount: 2,
      },
      {
        name: 'Elsie Harper',
        model: 'DJ8474938304562',
        taskName: 'Production',
        taskStatus: 'Body in White',
        schedule: 'Sep. 12, 2022, 4:00PM',
        taskCount: 2,
      },
    ],
  },
];
