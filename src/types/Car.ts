interface ICar {
  name: string;
  model: string;
  taskName: string;
  taskStatus: string;
  schedule?: string;
  taskCount: number;
}

export interface ICarsInDue {
  due: string;
  cars: ICar[];
}

export default ICar;
