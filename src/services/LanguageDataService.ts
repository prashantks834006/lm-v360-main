import { ILanguages } from '../types/language';
import { request } from './HttpService';

export const getLanguages = async (): Promise<ILanguages> => {
  return (await request.get('getLanguages')).data;
};

export default getLanguages;
