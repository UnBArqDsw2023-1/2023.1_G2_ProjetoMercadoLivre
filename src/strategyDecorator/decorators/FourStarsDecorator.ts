import Avaliation from '../Avaliation';
import BaseQualificationDecorator from '../baseDecorator/BaseQualificationDecorator.js';

export default class FiveStarsDecorator extends BaseQualificationDecorator {
  filter(): Avaliation[] {
    const avaliations = super
      .filter()
      .filter((avaliation) => avaliation.classification === 4);
    return avaliations;
  }
}
