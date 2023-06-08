import BaseDecorator from '../baseDecorator/BaseDecorator.js';

export default class Mp4Decorator extends BaseDecorator {
  attach(): string {
    return `Foi anexado um vídeo MP4 / ${super.attach()}`;
  }
}
