import { PartialType } from '@nestjs/mapped-types';
import { CreateUserEducationalHistoryDto } from './create-user-educational-history.dto';

export class UpdateUserEducationalHistoryDto extends PartialType(CreateUserEducationalHistoryDto) {}
