import { PartialType } from '@nestjs/mapped-types';
import { CreateOptionDto } from './create-option.dto';

// eslint-disable-next-line prettier/prettier
export class DeleteScenarioDto extends PartialType(CreateOptionDto) {}