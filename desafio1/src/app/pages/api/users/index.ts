import UserRepository from "@/backend/user/repositoryUser";
import { NextApiRequest, NextApiResponse } from "next";

//Método de salvar o usuário
const handler = async(req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const users = await UserRepository.getAll();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar usuários'});
        }
    } else {
        res.status(405).json({ error: 'Método não permitido' });
    }
};

export default handler;