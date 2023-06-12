import Avaliation from '../Avaliation.js';
import FilterStrategy from '../interface/FilterStrategy.js';

export default class MostRecentlyStrategy implements FilterStrategy {
  filter(avaliations: Avaliation[]): Avaliation[] {
    return avaliations.sort(
      (a, b) => b.avaliationDate.getTime() - a.avaliationDate.getTime()
    );
  }
}
