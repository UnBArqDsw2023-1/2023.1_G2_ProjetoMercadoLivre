import { Video, Attachment, Imagem } from './Template.js';

const clientCode = (Attachment: Attachment) => {
  Attachment.templateMethod();
};

export default function run() {
  //   clientCode(new Video());

  clientCode(new Imagem());
}
