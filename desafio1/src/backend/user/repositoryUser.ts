import { User } from "@/share/model/user";
import { PrismaClient } from "@prisma/client";

//O CRUD do projeto 
export default class UserRepository {
    private static db: PrismaClient = new PrismaClient()

    static async create(user: User): Promise<User> { //Cria um usuário
        return this.db.user.create({
            data: user,
         });
    }

    static async getAll(): Promise<User[]> { //Mostra todos os usuários
        return await this.db.user.findMany()
    }

    static async getById(id: number): Promise<User> { //Mostra um usuário por ID
        const user = await this.db.user.findUnique({
            where: { id },
        });
        if (!user) { //Verifica se o usuário existe
            throw new Error(`Usuário com ID ${id} não existe encontrado`)
        }
        return user;
    }

    static async update(id: number, user: Partial<User>): Promise<User> { //Função Update
        return this.db.user.update({
            where: {id: user.id},
            data: user,
        });
    }
    
    static async delete(id: number): Promise<void> { //Deleta um usuário pelo ID
        await this.db.user.delete({
            where: { id },
        });
    }
} 
