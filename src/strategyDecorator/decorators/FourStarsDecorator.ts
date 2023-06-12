import Avaliation from '../Avaliation';
import BaseQualificationDecorator from '../baseDecorator/BaseQualificationDecorator.js';

export default class FourStarsDecorator extends BaseQualificationDecorator {
  filter(): Avaliation[] {
    const avaliations = super
      .filter()
      .filter((avaliation) => avaliation.classification === 4);
    return avaliations;
  }
}
