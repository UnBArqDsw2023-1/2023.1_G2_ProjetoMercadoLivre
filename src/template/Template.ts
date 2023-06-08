export abstract class Attachment {
  public templateMethod(): void {
    this.compress();
    this.upload();
  }

  protected upload(): void {
    console.log('Upload geral de Attachment');
  }

  protected abstract compress(): void;
}

export class Video extends Attachment {
  protected compress(): void {
    console.log('Compressão especifica de Vídeo');
  }
}

export class Imagem extends Attachment {
  protected compress(): void {
    console.log('Compressão especifica de Imagem');
  }
}
