import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
      @InjectRepository(User)
      private readonly userRepository: Repository<User>,
    ) {}

    findAll(): Promise<User[]> {
        return this.userRepository.find({
            select: ['id', 'title', 'description', 'status_id', 'deadline', 'comments', 'created_by', 'tags', 'created_at'],
        });
    }

    findOne(id: number): Promise<User> {
        return this.userRepository.findOne({ where: { id } });
    }

    async create(task: Partial<User>): Promise<User> {
        const newTask = this.userRepository.create(task);
        return this.userRepository.save(newTask);
    }

    async update(id: number, task: Partial<User>): Promise<User> {
        await this.userRepository.update(id, task);
        return this.userRepository.findOne({ where: { id } });
    }
  
    async remove(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }
}
