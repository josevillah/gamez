import { IsNotEmpty, IsString, MinLength, IsNumber } from 'class-validator';

export class CreateUserDto {
    
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;

    @IsNotEmpty()
    @IsNumber()
    role: number;
}