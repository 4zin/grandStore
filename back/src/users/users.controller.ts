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
  getUsersById(@Param('id') id: number) {
    return this.usersService.getUsersById(Number(id));
  }

  @Post()
  createUser(@Body() user: UserDto) {
    return this.usersService.createUser(user);
  }

  @Put('/:id')
  updateUser(@Param('id') id: number, @Body() user: UserDto) {
    return this.usersService.updateUser(Number(id), user);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: number) {
    return this.usersService.deleteUser(Number(id));
  }

}
