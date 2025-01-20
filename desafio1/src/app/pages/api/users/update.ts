import UserRepository from "@/backend/user/repositoryUser";
import { NextApiRequest, NextApiResponse } from "next";

const handlerUpdate = async(req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'PATCH') { //Métodos HTTP para Update = PUT - Usado para atualizar todo um conjunto / PATCH - Usado para atualizar parcialmente um conjunto
        try {
            const user = req.body //os dados vêm do Body da requisição
            const updatedUser = await UserRepository.save(user);
            res.status(201).json(updatedUser); //Retorna o usuário criado/atualizado
        } catch(error) {
            res.status(500).json({ error: 'Erro ao salvar o usuário' });
        }
    } else {
        res.status(405).json({ error: 'Método não permitido' });
    }
};

export default handlerUpdate;