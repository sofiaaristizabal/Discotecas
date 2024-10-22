import { IsString,  MinLength, MaxLength, IsNotEmpty,   IsUrl, IsOptional } from "class-validator";
import { CreateUsuarioDto } from "src/usuarios/dto/create-usuario.dto";

export class CreateDiscotecaDto extends CreateUsuarioDto{

    @IsString()
    @MinLength(5)
    @MaxLength(50)
    direccion:string;

    @IsString()
    @MaxLength(300)
    @IsOptional()
    descripcion:string;

    @IsString()
    @IsOptional()
    horarios:string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    contacto:string;

    @IsString()
    @IsUrl( {}, { message: 'Invalid URL format' })
    @IsOptional()
    redSocial:string;

    @IsString()
    @IsOptional()
    menu:string;
}
