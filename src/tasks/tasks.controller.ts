import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto'
import { Task } from './interfaces/tasks.interface';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Get()
    findAll(): Task[] {
        return this.tasksService.findAll()
    }
    
    @Get(':id')
    findOne(@Param('id') id): Task {
        return this.tasksService.findOne(id)
    }

    @Post()
    create(@Body() createTaskDto: CreateTaskDto): Task {
        let task: Task = {
            id: '129129129129',
            title: createTaskDto.title,
            description: createTaskDto.description || '',
            completed: createTaskDto.completed || false,
        }
        return this.tasksService.create(task)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) : Task{
      return this.tasksService.update(id, updateTaskDto)
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) : Task {
      return this.tasksService.delete(id);
    }
}
