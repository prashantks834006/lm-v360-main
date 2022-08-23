interface ITask {
  id: number;
  name: string;
  canAutoComplete?: boolean;
}

interface IAction {
  id: number;
  name: string;
  dueDate: string;
  tasks: ITask[];
  taskOutcome?: string;
  comment?: string;
  isComplete?: boolean;
}

export default IAction;
