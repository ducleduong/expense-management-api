import { Module } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ExpenseController } from './expense.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [ExpenseController],
  providers: [ExpenseService, PrismaClient],
})
export class ExpenseModule {}
