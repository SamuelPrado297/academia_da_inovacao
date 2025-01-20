'use server'
import Id from "@/share/utils/id";
import { User } from "@/share/model/user";
import UserRepository from "./repositoryUser";

export default async function saveUser(user:Partial<User>) {
    const newUser = {
        ...user,
        id: user.id ?? Id.new,
    }

    return UserRepository.save(newUser as User)
}