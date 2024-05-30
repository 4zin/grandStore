import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserDto } from './dto/users.dto';
import {User} from '@prisma/client';

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) {}

    async getUsers(): Promise<User[]> {
        return await this.prisma.user.findMany();
    }

    async getUsersById(id: string): Promise<User> {

        const user = await this.prisma.user.findUnique(
            {
                where: {id},
            }
        );

        if (!user) throw new NotFoundException('User not found')

        return user;
    }

    
    async createUser(user: UserDto): Promise<User> {
        return await this.prisma.user.create(
            {
                data: user
            }
        )
    }
    
    async updateUser(id: string, user: UserDto): Promise<User> {

        const existingUser = await this.prisma.user.findUnique(
            {
                where: {
                    id: id
                }
            }
        );

        if (!existingUser) throw new NotFoundException('User not found')

        return await this.prisma.user.update({
            where: {
                id
            },
            data: user
        })
    }

    async deleteUser(id: string): Promise<User> {

        const existingUser = await this.prisma.user.findUnique(
            {
                where: {
                    id: id
                }
            }
        );

        if (!existingUser) throw new NotFoundException('User not found')

        return await this.prisma.user.delete(
            {
                where: {
                    id: id
                }
            }
        )
    }

}
