# GoF Decorator

## Introdução

&emsp;&emsp; Segundo [1], o padrão de projeto 'Decorator', também conhecido como 'Wrapper', é um padrão estrutural que permite adicionar novas responsabilidades a um objeto de forma dinâmica, sem modificar sua estrutura básica. O padrão 'Decorator' é um dos padrões mais comuns usados no desenvolvimento de software para adicionar funcionalidades extras a um objeto sem alterar seu código-fonte original.

## Objetivo

&emsp;&emsp; A ideia fundamental do padrão 'Decorator' é criar uma série de classes que envolvem o objeto original, adicionando comportamentos ou responsabilidades extras a ele. Essas classes decoradoras têm a mesma interface do objeto original, permitindo que sejam usadas no lugar do objeto básico.

## Participantes

&emsp;&emsp; Nas reuniões para desenvolvimento do artefato, os integrantes do **grupo 1** que participaram foram:

- Adne Moretti Moreira
- Arthur José Nascimento de Lima
- Cícero Barrozo Fernandes Filho
- Leonardo Milomes Vitoriano
- Marcos Vinicius de Deus

## Metodologia

&emsp;&emsp; A metodologia base utizada para a construção do artefato tem inspiração no *pair programming*, no qual existe um piloto, responsável por compartilhar a tela, modelar o diagrama de classes e escrever código, enquanto o co-piloto, analisa as ações piloto e expõe seus pontos de vista. O desenvolvimento do padrão de projeto *Decorator*, pela equipe, pode ser dividido em 3 etapas, sendo elas detalhadas a seguir:

