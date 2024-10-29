import { IsString, IsDateString, MinLength, MaxLength, IsIn, IsEmail, Matches} from "class-validator";
import { CreateUsuarioDto } from "src/usuarios/dto/create-usuario.dto";

export class CreateConsumidoreDto extends CreateUsuarioDto{

    @IsEmail()
    email:string;

    @IsString()
    @MinLength(12)
    @MaxLength(50)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        { message: 'password too weak' })
    password:string;
    
    @IsString()
    @MinLength(1)
    fullName:string;

    @IsString()
    @MinLength(7)
    phoneNumber:string; 
   
    @IsString()
    @IsIn(['cedula de ciudadania', 'cedula de extranjeria'])
    tipoDeDocumento:string;

    @IsString()
    @MinLength(8)
    @MaxLength(10)
    documento:string; 

    @IsDateString()
    dateOfBirth:string;


}
