import Avaliation from '../Avaliation.js';
import QualificationStrategy from '../Strategys/QualificationStrategy.js';

export default class BaseQualificationDecorator
  implements QualificationStrategy
{
  protected wrappee: QualificationStrategy;
  avaliations: Avaliation[];
  constructor(content: QualificationStrategy, avaliations: Avaliation[]) {
    this.wrappee = content;
    this.avaliations = avaliations;
  }

  filter(): Avaliation[] {
    return this.wrappee.filter();
  }
}
