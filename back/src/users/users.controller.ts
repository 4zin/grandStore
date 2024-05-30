import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get('/:id')
  getUsersById(@Param('id') id: string) {
    return this.usersService.getUsersById(id);
  }

  @Post()
  createUser(@Body() user: UserDto) {
    return this.usersService.createUser(user);
  }

  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() user: UserDto) {
    return this.usersService.updateUser(id, user);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }

}
