import { injectable } from 'inversify';
import { Client } from '../interfaces/Client.js';
import Avaliation from './Avaliation.js';
import Filter from './filter/Filter.js';
import MostRelevantStrategy from './Strategys/MostRelevantStrategy.js';
import MostRecentlyStrategy from './Strategys/MostRecentlyStrategy.js';
import ConcreteQualificationStrategy from './concrete/ConcreteQualificationStrategy.js';
import FiveStarsDecorator from './decorators/FiveStarsDecorator.js';
import FourStarsDecorator from './decorators/FourStarsDecorator.js';
import ThreeStarsDecorator from './decorators/ThreeStarsDecorator.js';
import TwoStarsDecorator from './decorators/TwoStarsDecorator.js';

@injectable()
export default class StrategyDecoratorClient implements Client {
  run(): void {
    const avaliation1 = new Avaliation(new Date(2023, 6, 16), 5, 22);
    const avaliation2 = new Avaliation(new Date(2022, 5, 1), 3, 10);
    const avaliation3 = new Avaliation(new Date(2021, 3, 10), 2, 5);
    const avaliation4 = new Avaliation(new Date(2020, 6, 16), 1, 2);
    const avaliation5 = new Avaliation(new Date(2019, 6, 16), 4, 80);

    const avaliationList: Avaliation[] = [
      avaliation1,
      avaliation2,
      avaliation3,
      avaliation4,
      avaliation5,
    ];

    console.log(
      '------------- Filtrando avaliação por relevancia ---------------'
    );

    const filter = new Filter(new MostRelevantStrategy(), avaliationList);
    filter.filterAvaliation();

    console.log(
      '------------- Filtrando avaliação mais recente ---------------'
    );
    filter.setStrategy(new MostRecentlyStrategy());
    filter.filterAvaliation();

    console.log(
      '--------------- Filtrando por qualificacao - 5 estrelas ------------------'
    );
    const concreteDecorator = new ConcreteQualificationStrategy(avaliationList);
    const fiveStarsDecorator = new FiveStarsDecorator(
      concreteDecorator,
      avaliationList
    );
    filter.setStrategy(fiveStarsDecorator);
    filter.filterAvaliation();

    console.log(
      '--------------- Filtrando por qualificacao - 4 estrelas ------------------'
    );
    const fourStarsDecorator = new FourStarsDecorator(
      concreteDecorator,
      avaliationList
    );
    filter.setStrategy(fourStarsDecorator);
    filter.filterAvaliation();

    console.log(
      '--------------- Filtrando por qualificacao - 3 estrelas ------------------'
    );
    const threeStarsDecorator = new ThreeStarsDecorator(
      concreteDecorator,
      avaliationList
    );
    filter.setStrategy(threeStarsDecorator);
    filter.filterAvaliation();

    console.log(
      '--------------- Filtrando por qualificacao - 2 estrelas ------------------'
    );
    const twoStarsDecorator = new TwoStarsDecorator(
      concreteDecorator,
      avaliationList
    );
    filter.setStrategy(twoStarsDecorator);
    filter.filterAvaliation();
  }
}
