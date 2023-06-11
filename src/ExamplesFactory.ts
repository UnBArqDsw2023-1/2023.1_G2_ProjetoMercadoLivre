import 'reflect-metadata';
import { AvailableChoices } from './MainMenu.js';
import { Client } from './interfaces/Client.js';
import { container } from './index.js';

export const ClientsToken = Symbol.for('ClientsToken');

export class ExamplesFactory {
  public constructor(private readonly type: AvailableChoices) {
    this.type = type;
  }

  public createClient(): Client {
    return container.getNamed<Client>(ClientsToken, this.type);
  }
}
