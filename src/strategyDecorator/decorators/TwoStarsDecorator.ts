import Avaliation from '../Avaliation';
import BaseQualificationDecorator from '../baseDecorator/BaseQualificationDecorator.js';

export default class TwoStarsDecorator extends BaseQualificationDecorator {
  filter(): Avaliation[] {
    const avaliations = super
      .filter()
      .filter((avaliation) => avaliation.classification === 2);
    return avaliations;
  }
}
