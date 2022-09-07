import { Stage } from './stages';

export interface Vehicle {
  _id: string;
  VIN: string;
  trim: string;
  currentStatus: string;
  reservationId: string;
  lucidId: string;
  Last_Name__C: string;
  First_Name__C: string;
}

export interface IColumnMetaData {
  columnSeqNo: string;
  propertyName: string;
  property: string;
  toolTip: string;
  toolTipProperty: string;
  sortingEnabled: string;
  width: number;
  filterType: string;
  type: 'Plain' | 'Tag' | 'ProgressBar' | 'Link' | 'Color' | 'Date';
}

export interface ILinkColumnMetaData extends IColumnMetaData {
  link: string;
  toolTipLink: string;
}

export interface IColorColumnMetaData extends IColumnMetaData {
  color1Property: string;
  color2Property: string;
}

export interface IDateColumnMetaData extends IColumnMetaData {
  dateFormat: string;
}

export interface ISummaryVehicle {
  customerName: string;
  _id: string;
  VIN: string;
  currentStage: Stage;
  currentCustomerstage: string;
  vehicleStatus: string;
  scheduledOn?: string | null;
  totalTasks: number;
  date: string;
  imageUrl: string;
}
