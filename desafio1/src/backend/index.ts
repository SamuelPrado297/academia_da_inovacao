import createUser from "./user/createUser"
import getAll from "./user/getAll"
import eraseUser from "./user/deleteUser"
import updateUser from "./user/update"

//Padrão Facade
export default class Backend {
    static readonly users = {
        create: createUser,
        get: getAll,
        update: updateUser, 
        delete: eraseUser,
    }
}