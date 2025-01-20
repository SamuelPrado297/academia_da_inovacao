//dto - Define a estrutura dos dados que serão lidados
import { IsString, IsEmail, IsNumber } from "@nestjs/class-validator"; //class-validator é um dos pilares para o funcionamento do código Nest

export class CreateUserDto {
    @IsString()
    name: string;

    @IsString()
    cpf: string;

    @IsString()
    phone: string;

    @IsEmail()
    email: string;

    @IsString()
    nacionality: string;
}