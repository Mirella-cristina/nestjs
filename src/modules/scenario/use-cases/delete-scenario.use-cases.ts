/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { removeScenarioRepository } from '../repository/delete-scenario.repository';

@Injectable()
export class removeScenarioUseCase {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  remove(id: string) {
    throw new Error('Method not implemented.');
  }

  prisma: any;
  constructor(
    private readonly RemoveScenarioRepository: removeScenarioRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string) {
    try {
      return await this.RemoveScenarioRepository.remove(id);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
