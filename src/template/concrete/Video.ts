import Attachment from '../abstract/Attachment.js';

export default class Video extends Attachment {
  protected compressData(): void {
    console.log('Compressão especifica de Vídeo');
  }

  protected detectExplicitContent(): void {
    console.log('Passando pelo detector de conteúdo explícito de Vídeo');
  }
}
