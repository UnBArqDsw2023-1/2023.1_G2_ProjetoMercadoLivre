import { Container } from 'inversify';
import MainMenu, { AvailableChoices } from './MainMenu.js';
import { ClientsToken } from './ExamplesFactory.js';
import TemplateClient from './template/TemplateClient.js';
import AdapterClient from './adapter/AdapterClient.js';
import ContentDecoratorClient from './contentDecorator/ContentDecoratorClient.js';
import { Client } from './interfaces/Client.js';
export const container = new Container();

container
  .bind<Client>(ClientsToken)
  .to(TemplateClient)
  .whenTargetNamed(AvailableChoices.TEMPLATE);

container
  .bind<Client>(ClientsToken)
  .to(AdapterClient)
  .whenTargetNamed(AvailableChoices.ADAPTER);

container
  .bind<Client>(ClientsToken)
  .to(ContentDecoratorClient)
  .whenTargetNamed(AvailableChoices.DECORATOR);

new MainMenu();
