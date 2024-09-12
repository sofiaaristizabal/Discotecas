import { PartialType } from '@nestjs/mapped-types';
import { CreateDiscotecaDto } from './create-discoteca.dto';

export class UpdateDiscotecaDto extends PartialType(CreateDiscotecaDto) {}
