import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards  } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<User> {
        return this.userService.findOne(id);
    }

    @Post()
    create(@Body() task: Partial<User>): Promise<User> {
        return this.userService.create(task);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() task: Partial<User>): Promise<User> {
        return this.userService.update(id, task);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        const numericId = parseInt(id, 10);
        return this.userService.remove(numericId);
    }
}
