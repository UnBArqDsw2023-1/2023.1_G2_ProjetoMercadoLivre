import EmailAdapter, { EmailPayload } from './EmailAdapter.js';

class EmailUseCase {
  private emailAdapter: EmailAdapter;

  constructor(emailAdapter: EmailAdapter) {
    this.emailAdapter = emailAdapter;
  }

  sendEmailToUser(email: string, subject: string, body: EmailPayload) {
    // Lógica específica do caso de uso
    console.log('Executando lógica do caso de uso...');
    console.log('Corpo enviado para o adapter: ', body);
    this.emailAdapter.sendEmailToUser(email, subject, body);
  }
}

export default EmailUseCase;
