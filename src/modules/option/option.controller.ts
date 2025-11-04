import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OptionService } from './option.service';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { create } from 'domain';

@ApiTags('Option')
@Controller()
export class optioncontroller {
  constructor(private readonly optionService: OptionService, createOptionDto) {}
}
  @Post('scenarios/:scenarioId/options')
  @ApiOperation({ summary: 'Cria uma opção vinculada a um cenário'})
  @ApiParam ({
    name: 'scenarioId',
    description:'Identificador do cenário atual ao qual a opção pertence'
  })
  @ApiBody({ type: CreateOptionDto})
  @ApiCreatedResponse({ description: 'Opção criada com sucesso.'})
    create (
      @Param('scenarioId') scenarioId: string,)
      @Body() CreateOptionDto: CreateOptionDto);
      return this.optionService.create(scenarioId, CreateOptionDto);


    @Get('scenarios/:scenarioId/options')
    @ApiOperation({ summary: 'Lista as opções de um cenário.'})
    @ApiParam({
      name: ''
    })
      

@Controller('option')
export class OptionController {
  constructor(private readonly OptionService: OptionService) {}

  @Post()
  create(@Body() CreateOptionDto: CreateOptionDto) {
    return this.OptionService.create(CreateOptionDto);
  }

  @Get()
  findAll() {
    return this.OptionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.OptionService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateOptionDto: UpdateOptionDto) {
    return this.OptionService.update(id, UpdateOptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.OptionService.remove(id);
  }
}
