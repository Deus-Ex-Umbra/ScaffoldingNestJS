import { PartialType } from '@nestjs/mapped-types';
import { CreateNivelesAcademicosTramitesDocumentoDto } from './create-niveles-academicos-tramites-documento.dto';

export class UpdateNivelesAcademicosTramitesDocumentoDto extends PartialType(CreateNivelesAcademicosTramitesDocumentoDto) {}