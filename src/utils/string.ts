import { Stage } from '../types/stages';
import {
  names,
  vehicles,
  statuses,
  notifications,
  stages,
  messages,
  carImages,
  carModels,
  carColors,
  carStatuses,
} from './mocks';

export const getRandomElementFromArray = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

export const generateRandomString = (length: number) =>
  Array(length + 1)
    .join(`${Math.random().toString(36)}${new Date().getTime()}`.slice(2, 18))
    .slice(0, length)
    .toUpperCase();
export const generateRandomName = () => getRandomElementFromArray(names);
export const generateRandomVehicle = () => getRandomElementFromArray(vehicles);
export const generateRandomStatus = () => getRandomElementFromArray(statuses);
export const generateRandomNotification = () => getRandomElementFromArray(notifications);
export const generateRandomStage = () => getRandomElementFromArray(stages) as Stage;
export const generateRandomMessage = () => getRandomElementFromArray(messages);
export const generateRandomDate = (from: Date, to: Date): Date => {
  const fromUnix = from.getTime();
  const toUnix = to.getTime();
  return new Date(fromUnix + Math.random() * (toUnix - fromUnix));
};
export const generateRandomNumber = (from: number, to: number): number => {
  return Math.floor(Math.random() * (to - from + 1)) + from;
};
export const generateRandomCarImage = () => getRandomElementFromArray(carImages);
export const generateRandomCarModel = () => getRandomElementFromArray(carModels);
export const generateRandomCarColor = () => getRandomElementFromArray(carColors);
export const generateRandomCarStatus = () => getRandomElementFromArray(carStatuses);
