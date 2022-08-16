import { Stage } from './stages';

interface ICar {
  customer: string;
  id: string;
  stage: Stage;
  message: string;
  status: string;
  scheduledOn?: string | null;
  tasks: number;
  date: string;
  image: string;
}

export default ICar;
