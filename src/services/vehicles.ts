import { Res } from '../types/service';
import { Vehicle, IColumnMetaData } from '../types';
import { ColorCell, DateCell, LinkCell, ProgressCell, TagCell } from '../modules/VehiclesGrid/GridCellRenderers';
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

export const getColumnMetaData = async () => {
  const response = await request.get('v1/ui-metadata?module=HomePage/Dashboard&subModule=AllVehicles');
  return response.data.data[0].columnDetails as IColumnMetaData[];
};

export const getColDefs = async () => {
  const colMetaDataList = await getColumnMetaData();
  return colMetaDataList.map((colMetaData) => {
    const colDef: any = { field: colMetaData.property, headerName: colMetaData.propertyName };
    colDef.width = colMetaData.width;
    colDef.filter = colMetaData.filterType;
    if (colMetaData.type === 'Link') colDef.cellRenderer = LinkCell;
    if (colMetaData.type === 'Tag') colDef.cellRenderer = TagCell;
    if (colMetaData.type === 'Date') colDef.cellRenderer = DateCell;
    if (colMetaData.type === 'Color') colDef.cellRenderer = ColorCell;
    if (colMetaData.type === 'ProgressBar') colDef.cellRenderer = ProgressCell;
    return colDef;
  });
};

export const getVehicles = async () => {
  return (await request.get('v1/vehicles')).data.data;
};

export const getRowData = async () => {
  const vehicles = await getVehicles();
  return vehicles.map((vehicle: any) => {
    const rowData = { ...vehicle };
    rowData.color = {
      label: vehicle.color,
      color1: '#F0F0F0',
      color2: '#D5D5D5',
    };
    return rowData;
  });
};

export default { getVehicleSearch };
