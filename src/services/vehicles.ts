import { Res } from '../types/service';
import { Vehicle } from '../types';
import request from './HttpService';

export const getVehicleSearch = async (searchText: string): Promise<Res<Vehicle[]>> => {
  return (
    await request.get('/v1/search-vehicles', {
      params: {
        searchText,
      },
    })
  ).data;
};

export default { getVehicleSearch };
