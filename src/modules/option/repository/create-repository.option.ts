import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.database';
import { CreateOptionDto } from '../dto/create-option.dto';

@Injectable()
export class CreateOptionRepository {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateOptionDto) {
    const option = await this.prisma.option.create({ data });
    return option;
  }
}
