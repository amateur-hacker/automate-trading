export interface newTaskType {}
export interface allTaskType {
  id: number;
  title: string;
  collection: string;
  desc: string;
}

export interface TaskReducerType {
  newTask: [] | newTaskType[];
  allTask: [] | allTaskType[];
}

export interface TaskReducerTypes {
  TaskReducer: TaskReducerType;
}

export interface TaskTitleProps {
  title: string;
}

export interface TabActiveProps {
  activeTab: string;
}

export interface CreateTagProps {
  tagCallback: (val: boolean) => void;
  tagModal: boolean;
}

export interface NavClassProps {
  activeToggle: (num: string) => void;
}

export interface AddTaskType {
  desc: string;
  title: string;
}

export interface AssignedToMeClassProps {
  title: string;
}
