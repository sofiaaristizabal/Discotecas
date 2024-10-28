import { PartialType } from '@nestjs/mapped-types';
import { CreateDiscotecaDto } from './create-discoteca.dto';
import { IsString } from 'class-validator';

export class UpdateDiscotecaDto extends PartialType(CreateDiscotecaDto) {

    @IsString()
    direccion: string;

    @IsString()
    descripcion: string;

    @IsString()
    horarios: string;

    @IsString()
    contacto: string;

    @IsString()
    redSocial: string; 

    @IsString()
    profileImage: string; 


}
