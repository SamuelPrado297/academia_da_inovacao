import saveUser from "./user/saveUser"
import getAll from "./user/getAll"
import eraseUser from "./user/deleteUser"

//Padrão Facade
export default class Backend {
    static readonly users = {
        save: saveUser,
        get: getAll,
        delete: eraseUser,
    }
}