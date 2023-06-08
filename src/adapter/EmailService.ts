interface EmailService {
    sendEmail(to: string, subject: string, body: string): void;
  }
  
  class EmailServiceImpl implements EmailService {
    sendEmail(to: string, subject: string, body: string) {
      // Lógica real para enviar o email
      console.log(`Enviando email para: ${to}`);
      console.log(`Assunto: ${subject}`);
      console.log(`Corpo: ${body}`);
    }
  }
  
  export default EmailServiceImpl;
  