/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { CreateScenarioUseCase } from './use-cases/create-scenario.use-case';
import { ListScenarioUsecases } from './use-cases/list-scenario.use-cases';
import {
  DeleteScenarioUseCase,
  FindOneScenarioUseCase,
  UpdateScenarioUseCase,
} from './use-cases';

@Injectable()
export class ScenarioService {
  constructor(
    private readonly createScenarioUseCase: CreateScenarioUseCase,
    private readonly listScenarioUseCases: ListScenarioUsecases,
    private readonly deleteScenarioUseCase: DeleteScenarioUseCase,
    private readonly findonescenarioUseCase: FindOneScenarioUseCase,
    private readonly updateScenarioUseCase: UpdateScenarioUseCase,
  ) {}

  create(data: CreateScenarioDto) {
    return this.createScenarioUseCase.execute(data);
  }

  findAll() {
    return this.listScenarioUseCases.execute();
  }

  findOne(id: string) {
    return this.findonescenarioUseCase.execute(id);
  }

  update(id: string, updateScenarioDto: UpdateScenarioDto) {
    return this.updateScenarioUseCase.execute(id, updateScenarioDto);
  }

  remove(id: string) {
    return this.deleteScenarioUseCase.execute(id);
  }
}
