import { ISummaryVehicle } from '../types/vehicle';
import { Res } from '../types/service';
import { Vehicle, IColumnMetaData } from '../types';
import { ColorCell, DateCell, LinkCell, ProgressCell, TagCell } from '../modules/VehiclesGrid/GridCellRenderers';
import request from './HttpService';
import { ENDPOINTS, META_DATA_MODULES, META_DATA_SUB_MODULES } from '../utils/constants';
import { MetaData } from '../types/metaData';

export const getVehicleSearch = async (searchText: string): Promise<Res<Vehicle[]>> => {
  return (
    await request.get(ENDPOINTS.searchVehicles, {
      params: {
        searchText,
      },
    })
  ).data;
};

export const getMetaData = async (module: string, subModule: string): Promise<MetaData> => {
  const response = await request.get(ENDPOINTS.metaData, {
    params: {
      module,
      subModule,
    },
  });
  return response.data.data[0];
};

const CellTypes = {
  Link: LinkCell,
  Tag: TagCell,
  Date: DateCell,
  Color: ColorCell,
  ProgressBar: ProgressCell,
  Plain: undefined,
};

export const getColDefs = async () => {
  const response = await getMetaData(META_DATA_MODULES.vehicles, META_DATA_SUB_MODULES.vehiclesGrid);
  const colMetaDataList: IColumnMetaData[] = response?.columnDetails;

  return colMetaDataList.map((colMetaData) => {
    const colDef: any = { field: colMetaData.property, headerName: colMetaData.propertyName };
    colDef.width = colMetaData.width;
    colDef.filter = colMetaData.filterType;
    colDef.cellRenderer = CellTypes[colMetaData.type];
    return colDef;
  });
};

export const getVehicles = async () => {
  return (await request.get(ENDPOINTS.vehicles)).data.data || [];
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


export const getVehicleSummaryMetaData = async () => {
  return getMetaData(META_DATA_MODULES.dashboard, META_DATA_SUB_MODULES.vehicleSummary);
};

export const getVehicleSummary = async (tabName: string) => {
  return ((
    await request.get(ENDPOINTS.vehiclesSummary, {
      params: {
        tabName,
      },
    })
  ).data.data || []) as ISummaryVehicle[];
};

export const getVehicleDetailsMetaData = async () => {
  const response = await request.get('v1/ui-metadata?module=V360Page&subModule=VehicleDetailsTabs');
  return response.data.data[0];
};

export const getVehicleDetails = async (reservationId: string | null, VIN: string | null, lucidId: string) => {
  const response = await request.post('v1/vehicleDetail', { reservationId, VIN, lucidId });
  return response.data.data[0];
};

export default { getVehicleSearch };
