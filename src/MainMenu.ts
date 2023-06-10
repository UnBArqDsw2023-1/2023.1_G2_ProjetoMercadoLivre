import inquirer from 'inquirer';
import ContentDecoratorClient from './contentDecorator/ContentDecoratorClient.js';
import TemplateClient from './template/TemplateClient.js';

enum AvailableChoices {
  TEMPLATE = 'template',
  OBSERVER = 'observer',
  DECORATOR = 'Decorator - Anexador de Conteúdo',
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

    switch (pick.mainMenu) {
      case AvailableChoices.OBSERVER:
        break;
      case AvailableChoices.TEMPLATE:
        new TemplateClient();
        break;
      case AvailableChoices.DECORATOR:
        new ContentDecoratorClient();
        break;
      default:
        break;
    }
  }
}
