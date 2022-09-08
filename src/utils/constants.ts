export const ENDPOINTS = {
  metaData: 'v1/ui-metadata',
  vehicles: 'v1/vehicles',
  searchVehicles: 'v1/search-vehicles',
  vehiclesSummary: 'v1/vehicles-Summary',
} as const;

export const META_DATA_MODULES = {
  vehicles: 'Vehicles',
  dashboard: 'Dashboard',
};

export const META_DATA_SUB_MODULES = {
  vehiclesGrid: 'Grid',
  vehicleSummary: 'VehicleSummary',
};

const path = (route: string) => `/v360-app/${route}`;

export const PATHS = {
  dashboard: path(''),
  vehicles: path('vehicles'),
  vahicle: (id: string) => path(`vehicles/${id}`),
  help: path('help'),
} as const;

export const notificationsRange = ['All', 'Today', 'Last 3 days', 'This week'] as const;

export const stages = ['Reserved', 'Order', 'Production', 'Transit', 'Inspection', 'Delivery', 'OwnerShip'] as const;

export const FEEDBACK_URL = 'https://app.smartsheet.com/b/form/ac41af1d5ee54f76b31f82210f24d950' as const;
