import inquirer from 'inquirer';
import { ExamplesFactory } from './ExamplesFactory.js';

export enum AvailableChoices {
  TEMPLATE = 'Template',
  DECORATOR = 'Decorator - Anexador de Conteúdo',
  ADAPTER = 'Adapter',
  STRATEGYDECORATOR = 'Strategy e Decorator - Filtro de avaliação',
}
export default class MainMenu {
  constructor() {
    this.run();
  }

  async run() {
    const pick: Record<'mainMenu', AvailableChoices> = await inquirer.prompt({
      name: 'mainMenu',
      type: 'list',
      message: 'Selecione uma opção.\n',
      choices: Object.values(AvailableChoices),
    });

    console.clear();

    const client = new ExamplesFactory(pick.mainMenu).createClient();

    client.run();
  }
}