- 1. Um membro da equipe, que pensou em aplicar o Decorator na aplicação, estudou o padrão de projeto e explicou para a equipe a problemática abordada e a possível solução a ser utilizada. Nessa etapa, o integrante apresentou a tela utilizando a ferramenta **Microsoft Teams** e utilizou os exemplos de [1] para facilitar a compreensão da equipe.
- 2. Utilizando o **LucidChart**, a equipe focou em desenvolver a modelagem do Diagrama de Classes para o *Design Patter Decorator* no contexto de Anexar Arquivos. É importante destacar que nessa fase, a modelagem está a parte do [Diagrama de Classes principal](https://unbarqdsw2023-1.github.io/2023.1_G2_ProjetoMercadoLivre/#/Modelagem/Estaticos/classes) do fluxo de avaliação do produto.  
- 3. A partir do Diagrama de Classes do Decorator finalizado, os integrantes avançaram para o desenvolvimento dos scripts na Linguagem **TypeScript**. Com o objetivo de facilitar a escrita do código fonte, foi utilizada a extensão da ferramenta **Visual Studio Code** chamada **Live Share**, que permite a equipe escrever o código paralelamente.  

## Problemática e Solução

&emsp;&emsp; Para utilizar o decorator, observamos a necessidade de lidar com diferentes tipos de anexos em nosso fluxo de avaliação no Mercado Livre. Percebemos que é importante lidar com diversos tipos de anexos, como  JPG, PNG, MP4 e assim por diante. Compreendemos que apenas a herança não seria suficiente para resolver o problema de definir quais os tipos de anexo que seram permitidos para a avaliação. Portanto, decidimos utilizar o padrão Decorator para separar as responsabilidades, seguindo o princípio da Responsabilidade Única. Isso nos permite ter vários Decorators Concretos para lidar com as diferentes formas de anexar.

&emsp;&emsp; Além disso, ao utilizar o padrão Decorator, podemos adicionar funcionalidades extras aos anexos de forma dinâmica, sem precisar modificar a estrutura existente. Por exemplo, podemos implementar Decorators para comprimir arquivos de imagem, converter formatos de áudio, extrair metadados ou aplicar filtros específicos a certos tipos de anexos. Essa abordagem modular nos permite adicionar novos Decorators conforme necessário, sem impactar o código existente. Dessa forma, conseguimos manter um sistema flexível e extensível, capaz de lidar com diferentes requisitos de anexos no futuro. Ao separar as responsabilidades em Decorators específicos, também facilitamos a manutenção e o entendimento do código. 

&emsp;&emsp; Cada Decorator tem a responsabilidade única de adicionar uma funcionalidade específica ao anexo, tornando o código mais legível e evitando a duplicação de código em diferentes partes do sistema. 

&emsp;&emsp; Ao finalizar essa seção específica e optar por aplicar o padrão Decorator, estamos adotando uma abordagem extremamente sólida e altamente escalável para gerenciar os anexos dentro do fluxo de avaliação no Mercado Livre. Essa escolha estratégica proporciona um nível excepcional de flexibilidade, extensibilidade e manutenibilidade ao código. Com essa implementação, garantimos que o sistema esteja preparado para enfrentar futuras mudanças e demandas, possibilitando um desenvolvimento contínuo e eficaz sem comprometer a integridade do código existente. Em suma, essa abordagem nos permite criar um sistema poderoso e adaptável, que atenda às necessidades do mercado em constante evolução.

## UML

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/51ebca88-4c3e-4a16-8962-68fb315e975d" id="74l6spzfI3qV"></iframe></div>

<figcaption align='center'>
    <b>Figura 1: Diagrama do padrão decorator para a funcionalidade de anexar arquivo na avaliação (Página "Decorator Anexar")</b>
    <br><small>Fonte: Elaboração Própria</small>
</figcaption> </center>

## Código

&emsp;&emsp; Para acessar a implementação em código do Decorator de Conteúdo para realizado aqui basta clicar [aqui](https://github.com/UnBArqDsw2023-1/2023.1_G2_ProjetoMercadoLivre/tree/design-patterns/src/contentDecorator).

Nessa pasta podemos encontrar os arquivos da base do decorator: BaseDecorator.ts; da classe concreta do decorator: ConcreteAttachment.ts; da interface do decorator: Attachment.js; do cliente relativo à injeção de dependência no menu da aplicação geral: ContentDecoratorClient.ts; e, por último, os arquivos referentes às classes decorator em si: JpegDecorator.ts, Mp4Decorator.ts e PngDecorator.ts.

Seguem os códigos para:

- BaseDecorator:

![Código do BaseDecorator.ts](../../Assets/PadroesDeProjeto/baseDecoratorContent.png)

- ConcreteAttachment:

![Código do ConcreteAttachment.ts](../../Assets/PadroesDeProjeto/ConcreteAttachment.png)

- Attachment:

![Código do Attachment.ts](../../Assets/PadroesDeProjeto/Attachment.png)

- ContentDecoratorClient:

![Código do ContentDecoratorClient.ts](../../Assets/PadroesDeProjeto/ContentDecoratorClient.png)

- JpegDecorator:

![Código do JpegDecorator.ts](../../Assets/PadroesDeProjeto/jpegDecorator.png)

- Mp4Decorator:

![Código do Mp4Decorator.ts](../../Assets/PadroesDeProjeto/Mp4Decorator.png)

- PngDecorator:

![Código do PngDecorator.ts](../../Assets/PadroesDeProjeto/PngDecorator.png)

Dessa forma, a implementação do padrão Decorator no código fornecido promove a modularidade, flexibilidade e reutilização de código, permitindo adicionar facilmente novas implementações de anexo de arquivos às avaliações.

## Gravação da reunião

A gravação da reunião, ilustrando os diferentes pontos de vista da equipe, pode ser encontrado no link a seguir:  

- [Link da reunião](https://youtu.be/5hQll-8_Nlk)

## Conclusão

&emsp;&emsp; Em conclusão, o uso do padrão Decorator nos proporcionou uma solução eficiente para lidar com diferentes tipos de anexos em nosso fluxo de avaliação no Mercado Livre. Reconhecemos a importância de lidar com diversos formatos, como JPG, PNG, MP4 e outros, e compreendemos que apenas a herança não seria suficiente para abordar essa complexidade. Ao adotar o padrão Decorator, pudemos separar as responsabilidades de forma clara e seguir o princípio da Responsabilidade Única. Isso nos permitiu ter vários Decorators Concretos para lidar com as diferentes formas de anexação, além de adicionar funcionalidades extras de forma dinâmica sem alterar a estrutura existente.

&emsp;&emsp; Além disso, foi um importante aprendizado, principalmente em como uma discussão sobre a implementação de um padrão para resolver um problema existente pode ser muito complexa e demandar muitas horas de debate. Mesmo que a ideia esteja bem consolidada entre os membros, surgem dúvidas durante a diagramação e/ou na parte de codificação. Portanto, é importante a participação de mais pessoas como co-pilotos ao inserir um novo padrão de projeto.

## Referências

- [1] https://refactoring.guru/pt-br/design-patterns/decorator

## Versionamento

| Versão |                  Alteração                   |    Responsável     |      Revisor       | Data  |
| :----: | :------------------------------------------: | :----------------: | :----------------: | :---: |
|  1.0   | Adição dos tópicos introdução, objetivo, participantes e metodologia | Leonardo Vitoriano  |  Gabriel  | 11/06/23  |
|  1.1   | Adição do diagrama UML e gravação da reunião | Marcos Vinícius  |  Gabriel  | 11/06/23  |
|  1.2   | Adição da Problemática e Solução | Arthur josé  |  Cicero  | 11/06/23  |