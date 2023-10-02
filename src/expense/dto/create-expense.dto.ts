import { Type } from '@prisma/client';
import { IsDate, IsEnum, IsInt, IsString, Max, Min } from 'class-validator';

export class CreateExpenseDto {
  @IsString()
  @Max(50)
  @Min(1)
  title: string;

  @IsInt()
  amount: number;

  @IsEnum(Type)
  type: Type;

  @IsDate()
  date: Date;

  @IsString()
  category: string;

  @IsString()
  @Max(20)
  description: string;
}
