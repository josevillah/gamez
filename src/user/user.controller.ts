import * as bcrypt from 'bcrypt';
import { Controller, Post, Body, Put, Delete, HttpException, HttpStatus } from "@nestjs/common";

import { UserService } from "./user.service";
import { CreateUserDto } from "src/dto/create-user.dto";
import { LoginUserDto } from 'src/dto/login-user.dto';

@Controller({})
export class UserController {

    constructor (private userService: UserService) {}

    // Endpoint para iniciar sesión
    @Post('/gamez/login')
    async login(@Body() body: LoginUserDto) {
        // Buscar el usuario
        const user = await this.userService.login(body.username);

        // Verificar si el usuario existe
        if (!user) {
            throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
        }

        // Comparar contraseñas
        const isPasswordValid = await bcrypt.compare(body.password, user.password);

         // Si la contraseña no es válida, lanzar un error
         if (!isPasswordValid) {
            throw new HttpException('Credenciales inválidas', HttpStatus.UNAUTHORIZED);
        }

        // Si las credenciales son válidas, retornar un mensaje de éxito
        return { message: 'Inicio de sesión exitoso' };
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