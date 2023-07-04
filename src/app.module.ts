import { Module } from '@nestjs/common';
import { EvaluationModule } from './avaliation.module';
import { PrismaService } from './prisma.service';
import { AvaliationController } from './avaliation.controller';

@Module({
  imports: [EvaluationModule],
  controllers: [AvaliationController],
  providers: [PrismaService],
})
export class AppModule {}
