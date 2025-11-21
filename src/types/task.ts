export interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface CreateTaskDto {
  title: string;
}

export interface UpdateTaskDto {
  title: string;
  isCompleted: boolean;
}
