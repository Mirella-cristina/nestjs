/* eslint-disable prettier/prettier */
import { Injectable, Logger } from "@nestjs/common";
import { ListScenarioRepository } from "../repository";

@Injectable ()
export class ListScenarioUsecases {
    
    constructor(
        private readonly listScenarioRepository: ListScenarioRepository,
        private readonly logger: Logger,
    ) {}

    async execute () {
        try {
            const scenario = await this.listScenarioRepository.execute();
            return scenario;
        }
         catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}