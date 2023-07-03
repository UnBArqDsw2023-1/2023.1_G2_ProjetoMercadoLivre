import Attachment from '../abstract/Attachment.js';

export default class Image extends Attachment {
  protected compressData(): void {
    console.log('Compressão especifica de Imagem');
  }

  protected detectExplicitContent(): void {
    console.log('Passando pelo detector de conteúdo explícito de Imagem');
  }
}
