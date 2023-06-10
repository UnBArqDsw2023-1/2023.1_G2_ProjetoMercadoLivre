import EmailAdapter from './EmailAdapter.js';
import EmailServiceImpl from './EmailService.js';
import EmailUseCase from './EmailUseCase.js';

export default class AdapterClient {
  constructor() {
    this.run();
  }

  clientCode = () => {
    const emailService = new EmailServiceImpl();

    const emailAdapter = new EmailAdapter(emailService);

    const emailUseCase = new EmailUseCase(emailAdapter);

    emailUseCase.sendEmailToUser('teste@gmail.com', 'Nova venda!', {
      sellerName: 'Jairo',
      productName: 'Iphone 11',
    });
  };

  run(): void {
    this.clientCode();
    console.log('\n');
  }
}
