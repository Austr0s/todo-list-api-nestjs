import { Injectable } from "@nestjs/common";
import { Todo, TodoRequest, TodoResponse } from "./todo.interface";
import { v4 as uuidV4 } from "uuid";

@Injectable()
export class TodoService {

  private todos: Todo[] = [];

  findAll(): TodoResponse[] {
    return this.todos;
  }

  create(item: TodoRequest): TodoResponse {
    const id = uuidV4();
    const { name, isDone } = item;
    const todo = {
      id,
      name,
      isDone
    };
    this.todos.push(todo);

    return todo;
  }

  findOne(id: string): TodoResponse {
    return this.todos.find(x => x.id === id);
  }

  update(id: string, todo: TodoRequest): void {
    const todoEntity = this.todos.find(x => x.id === id);

    if (todoEntity) {
      todoEntity.name = todo.name;
      todoEntity.isDone = todo.isDone;

      const index = this.todos.findIndex(x => x.id === todoEntity.id);
      this.todos[index] = todoEntity;
    }
  }

  remove(id: string): void {
    const index = this.todos.findIndex(x => x.id === id);
    this.todos.splice(index, 1);
  }

}
