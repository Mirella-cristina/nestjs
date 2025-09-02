import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class ListScenarioRepository {
  constructor(private readonly prisma: PrismaService) {}

  async list() {
    return this.prisma.scenario.findMany();   // deve buscar todos os scenarios
  }
}
