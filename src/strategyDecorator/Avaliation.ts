export default class Avaliation {
  public avaliationDate: Date;
  public classification: number;
  public votesQtd: number;

  constructor(avaliationDate: Date, classification: number, votesQtd: number) {
    this.avaliationDate = avaliationDate;
    this.classification = classification;
    this.votesQtd = votesQtd;
  }
}
