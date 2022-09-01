import request from './HttpService';

export const getVehicleSearch = async (searchText: string): Promise<{ [key: string]: string }> => {
  return (
    await request.get('/v1/search-vehicles', {
      params: {
        searchText,
      },
    })
  ).data;
};

export default { getVehicleSearch };
