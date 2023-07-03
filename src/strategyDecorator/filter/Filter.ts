import Avaliation from '../Avaliation.js';
import FilterStrategy from '../interface/FilterStrategy.js';

export default class Filter {
  protected filterStrategy: FilterStrategy;
  protected avaliations: Avaliation[];
  constructor(filter: FilterStrategy, avaliations: Avaliation[]) {
    this.filterStrategy = filter;
    this.avaliations = avaliations;
  }

  setStrategy(filterStrategy: FilterStrategy): void {
    this.filterStrategy = filterStrategy;
  }

  filterAvaliation(): void {
    const result = this.filterStrategy.filter(this.avaliations);
    console.log(result);
  }
}
