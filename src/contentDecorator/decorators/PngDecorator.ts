import BaseDecorator from '../baseDecorator/BaseDecorator.js';

export default class PngDecorator extends BaseDecorator {
  attach(): string {
    return `Foi anexado um vídeo PNG / ${super.attach()}`;
  }
}
