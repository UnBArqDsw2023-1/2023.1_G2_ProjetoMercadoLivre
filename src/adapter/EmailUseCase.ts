import EmailAdapter from './EmailAdapter';

class EmailUseCase {
  private emailAdapter: EmailAdapter;

  constructor(emailAdapter: EmailAdapter) {
    this.emailAdapter = emailAdapter;
  }

  sendEmailToUser(email: string, subject: string, body: string) {
    // Lógica específica do caso de uso
    console.log('Executando lógica do caso de uso...');
    this.emailAdapter.sendEmailToUser(email, subject, body);
  }
}

export default EmailUseCase;
