import { ConcreteAttachment } from './concrete/ConcreteAttachment.js';
import JpegDecorator from './decorators/JpegDecorator.js';
import Mp4Decorator from './decorators/Mp4Decorator.js';
import PngDecorator from './decorators/PngDecorator.js';
import Attachment from './interface/Attachment.js';

export default class ContentDecoratorClient {
  constructor() {
    this.run();
  }

  clientCode(component: Attachment): void {
    console.log(`RESULTADO: ${component.attach()}`);
  }

  run(): void {
    const defaultContent = new ConcreteAttachment();
    this.clientCode(defaultContent);
    console.log('\n');
    const jpeg = new JpegDecorator(defaultContent);
    this.clientCode(jpeg);

    console.log('\n');

    const png = new PngDecorator(defaultContent);
    this.clientCode(png);

    console.log('\n');

    const mp4 = new Mp4Decorator(defaultContent);
    this.clientCode(mp4);

    console.log('\n');

    const mp4Png = new Mp4Decorator(png);
    const jpegMp4Png = new JpegDecorator(mp4Png);
    this.clientCode(jpegMp4Png);
  }
}
