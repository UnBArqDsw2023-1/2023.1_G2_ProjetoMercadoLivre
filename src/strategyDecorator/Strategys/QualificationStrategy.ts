import Avaliation from '../Avaliation.js';
import FilterStrategy from '../interface/FilterStrategy.js';

export default interface QualificationStrategy extends FilterStrategy {
  filter(): Avaliation[];
}
