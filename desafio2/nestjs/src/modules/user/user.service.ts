import { Injectable } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { CreateUserDto } from "src/shared/create-user.dto";
import { UpdateUserDto } from "src/shared/update-user.dto";

@Injectable()
export class UserService {
    constructor(private userRepository: UserRepository) {}

    create(createUserDto: CreateUserDto) {
        return this.userRepository.create(createUserDto);
    }

    findAll() {
        return this.userRepository.findAll();
    }

    findOne(id: number) {
        return this.userRepository.findOne(id);
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return this.userRepository.update(id, updateUserDto);
    }

    remove(id: number) {
        return this.userRepository.remove(id);
    }
}