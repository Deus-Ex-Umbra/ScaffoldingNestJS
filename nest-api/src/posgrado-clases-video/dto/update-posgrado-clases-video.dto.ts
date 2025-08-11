import { PartialType } from '@nestjs/mapped-types';
import { CreatePosgradoClasesVideoDto } from './create-posgrado-clases-video.dto';

export class UpdatePosgradoClasesVideoDto extends PartialType(CreatePosgradoClasesVideoDto) {}