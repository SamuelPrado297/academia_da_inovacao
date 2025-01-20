import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';  // Repositório para acessar o banco de dados
import { PrismaService } from '../prismaService/prisma.service'; // Serviço Prisma

@Module({
  imports: [],
  controllers: [UserController],  // Define o controlador de usuários
  providers: [UserService, UserRepository, PrismaService],  // Registra os serviços e repositórios
})
export class UserModule {}
