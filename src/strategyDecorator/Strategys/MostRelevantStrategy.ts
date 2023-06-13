import Avaliation from '../Avaliation.js';
import FilterStrategy from '../interface/FilterStrategy.js';

export default class MostRelevantStrategy implements FilterStrategy {
  filter(avaliations: Avaliation[]): Avaliation[] {
    return avaliations.sort((a, b) => b.votesQtd - a.votesQtd);
  }
}
