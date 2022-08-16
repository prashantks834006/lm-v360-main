import moment from 'moment';
import {
  generateRandomName,
  generateRandomString,
  generateRandomMessage,
  generateRandomNumber,
  generateRandomStatus,
  generateRandomDate,
  generateRandomStage,
  generateRandomCarImage,
} from '../../utils/string';
import ICar from '../../types/cars';

const todayStartOfDay = new Date(moment().startOf('day').toISOString());
const todayEndOfDay = new Date(moment().endOf('day').toISOString());
const tomorrow = new Date(moment().add(1, 'day').startOf('day').toISOString());
const nextOneWeek = new Date(moment().add(7, 'day').endOf('day').toISOString());

export const mockCars: ICar[] = [...new Array(10)].map((_, i) => ({
  customer: generateRandomName(),
  id: generateRandomString(15),
  stage: generateRandomStage(),
  message: generateRandomMessage(),
  status: generateRandomStatus(),
  scheduledOn: generateRandomNumber(0, 1) === 1 ? generateRandomDate(todayStartOfDay, nextOneWeek).toISOString() : null,
  tasks: generateRandomNumber(1, 10),
  date:
    i < 2
      ? generateRandomDate(todayStartOfDay, todayEndOfDay).toISOString()
      : generateRandomDate(tomorrow, nextOneWeek).toISOString(),
  image: generateRandomCarImage(),
}));

export const data = {};
