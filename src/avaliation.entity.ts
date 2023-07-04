import { Prisma } from '@prisma/client';

export class Avaliation {
  id: number;
  rating: number;
  comment: string;

  constructor(data: {id: number, rating: number, comment: string}) {
    this.id = data.id;
    this.rating = data.rating;
    this.comment = data.comment;
  }
}
