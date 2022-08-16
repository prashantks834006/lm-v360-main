export const ENDPOINTS = {
  login: '/users/v1/login',
} as const;

export const PATHS = {
  dashboard: '/',
  vehicles: '/vehicles',
  help: '/help',
} as const;

export const notificationsRange = ['All', 'Today', 'Last 3 days', 'This week'] as const;
