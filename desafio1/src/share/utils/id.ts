//Cria um ID para cada novo usuário
export default class Id {
    static get new(): number {
        return Math.floor(Math.random() * 500) //Cria um número aleatório de 0 a 500
    }
}
