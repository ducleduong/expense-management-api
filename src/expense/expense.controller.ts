import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { CreateExpenseDto } from './dto/create-expense.dto';

@Controller('expense')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Post()
  async create(@Body() createExpenseDto: CreateExpenseDto) {
    return await this.expenseService.create(createExpenseDto);
  }

  @Get()
  async findAll() {
    return await this.expenseService.findAll();
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.expenseService.remove(id);
  }
}
