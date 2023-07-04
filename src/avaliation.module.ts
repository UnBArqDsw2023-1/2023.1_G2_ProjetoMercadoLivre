import { Module } from '@nestjs/common';
import { AvaliationController } from './avaliation.controller';
import { AvaliationService } from './avaliation.service';
import { Avaliation } from './avaliation.entity';

@Module({
  imports: [],
  controllers: [AvaliationController],
  providers: [AvaliationService],
})
export class EvaluationModule {}
