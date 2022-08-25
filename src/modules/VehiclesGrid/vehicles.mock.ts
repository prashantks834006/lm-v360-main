import {
  generateRandomName,
  generateRandomNumber,
  generateRandomStage,
  generateRandomStatus,
  generateRandomString,
  generateRandomCarModel,
  generateRandomCarColor,
  generateRandomMessage,
  generateRandomCarStatus,
  generateRandomDate,
} from '../../utils/string';

const vehicles = [...new Array(generateRandomNumber(500, 5000))].map(() => ({
  customer: generateRandomName(),
  customerStage: generateRandomMessage(),
  customerStatus: generateRandomStatus(),
  VIN: generateRandomString(15),
  model: generateRandomCarModel(),
  color: generateRandomCarColor(),
  stage: generateRandomStage(),
  status: generateRandomCarStatus(),
  statusEntryDate: generateRandomDate(new Date(2020, 0, 1), new Date(2022, 12, 12)).toISOString(),
  duration: generateRandomNumber(1, 100),
  deliveryReadiness: generateRandomNumber(1, 100),
  software: 3.4,
  lastContact: generateRandomDate(new Date(2020, 0, 1), new Date(2022, 12, 12)).toISOString(),
  ownership: 'internal',
}));

export default vehicles;
