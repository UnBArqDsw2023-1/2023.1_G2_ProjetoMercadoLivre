import Avaliation from '../Avaliation';
import BaseQualificationDecorator from '../baseDecorator/BaseQualificationDecorator.js';

export default class ThreeStarsDecorator extends BaseQualificationDecorator {
  filter(): Avaliation[] {
    const avaliations = super
      .filter()
      .filter((avaliation) => avaliation.classification === 3);
    return avaliations;
  }
}
