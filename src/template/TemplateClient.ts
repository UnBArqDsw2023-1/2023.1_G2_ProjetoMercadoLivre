import Attachment from './abstract/Attachment.js';
import Image from './concrete/Image.js';
import Video from './concrete/Video.js';

export default class TemplateClient {
  constructor() {
    this.run();
  }

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
