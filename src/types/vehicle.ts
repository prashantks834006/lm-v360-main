interface IColor {
  label: string;
  color1: string;
  color2: string;
}

export interface IVehiclesData {
  customer: string;
  customerStage: string;
  customerStatus: string;
  VIN: string;
  model: string;
  color: IColor;
  stage: string;
  status: string;
  statusEntryDate: string;
  duration: number;
  deliveryReadiness: number;
  software: number;
  lastContact: string;
  ownership: string;
}

export interface Vehicle {
  _id: string;
  VIN: string;
  trim: string;
  currentStatus: string;
  reservationId: string;
  lucidId: string;
}
