import { PartialType } from '@nestjs/mapped-types';
import { CreateTramitesDocumentoDto } from './create-tramites-documento.dto';

export class UpdateTramitesDocumentoDto extends PartialType(CreateTramitesDocumentoDto) {}