import { IsString, IsDateString, MinLength, MaxLength, IsIn } from "class-validator";
import { CreateUsuarioDto } from "src/usuarios/dto/create-usuario.dto";

export class CreateConsumidoreDto extends CreateUsuarioDto{
   
    @IsString()
    @IsIn(['cedula de ciudadania', 'cedula de extranjeria', 'documento de identidad'])
    tipoDeDocumento:string;

    @IsString()
    @MinLength(8)
    @MaxLength(10)
    documento:string; 

    @IsDateString()
    dateOfBirth:string;


}
