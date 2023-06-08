import EmailService from './EmailService';

interface EmailAdapter {
  sendEmailToUser(email: string, subject: string, body: string): void;
}

class EmailAdapterImpl implements EmailAdapter {
  private emailService: EmailService;

  constructor(emailService: EmailService) {
    this.emailService = emailService;
  }

  sendEmailToUser(email: string, subject: string, body: string) {
    // Adaptando a interface do caso de uso para a interface do serviço de email
    this.emailService.sendEmail(email, subject, body);
  }
}

export default EmailAdapterImpl;
