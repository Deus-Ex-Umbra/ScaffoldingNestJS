import { PartialType } from '@nestjs/mapped-types';
import { Create{{ table.className }}Dto } from './create-{{ table.fileName }}.dto';

export class Update{{ table.className }}Dto extends PartialType(Create{{ table.className }}Dto) {}