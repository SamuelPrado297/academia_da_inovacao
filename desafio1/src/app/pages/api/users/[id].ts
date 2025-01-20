import UserRepository from "@/backend/user/repositoryUser";
import { NextApiRequest, NextApiResponse } from "next";

//Pega o usuário pelo ID dele
const handlerId = async(req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;

    if (req.method === 'GET') {
        try {
            const users = await UserRepository.getById(Number(id));
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar usuários'});
        }
    } else {
        res.status(405).json({ error: 'Método não permitido' });
    }
};

export default handlerId;