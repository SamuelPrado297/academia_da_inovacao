import { NestFactory } from "@nestjs/core";
import { UserModule } from "./modules/user/user.module";

async function bootstrap() {
    const app = await NestFactory.create(UserModule);
    app.enableCors() //Permite requisições CORS, permitindo que o back-end e o front-end (caso estejam rodando em portas diferentes) consigam interagir sem bloqueios
    await app.listen(process.env.PORT ?? 4000);
}

bootstrap();