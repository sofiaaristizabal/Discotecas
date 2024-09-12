import { IsString,  MinLength, MaxLength, IsNotEmpty,   IsUrl } from "class-validator";
import { CreateUsuarioDto } from "src/usuarios/dto/create-usuario.dto";

export class CreateDiscotecaDto extends CreateUsuarioDto{

    @IsString()
    @MinLength(5)
    @MaxLength(50)
    direccion:string;

    @IsString()
    @MaxLength(300)
    descripcion:string;

    @IsString()
    horarios:string;

    @IsString()
    genero:string;

    @IsString()
    @IsNotEmpty()
    contacto:string;

    @IsString()
    @IsUrl( {}, { message: 'Invalid URL format' })
    redSocial:string;

    @IsString()
    menu:string;
}
