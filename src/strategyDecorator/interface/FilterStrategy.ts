import Avaliation from '../Avaliation.js';

export default interface FilterStrategy {
  filter(avaliations: Avaliation[]): Avaliation[];
}
