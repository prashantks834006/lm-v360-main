export const ENDPOINTS = {
  login: '/users/v1/login',
} as const;

const path = (route: string) => `/v360-app/${route}`;

export const PATHS = {
  dashboard: path(''),
  vehicles: path('vehicles'),
  vahicle: (id: string) => path(`vehicles/${id}`),
  help: path('help'),
} as const;

export const notificationsRange = ['All', 'Today', 'Last 3 days', 'This week'] as const;

export const FEEDBACK_URL = 'https://app.smartsheet.com/b/form/ac41af1d5ee54f76b31f82210f24d950' as const;
