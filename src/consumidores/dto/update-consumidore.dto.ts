import { PartialType } from '@nestjs/mapped-types';
import { CreateConsumidoreDto } from './create-consumidore.dto';

export class UpdateConsumidoreDto extends PartialType(CreateConsumidoreDto) {}
