import Attachment from '../interface/Attachment.js';

export class ConcreteAttachment implements Attachment {
  attach(): string {
    return 'Arquivo Anexado';
  }
}
//Seu conteúdo foi anexado com sucesso pelo Anexador Base
