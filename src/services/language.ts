import { ILanguage } from '../types/language';
import { request } from './HttpService';

export const getLanguages = async (): Promise<ILanguage[]> => {
  return (await request.get('/language')).data;
};

export default { getLanguages };
