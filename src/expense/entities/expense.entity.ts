import { Type } from '@prisma/client';
import { Expose } from 'class-transformer';

export class Expense {
  @Expose()
  id: string;

  @Expose()
  title: string;

  @Expose()
  amount: number;

  @Expose()
  type: Type;

  @Expose()
  date: Date;

  @Expose()
  category: string;

  @Expose()
  description: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
