import { IsString, IsOptional, IsNumber } from 'class-validator';

export class UpdateUserDto {

    @IsString()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    username?: string;

    @IsString()
    @IsOptional()
    password?: string;

    @IsOptional()
    @IsNumber()
    role?: number;
}