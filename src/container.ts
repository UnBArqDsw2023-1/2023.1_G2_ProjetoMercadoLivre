import { Container, ContainerModule, interfaces } from 'inversify';
import { AvailableChoices } from './MainMenu.js';
import { ClientsToken } from './ExamplesFactory.js';
import TemplateClient from './template/TemplateClient.js';
import AdapterClient from './adapter/AdapterClient.js';
import ContentDecoratorClient from './contentDecorator/ContentDecoratorClient.js';
import { Client } from './interfaces/Client.js';

export const container = new Container();

export const examplesModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<Client>(ClientsToken)
    .to(TemplateClient)
    .whenTargetNamed(AvailableChoices.TEMPLATE);

  bind<Client>(ClientsToken)
    .to(AdapterClient)
    .whenTargetNamed(AvailableChoices.ADAPTER);

  bind<Client>(ClientsToken)
    .to(ContentDecoratorClient)
    .whenTargetNamed(AvailableChoices.DECORATOR);
});
