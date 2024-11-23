import * as bcrypt from 'bcrypt';
import { Controller, Post, Body, Req} from "@nestjs/common";
import { Request, Response } from 'express';

import { UserService } from "./user.service";
import { CreateUserDto } from "src/dto/create-user.dto";
import { LoginUserDto } from 'src/dto/login-user.dto';

@Controller({})
export class UserController {

    constructor (private userService: UserService) {}

    // Endpoint para iniciar sesión
    @Post('/gamez/login')
    async login(@Body() body: LoginUserDto, @Req() req: Request) {
        // Buscar el usuario
        const user = await this.userService.login(body.username);

        if(!user) {
            return { session: false, message: 'El usuario no existe' };
        }

        // Comparar contraseñas
        const isPasswordValid = await bcrypt.compare(body.password, user.password);

         // Si la contraseña no es válida, lanzar un error
         if (!isPasswordValid) {
            return { session: false, message: 'El usuario no existe' };
        }

        // Guardar información del usuario en la sesión
        req.session.user = {
            username: user.username,
            role: user.role,
        };

        // Si las credenciales son válidas, retornar un mensaje de éxito
        return { session: true, message: 'Inicio de sesión exitoso'};
    }

    // Endpoint para registrar un usuario
    @Post('/gamez/register')
    async create(@Body() body: CreateUserDto) {
        // Encriptar la contraseña
        const saltRounds = 10; // Puedes ajustar el número de rondas según tus necesidades
        const hashedPassword = await bcrypt.hash(body.password, saltRounds);
        const data = {
            ...body,
            password: hashedPassword
        }

        // Verificar que se hizo el proceso
        if(!this.userService.create(data)) {
            return { result: false };
        }

        return { result: true };
    }

}