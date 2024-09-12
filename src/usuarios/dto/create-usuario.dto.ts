import { IsString, IsDateString, IsNotEmpty, IsEmail } from "class-validator";

export class CreateUsuarioDto {
    
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email:string; 

    @IsString()
    nombreCompleto:string;

} 
