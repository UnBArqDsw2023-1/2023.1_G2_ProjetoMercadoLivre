import { injectable } from 'inversify';
import { Client } from '../interfaces/Client.js';
import Attachment from './abstract/Attachment.js';
import Image from './concrete/Image.js';
import Video from './concrete/Video.js';

@injectable()
export default class TemplateClient implements Client {
  clientCode = (Attachment: Attachment) => {
    Attachment.templateMethod();
  };

  run(): void {
    this.clientCode(new Image());
    console.log('\n');
    this.clientCode(new Video());
    console.log('\n');
  }
}
