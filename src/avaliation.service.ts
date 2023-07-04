import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AvaliationService {
  constructor(private prisma: PrismaService) {}

  async findAllAvaliation() {
    return this.prisma.avaliation.findMany();
  }

  async findOneAvaliation(id: string) {
    return this.prisma.avaliation.findUnique({
      where: { idAvaliation: id },
    });
  }

  async createAvaliation(data: {
    id: string;
    rating: number;
    comment: string;
  }) {
    return this.prisma.avaliation.create({
      data: {
        classification: 6,
        idComment: 1,
        avaliationDate: 'Teste',
        idAvaliation: 'Teste',
        idBuyer: 1,
        idSeller: 1,
      },
    });
  }

  async update(
    id: string,
    data: { id: string; rating: number; comment: string }
  ) {
    await this.prisma.avaliation.update({
      where: { idAvaliation: id },
      data: {
        avaliationDate: new Date(),
        classification: 1,
        idAvaliation: '1',
        idBuyer: 1,
        idComment: 1,
        idSeller: 1,
      },
    });
    return this.prisma.avaliation.findUnique({
      where: { idAvaliation: id },
    });
  }

  async remove(id: string): Promise<void> {
    await this.prisma.avaliation.delete({
      where: { idAvaliation: id },
    });
  }
}
