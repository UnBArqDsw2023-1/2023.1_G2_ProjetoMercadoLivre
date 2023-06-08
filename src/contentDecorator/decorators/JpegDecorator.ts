import BaseDecorator from '../baseDecorator/BaseDecorator.js';

export default class JpegDecorator extends BaseDecorator {
  attach(): string {
    return `Foi anexado uma imagem Jpeg / ${super.attach()}`;
  }
}
