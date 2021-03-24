import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/tasks.interface';

@Injectable()
export class TasksService {
    private readonly tasks: Task[] = [
        {
            id: '123',
            title: 'Test',
            description: '',
            completed: false
        },
        {
            id:'456',
            title: 'Test 2',
            description: '2nd test',
            completed: false
        },
    ];

    findAll(): Task[] { 
        return this.tasks
    }

    findOne(id: string): Task {
        return this.tasks.find(task => task.id === id)
    }

    create(task: Task): Task {
        this.tasks.push(task)
        return task
    }

    update(id: string, task: Task): Task {
        let idx: number = this.tasks.findIndex(task => task.id === id)
        let deleted = this.tasks.splice(idx, 1)[0]
        let newTask: Task = {
            id: task.id || deleted.id,
            title: task.title || deleted.title,
            description: task.description || deleted.description,
            completed: task.completed || deleted.completed,
        }

        this.tasks.push(newTask)
        return newTask
    }

    delete(id: string): any {
        let idx: number = this.tasks.findIndex(task => task.id === id)
        console.log(idx)
        return this.tasks.splice(idx,1);
    }
}
