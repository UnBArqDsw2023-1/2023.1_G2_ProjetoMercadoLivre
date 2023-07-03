import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evaluation } from './evaluation.entity';

@Injectable()
export class EvaluationService {
  constructor(
    @InjectRepository(Evaluation)
    private readonly evaluationRepository: Repository<Evaluation>,
  ) {}

  async findAll(): Promise<Evaluation[]> {
    return this.evaluationRepository.find();
  }

  async findOne(id: number): Promise<Evaluation> {
    return this.evaluationRepository.findOne(id);
  }

  async create(evaluation: Evaluation): Promise<Evaluation> {
    return this.evaluationRepository.save(evaluation);
  }

  async update(id: number, evaluation: Evaluation): Promise<Evaluation> {
    await this.evaluationRepository.update(id, evaluation);
    return this.evaluationRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.evaluationRepository.delete(id);
  }
}
