//Arquivo Controller - Responsável por lidar com as requisições HTTP(GET, POST, PUT, PATCH, DELETE)
import { Controller, Get, Post, Body, Param, Patch, Delete } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "src/shared/create-user.dto";
import { UpdateUserDto } from "src/shared/update-user.dto";

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id')id: number) {
        return this.userService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(+id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.userService.remove(+id);
    }
}