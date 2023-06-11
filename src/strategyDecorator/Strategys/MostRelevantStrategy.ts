import Avaliation from '../Avaliation.js';
import FilterStrategy from '../interface/FilterStrategy.js';

export default class MostUsefulStrategy implements FilterStrategy {
  filter(avaliations: Avaliation[]): Avaliation[] {
    return avaliations.sort((a, b) => b.votesQtd - a.votesQtd);
  }
}
