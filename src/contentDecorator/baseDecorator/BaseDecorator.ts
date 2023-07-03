import Attachment from '../interface/Attachment.js';

export default class BaseDecorator implements Attachment {
  protected wrappee: Attachment;

  constructor(content: Attachment) {
    this.wrappee = content;
  }

  attach(): string {
    return this.wrappee.attach();
  }
}
