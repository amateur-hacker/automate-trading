export interface TodoCheckBoxType {
  id: number;
  title: string;
  status: string;
  badge: string;
  badgeclass: string;
  timelimit?: string;
}

export interface TodoReduceType {
  allTodos: TodoCheckBoxType[];
}
