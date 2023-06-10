import Attachment from '../abstract/Attachment.js';

export default class Image extends Attachment {
  protected compress(): void {
    console.log('Compressão especifica de Imagem');
  }
}
