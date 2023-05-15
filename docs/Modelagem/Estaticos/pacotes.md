# Diagrama de pacotes

## 1. Introdução

&emsp;&emsp; Segundo a notação UML de diagramas estáticos [1], um diagrama de pacotes é um diagrama estrutural definido pela UML que descreve os pacotes ou pedaços do sistema divididos em agrupamentos lógicos mostrando as dependências entre eles. Este diagrama é muito utilizado para ilustrar a arquitetura de um sistema mostrando o agrupamento de suas classes . Um pacote é um agrupamento de elementos UML relacionados, como diagramas, documentos, classes ou até mesmo outros pacotes.

## 2. Objetivo

&emsp;&emsp; Um diagrama de pacotes é uma representação visual de alto nível da estrutura e organização de um sistema de software. Seu objetivo principal é mostrar as dependências entre os pacotes ou módulos que compõem o sistema, destacando as relações de dependência e agrupamentos lógicos. O diagrama de pacotes também auxilia na redução de acoplamento entre os pacotes da aplicação, visto que, é possível visualizar áreas de alta dependência, promovendo a modularidade de pacotes maiores.

## 3. Participantes

- Adne Moretti Moreira
- Cícero Barrozo Fernandes Filho
- Gabriel Moretti de Souza
- João Henrique Marques Calzavara
- Matheus Pimentel Leal
- Thiago Siqueira Gomes

## 4. Metodologia

O artefato foi desenvolvido em conjunto utilizando a ferramenta Microsoft Teams para reunião e para modelagem a ferramenta LucidChart. Para o desenvolvimento em conjunto, um membro do grupo compartilhou a tela da ferramenta de modelagem, e com o auxílio do restante do grupo, que também modificava o diagrama online, as ideias e possíveis modelagens foram discutidas. 
De acordo com as discussões do grupo, a primeira versão foi feita. Após isso, melhorias foram sendo elencadas com o maior entendimento do sistema e dos fluxos a serem desenvolvidos, e o artefato foi evoluído para uma segunda versão, mais completa. 

Segue a seguir o artefato desenvolvido: 

## 5. Artefato

&emsp;&emsp;A equipe se reuniu e, juntamente, começou a construir o artefato que seria o diagrama de pacote, inicialmente, a gente tentou modelar quais seriam os tipos de organização de pastas que estaríamos buscando, com uma dica que foi dada pela professora, dividimos em dois grandes modelos principais, Client e Application, o Client é a camada que mostra como o usuário se conecta com a aplicação, no caso, ou por web ou por mobile. Já o módulo Application, foi dividido nos modelos frontend, que continha os pacotes necessários para a criação de telas e manuseio básico de dados, backend, que continha as suas camadas e a conexão externa com o banco de dados, ainda sem modelagem.

### 5.1 Primeira versão do diagrama

<div style="display: center; align-items: center;">
  <img src="Assets/diagramas/PacotesV1.png" alt="descrição da imagem" style="margin-right: 20px;"/>
  <div style="flex-grow: 1;">
    <h6 style="text-align: flex;">
    Figura 1 : Diagrama de Pacotes V1
    </h6>
  </div>
</div>

&emsp;&emsp;Para a segunda versão do artefato, foram definidas as dependências dentro de cada modelo, visto que anteriormente estavam definidas apenas as dependências de um modelo para o outro, agora mostrando de maneira melhor qual pacote depende de qual dentro de seu modelo, além da modelagem do banco que foi adicionada. No modelo de Client, os dois pacotes foram colocados um do lado do outro

### 5.2 Segunda versão do diagrama

<div style="display: center; align-items: center;">
  <img src="Assets/diagramas/PacotesV2.png" alt="descrição da imagem" style="margin-right: 20px;"/>
  <div style="flex-grow: 1;">
    <h6 style="text-align: flex;">
    Figura 2 : Diagrama de Pacotes V2
    </h6>
  </div>
</div>

## 6. Estrutura do diagrama

&emsp;&emsp; O diagrama foi estruturado de acordo com o auxílio conjunto da equipe, se que posicionou sobre cada camada feita

### 6.1 Front end

O front end é o modelo da aplicação que irá apresentar os dados ao usuário, contendo páginas, componentes e contexto de dados.

- #### 6.1.1 Pages
  &emsp;&emsp; Pages é o pacote referente as páginas da aplicação propriamente ditas, nele estarão contidas cada página da aplicação, com seu devido corpo, estilização e controle de estado.
- #### 6.1.2 Context

  &emsp;&emsp; Um contexto é uma funcionalidade que permite compartilhar dados entre componentes/páginas sem a necessidade de passá-los como propriedade (parâmetros), a ideia do contexto é conseguir construir um "estado global" para a aplicação, ou pelo menos para as páginas que utilizam ele, sendo assim, o pacote Context tem como ideia guardar os diferentes contextos da aplicação que serão utilizados pelas páginas, para que possa acontecer a integração entre os dados e as diferentes páginas que necessitam deles.

