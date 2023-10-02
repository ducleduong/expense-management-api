import { Type } from '@prisma/client';
import { IsEnum, IsOptional } from 'class-validator';

export class GetExpensesDto {
  @IsEnum(Type)
  @IsOptional()
  type?: Type;
}
