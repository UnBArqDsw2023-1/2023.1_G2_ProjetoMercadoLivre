import Attachment from '../abstract/Attachment.js';

export default class Video extends Attachment {
  protected compress(): void {
    console.log('Compressão especifica de Vídeo');
  }
}