- #### 6.1.3 Components

  &emsp;&emsp; Um componente é uma representação encapsulada e independente de uma parte da interface do usuário, o pacote Components tem como ideia diminuir a redundância de um componente feito anteriormente no código, estando nele guardados os componentes mais utilizados para serem exportados para diferentes páginas.

- #### 6.1.4 ApiRequest
  &emsp;&emsp; O pacote ApiRequest tem como ideia guardar as requisições de API que serão feitas para que seja feita a integração do frontend da aplicação com o backend, este pacote então será integrado com o pacote Pages no momento em que for necessário consultar um dado no backend, onde os dados serão transmitidos para popular as páginas.

### 6.2 Backend

Backend é o modelo da aplicação onde será construída a API para que haja a integração do frontend com a base de dados, nessa camada serão feitas as tratativas de acordo com a regra de negócio para que os dados sejam salvos da maneira correta.

- #### 6.2.1 Controller

  &emsp;&emsp; Em desenvolvimento de software, um controller é uma classe responsável por gerenciar as interações entre a interface do usuário e o restante da aplicação, seu objetivo principal é receber as entradas do usuário, processá-las e coordenar as ações necessárias para atender as solicitações. No nosso caso, o pacote Controller irá receber as requisições externas por meio do pacote Operator, onde irão ser salvos os métodos referentes as rotas da aplicação, esse pacote necessita de dependência com o pacote Validator, pois nele serão salvos os métodos de validação de entrada do Operator, como o campo de email estar no formato correto, o tipo de cada item no corpo da requisição estar correto, entre outros.

- #### 6.2.2 Business

  &emsp;&emsp; A camada Business é onde ocorre a implementação da lógica de negócios e regras específicas da aplicação, nesta camada também serão feitos os acessos a serviços externos e tratamento de exceções. O pacote UseCase é importado no controller para que seja possível acessar a camada de negócio, o UseCase é exatamente um caso de uso, um fluxo da aplicação detalhado pelo cliente. O pacote Error Modules é referente a tratativas de erros da aplicação, onde será feita uma estrutura para cada erro, padronizando a tratativa retornada pelos UseCases de todo a aplicação. O pacote Service contém os serviços externos da aplicação que têm importância no fluxo, como uma biblioteca bcrypt para criptografar senha ou até mesmo um serviço para envio de email. E por último o pacote Model representa os modelos da nossa aplicação, onde cada entidade irá ter seus atributos e métodos definidos a partir dele.

- #### 6.2.3 Data
  &emsp;&emsp; A camada Data é a camada onde teremos contato com a base de persistência de dados da nossa aplicação, onde a partir do pacote Repository serão chamados os métodos para interação com o banco de dados, e o pacote Migration serão guardadas as migrations da aplicação, uma espécie de versionamento de alterações no banco de dados, como criação e deleções de tabelas alteração de campos.

### 6.3 Database

O pacote Database representa nossa base de dados da aplicação, nele estão modeladas as tabelas de acordo com as classes construídas no [diagrama de classes](Modelagem/Estaticos/classes.md). Sendo elas: Order, Product, User, Seller, Buyer, Avaliation e Comment


##  6. Conclusão

O diagrama de pacotes é uma ferramenta valiosa para representar a estrutura e organização de um sistema de software. Ele proporciona uma visão clara das dependências entre os pacotes, tanto do Backend como do Frontend, permitindo uma compreensão concisa da arquitetura do sistema. Com o uso desse diagrama, é possível identificar áreas de alta dependência e promover a modularidade, resultando em um sistema mais flexível e fácil de manter. 

Através das duas versões apresentadas no artefato, foi possível visualizar a evolução do diagrama e sua capacidade de representar de forma organizada e compreensível a estrutura do sistema. Com isso, o diagrama de pacotes contribui para o desenvolvimento eficiente de software, auxiliando na criação de sistemas mais organizados, escaláveis e de fácil manutenção.

## Referências

- [1] https://www.uml-diagrams.org/package-diagrams-overview.html;
- [2] https://react.dev/reference/react

## Histórico de Versão

| Versão |                  Alteração                  |   Responsável    | Revisor | Data  |
| :----: | :-----------------------------------------: | :--------------: | :-----: | :---: |
|  1.0   |   Adicionando introdução e participantes    |  João Henrique   |    -    | 13/05 |
|  1.1   | Adicionando artefato do Diagrama de Pacotes | Cícero Fernandes e Gabriel Morreti |    -    | 15/05 |
|  1.2   | Adicionando conclusão ao Diagrama de Pacotes | Thiago Gomes |  Cícero Fernandes  | 15/05 |
