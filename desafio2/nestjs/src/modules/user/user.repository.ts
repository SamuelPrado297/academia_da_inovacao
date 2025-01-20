import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prismaService/prisma.service";
import { User } from "./user.entity";

@Injectable()
export class UserRepository {
    constructor(private prisma: PrismaService) {}

    async create(user: User) {
        return this.prisma.user.create({
            data: user,
        });
    }

    async findAll(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

    async findOne(id: number): Promise<User | null> {
        return this.prisma.user.findUnique({ where: { id } });
    }

    async update(id: number, user: Partial<User>): Promise<User> {
        return this.prisma.user.update({
            where: { id },
            data: user,
        });
    }

    async remove(id: number): Promise<void> {
        await this.prisma.user.delete({ where: { id } });
    }
}