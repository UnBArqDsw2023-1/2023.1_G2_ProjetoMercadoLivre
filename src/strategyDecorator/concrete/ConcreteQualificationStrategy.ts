import Avaliation from '../Avaliation.js';
import QualificationStrategy from '../Strategys/QualificationStrategy.js';

export default class ConcreteQualificationStrategy
  implements QualificationStrategy
{
  avaliations: Avaliation[];
  constructor(avaliations: Avaliation[]) {
    this.avaliations = avaliations;
  }

  filter(): Avaliation[] {
    return this.avaliations;
  }
}
