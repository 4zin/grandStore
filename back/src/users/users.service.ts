import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserDto } from './dto/users.dto';
import {User} from '@prisma/client';

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) {}

    async getUsers(): Promise<User[]> {
        return await this.prisma.user.findMany();
    }

    async getUsersById(id: number): Promise<User> {
        return await this.prisma.user.findUnique(
            {
                where: {id},
            }
        );
    }

    
    async createUser(user: UserDto): Promise<User> {
        return await this.prisma.user.create(
            {
                data: user
            }
        )
    }
    
    async updateUser(id: number, user: UserDto): Promise<User> {
        return await this.prisma.user.update({
            where: {
                id
            },
            data: user
        })
    }

    async deleteUser(id: number): Promise<User> {
        return await this.prisma.user.delete(
            {
                where: {
                    id: id
                }
            }
        )
    }

}
