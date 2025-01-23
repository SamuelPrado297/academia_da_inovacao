'use server'
import UserRepository from "./repositoryUser"
import { User } from "@/share/model/user";

export default async function updateUser(id: number, user: Partial<User>) {
    return UserRepository.update(id, user);
}