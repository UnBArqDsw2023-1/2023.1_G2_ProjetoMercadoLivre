export default abstract class Attachment {
  public templateMethod(): void {
    this.compressData();
    this.detectExplicitContent();
    this.upload();
  }

  protected upload(): void {
    console.log('Upload geral de Attachment');
  }

  protected abstract compressData(): void;
  protected abstract detectExplicitContent(): void;
}
