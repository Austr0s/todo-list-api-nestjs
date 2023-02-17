export interface Todo {
  id: string;
  name: string;
  isDone: boolean;
}

export interface TodoRequest {
  name: string;
  isDone: boolean;
}

export interface TodoResponse {
  id: string;
  name: string;
  isDone: boolean;
}
