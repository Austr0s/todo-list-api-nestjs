import { Body, Controller, Delete, Get, Logger, Param, Post, Put } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { TodoRequest, TodoResponse } from "./todo.interface";

@Controller("api/v1/todos")
export class TodoController {
  private readonly logger = new Logger(TodoController.name);

  constructor(private readonly todoService: TodoService) {
  }

  @Post()
  create(@Body() item: TodoRequest): TodoResponse {
    this.logger.log(`Handling create() request with body: ${JSON.stringify(item)}`);
    return this.todoService.create(item);
  }

  @Get()
  findAll(): TodoResponse[] {
    this.logger.log("Handling findAll() request...");
    return this.todoService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string): TodoResponse {
    this.logger.log(`Handling findOne() request with id: ${id}...`);
    return this.todoService.findOne(id);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() todo: TodoRequest): void {
    this.logger.log(`Handling update() request with id=${id}...`);
    this.todoService.update(id, todo);
  }

  @Delete(":id")
  remove(@Param("id") id: string): void {
    this.logger.log("Handling remove() request with id=" + id + "...");
    return this.todoService.remove(id);
  }

}

