interface EmailService {
  sendEmail(to: string, subject: string, bodyHTML: string): void;
}

class EmailServiceImpl implements EmailService {
  sendEmail(to: string, subject: string, bodyHTML: string) {
    // Lógica real para enviar o email
    console.log(`Enviando email para: ${to}`);
    console.log(`Assunto: ${subject}`);
    console.log(`Corpo HTML: ${bodyHTML}`);
  }
}

export default EmailServiceImpl;
