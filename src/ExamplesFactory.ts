import 'reflect-metadata';
import { AvailableChoices } from './MainMenu.js';
import { Client } from './interfaces/Client.js';
import { container } from './container.js';

export const ClientsToken = Symbol.for('ClientsToken');

export class ExamplesFactory {
  private readonly client: Client;
  public constructor(private readonly type: AvailableChoices) {
    this.client = container.getNamed<Client>(ClientsToken, type);
  }

  public createClient(): Client {
    return this.client;
  }
}
