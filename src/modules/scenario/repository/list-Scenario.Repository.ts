/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {  Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.database';

@Injectable()
export class ListScenarioRepository {
  execute() {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly prisma: PrismaService) {}
}
