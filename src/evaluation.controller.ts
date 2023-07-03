import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Evaluation } from './evaluation.entity';
import { EvaluationService } from './evaluation.service';

@Controller('evaluations')
export class EvaluationController {
  constructor(private readonly evaluationService: EvaluationService) {}

  @Get()
  findAll(): Promise<Evaluation[]> {
    return this.evaluationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Evaluation> {
    return this.evaluationService.findOne(id);
  }

  @Post()
  create(@Body() evaluation: Evaluation): Promise<Evaluation> {
    return this.evaluationService.create(evaluation);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() evaluation: Evaluation,
  ): Promise<Evaluation> {
    return this.evaluationService.update(id, evaluation);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.evaluationService.remove(id);
  }
}
