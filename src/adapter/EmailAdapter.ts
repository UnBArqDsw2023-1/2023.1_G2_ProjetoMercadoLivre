import EmailService from './EmailService.js';

export type EmailPayload = {
  sellerName: string;
  productName: string;
};
interface EmailAdapter {
  sendEmailToUser(email: string, subject: string, payload: EmailPayload): void;
}

class EmailAdapterImpl implements EmailAdapter {
  private emailService: EmailService;

  constructor(emailService: EmailService) {
    this.emailService = emailService;
  }

  sendEmailToUser(email: string, subject: string, payload: EmailPayload) {
    console.log(
      'Passando pelo adapter, transformando o objeto Payload em um HTML que será entendido pelo emailService...\n'
    );
    const bodyHTML = `
    <p>
      Olá, ${payload.sellerName}!<br>
      Você acaba de receber uma nova avaliação no seu produto ${payload.productName}
    </p>
    `;

    // Adaptando a interface do caso de uso para a interface do serviço de email
    this.emailService.sendEmail(email, subject, bodyHTML);
  }
}

export default EmailAdapterImpl;
