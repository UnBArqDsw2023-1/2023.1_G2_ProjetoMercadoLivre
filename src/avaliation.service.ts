import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Avaliation } from './avaliation.entity';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AvaliationService {
  constructor(private prisma: PrismaService) {}

  async findAllAvaliation(): Promise<Avaliation[]> {
    return this.prisma.avaliation.findMany();
  }

  async findOneAvaliation(id: number): Promise<Avaliation> {
    return this.prisma.avaliation.findUnique({
      where: { id },
    });
  }

  async createAvaliation(data: {id: number, rating: number, comment: string}): Promise<Avaliation> {
    return this.prisma.avaliation.create({
      data,
    });
  }

  async update(id: number, data: {id: number, rating: number, comment: string}): Promise<Avaliation> {
    await this.prisma.avaliation.update({
      where: { id },
      data,
    });
    return this.prisma.avaliation.findUnique({
      where: { id },
    });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.avaliation.delete({
      where: { id },
    });
  }
}
