import { names, vehicles, statuses } from './mocks';

export const generateRandomString = (length: number) =>
  Array(length + 1)
    .join(`${Math.random().toString(36)}${new Date().getTime()}`.slice(2, 18))
    .slice(0, length)
    .toUpperCase();
export const generateRandomName = () => names[Math.floor(Math.random() * names.length)];
export const generateRandomVehicle = () => vehicles[Math.floor(Math.random() * vehicles.length)];
export const generateRandomStatus = () => statuses[Math.floor(Math.random() * statuses.length)];
