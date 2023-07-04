export class Avaliation {
  id: string;
  rating: number;
  comment: string;

  constructor(data: { id: string; rating: number; comment: string }) {
    this.id = data.id;
    this.rating = data.rating;
    this.comment = data.comment;
  }
}
