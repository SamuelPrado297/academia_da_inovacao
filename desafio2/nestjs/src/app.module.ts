import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';  // Módulo de Usuários
import { PrismaService } from './modules/prismaService/prisma.service'; // Serviço Prisma
import { UserController } from './modules/user/user.controller';

@Module({
  imports: [UserModule],  // Importa o módulo de usuários
  controllers: [UserController],
  providers: [PrismaService],  // Fornece o serviço do Prisma, usado para interagir com o banco
})

export class AppModule {}
