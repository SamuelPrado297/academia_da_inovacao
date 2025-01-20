import { NextApiRequest, NextApiResponse } from 'next';
import UserRepository from '@/backend/user/repositoryUser';

const handlerDelete = async(req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;

    if (!id || isNaN(Number(id))) {
        return res.status(400).json({ error: 'ID Inválido' }); //Verfica se o ID é compatível
    }

    if (req.method === 'DELETE') {
        try {
            await UserRepository.delete(Number(id));
            res.status(204).end(); //Retorna um status 204 (sem conteúdo) após deletar
        } catch (error) {
            res.status(404).json({ error: 'Erro ao deletar o usuário '});
        }
    } else {
        res.status(405).json({ error: 'Método não permitido' });
    }
};

export default handlerDelete;
