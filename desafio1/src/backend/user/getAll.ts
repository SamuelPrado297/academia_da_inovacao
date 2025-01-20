'use server'
import UserRepository from "./repositoryUser";

export default async function getAll() {
    return UserRepository.getAll()
}