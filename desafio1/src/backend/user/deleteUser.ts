'use server'
import UserRepository from "./repositoryUser";

export default async function eraseUser(id: number) {
     return UserRepository.delete(id)
}