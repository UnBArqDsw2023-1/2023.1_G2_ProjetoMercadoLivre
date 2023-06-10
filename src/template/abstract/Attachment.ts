export default abstract class Attachment {
  public templateMethod(): void {
    this.compress();
    this.upload();
  }

  protected upload(): void {
    console.log('Upload geral de Attachment');
  }

  protected abstract compress(): void;
}
