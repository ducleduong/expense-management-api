import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { PrismaClient } from '@prisma/client';
import { plainToInstance } from 'class-transformer';
import { Expense } from './entities/expense.entity';
import { GetExpensesDto } from './dto/get-expenses.dto';

@Injectable()
export class ExpenseService {
  constructor(private prismaService: PrismaClient) {}

  async create(body: CreateExpenseDto) {
    try {
      const expense = await this.prismaService.expense.create({
        data: body,
      });

      return plainToInstance(Expense, expense);
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async findAll(query: GetExpensesDto) {
    try {
      const expenses = await this.prismaService.expense.findMany({
        where: {
          type: query.type,
        },
        orderBy: {
          createdAt: 'desc',
        },
      });

      return expenses;
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async remove(id: string) {
    try {
      const expense = await this.prismaService.expense.findUnique({
        where: {
          id,
        },
      });

      if (!expense) throw new NotFoundException();

      await this.prismaService.expense.delete({
        where: {
          id,
        },
      });

      return { message: 'Expense Deleted' };

      return plainToInstance(Expense, expense);
    } catch {
      throw new InternalServerErrorException();
    }
  }
}
