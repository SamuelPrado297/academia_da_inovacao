import { User } from "@/share/model/user";
import { PrismaClient } from "@prisma/client";

//O CRUD do projeto 
export default class UserRepository {
    private static db: PrismaClient = new PrismaClient()

    static async save(user: User): Promise<User> { //Salva um usuário
        return this.db.user.upsert({
            where: { id: user.id},
            update: user,
            create: user
         });
    }

    static async getAll(): Promise<User[]> { //Mostra todos os usuários
        return await this.db.user.findMany()
    }

    static async getById(id: number): Promise<User> { //Mostra um usuário por ID
        const user = await this.db.user.findUnique({
            where: { id },
        });
        return user as User;
    }
    
    static async delete(id: number): Promise<void> { //Deleta um usuário pelo ID
        await this.db.user.delete({
            where: { id },
        });
    }
} 