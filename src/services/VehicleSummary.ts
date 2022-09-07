import { request } from './HttpService';

export const getVehicleSummary = async (): Promise<any> => {
  return (await request.get('getMetaDataService')).data;
};

export default getVehicleSummary;
