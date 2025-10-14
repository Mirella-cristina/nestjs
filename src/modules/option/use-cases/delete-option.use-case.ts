import { Injectable, Logger } from '@nestjs/common';
import { DeleteRepositoryOption } from '../repository/delete-repository.option';

@Injectable()
export class DeleteOptionUseCase {
  prisma: any;
  constructor(
    private readonly deleteRepositoryOption: DeleteRepositoryOption,
    private readonly logger: Logger,
  ) {}

  async execute(id: string) {
    try {
      return await this.deleteRepositoryOption.delete(id);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
