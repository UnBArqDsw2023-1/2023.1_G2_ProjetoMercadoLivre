# GoF Template

## Introdução

&emsp;&emsp; O Template Method é um padrão de projeto comportamental que define o esqueleto de um algoritmo na superclasse mas deixa as subclasses sobrescreverem etapas específicas do algoritmo sem modificar sua estrutura. [1]

&emsp;&emsp;O método template, possui a seguinte estrutura:

![imagem 1](../../Assets/PadroesDeProjeto/EstruturaTemplate.png)

<figcaption align='center'>
    <b>Figura 1:
     Estrutura do Template Method</b>
    <br><small>Fonte: Mergulho nos padrões de projeto de Alexander Shvets</small>
</figcaption> </center>

## Objetivo

&emsp;&emsp; A ideia de se usar o padrão do **Template Method** é de quebrar o algoritmo em uma série de etapas, transformando essas etapas em métodos, e colocando uma série de chamadas para esses métodos dentro de um único método padrão. As etapas podem ser tanto abstratas, ou ter alguma implementação padrão. [2]

## Participantes

&emsp;&emsp; Nas reuniões para desenvolvimento do artefato, os integrantes do **grupo 2** que participaram foram:

- Christian Fleury Alencar Siqueira
- Gabriel Moretti de Souza
- João Henrique Marques Calzavara
- Thiago Siqueira Gomes

## Metodologia

&emsp;&emsp; Para se construir o artefato, utilizamos a metodologia de nos reunir via discord e via teams, com os integrantes do grupo, com alguém compartilhando a tela, e todos discutindo sobre como ficaria o artefato utilizando o _Template Method_, fizemos um diagrama de classes para esse método, e após isso, o implementamos em código.

## Problemática e Solução

&emsp;&emsp; A problemática que possibilitou a aplicação dos padrões de projeto no fluxo de avaliação do Mercado Livre foi a funcionalidade de compressão de arquivos para sua persistência no banco de dados da aplicação, que seria derivada do anexo de arquivos em um comentário da avaliação.

&emsp;&emsp; Ao observar a funcionalidade no sistema em questão foi possível elencar as diferentes possibilidades de compressão, sendo elas:

- Imagem: onde a imagem é comprimida utilizando, possivelmente, uma aplicação do código de Huffman, e logo após é validada para verificar a existência de dados maléficos e, finalmente, salva no banco;
- Vídeo: de modo parecido à compressão de imagens, mas com sua etapa de compressão e validação alteradas para possibilitar a compressão de cada frame do vídeo;

&emsp;&emsp; A partir dessa funcionalidade, foi elencada a possibilidade de criação de um padrão Template Method para realizar a alteração de apenas duas das etapas de upload do arquivo ao banco de dados: compressão e validação.

## UML

<img src="https://lucid.app/publicSegments/view/5792c6b3-2e6e-43ac-bc7f-10690b55564c/image.png"/>

<figcaption align='center'>
    <b>Figura 1: Diagrama do padrão template para a funcionalidade de compressão de arquivo (Página "TemplateMethod Compress")</b>
    <br><small>Fonte: Elaboração Própria</small>
</figcaption> </center>

## Código

&emsp;&emsp; O código referente a uma representação _toy_ do **Template Method** para comprimir conteúdo que será utilizado em nosso projeto pode ser encontrado no seguinte endereço web, como parte do menu de códigos _toy_ realizados para outros padrões do projeto:

[Template Method](https://github.com/UnBArqDsw2023-1/2023.1_G2_ProjetoMercadoLivre/tree/design-patterns/src/template)

Nessa pasta podemos encontrar os arquivos Attachment.ts, fazendo parte da pasta de classes abstratas do padrão de projeto, e também os arquivos de classes concretas Image.ts e Video.ts, juntamente ao arquivo TemplateClient.ts que representa a injeção de dependência desse padrão no menu geral do nosso projeto.

No arquivo Attachment.ts, a classe abstrata Attachment é responsável por 
definir o método padrão templateMethod e suas respectivas etapas, nesse caso separadas em compressFile(), detectExplicitContent() e upload():

![Código do Attachment.ts](../../Assets/PadroesDeProjeto/AttachmentTemplate.png)

No arquivo Image.ts, a classe concreta Image é responsável pelo polimorfismo das etapas do templateMethod, assim possuindo uma sobrescrita dos métodos compressFile() e detectExplicitContent() para serem responsáveis explicitamente pela compressão de imagens. Segue um código _toy_ para o arquivo:

![Código do Image.ts](../../Assets/PadroesDeProjeto/Imagetemplate.png)

No arquivo Video.ts, a classe concreta Video também é responsável pelo polimorfismo das etapas do templateMethod, assim possuindo uma sobrescrita dos métodos compressFile() e detectExplicitContent() para serem responsáveis explicitamente pela compressão de vídeo. Segue um código _toy_ para o arquivo:

![Código do Video.ts](../../Assets/PadroesDeProjeto/VideoTemplate.png)

No arquivo TemplateClient.ts, a classe TemplateClient, como citada anteriormente, é responsável pela implementação da injeção de dependência do menu da aplicação:

![Código do TemplateClient.ts](../../Assets/PadroesDeProjeto/TemplateClient.png)

Dessa forma, a implementação do padrão Template Method no código fornecido promove a modularidade, flexibilidade e reutilização de código, permitindo adicionar facilmente novas implementações de compressões de arquivo pelo polimorfismo das classes.

## Gravação da reunião

A gravação da reunião, ilustrando os diferentes pontos de vista da equipe, pode ser encontrado no link a seguir:  

[Link da Reunião](https://www.youtube.com/watch?v=wuYSZUKnArc)

## Conclusão

&emsp;&emsp; Desse modo, foi possível realizar a diagramação e representação do código desse artefato, que fará parte do sistema de avaliações do Mercado Livre por meio da compressão do arquivo.

## Referências

- [1] Mergulho nos padrões de projeto de Alexander Shvets
- [2] https://refactoring.guru/pt-br/design-patterns/decorator

## Versionamento

| Versão |                        Alteração                        |  Responsável  |    Revisor    |    Data    |
| :----: | :-----------------------------------------------------: | :-----------: | :-----------: | :--------: |
|  1.0   |                   Criando Introdução                    | João Henrique |    Gabriel    |   11/06    |
|  1.1   | Adicionando Participantes, Metodologia, Objetivos e UML | João Henrique |    Gabriel    |   11/06    |
|  1.2   |                   Adicionando código                    | João Henrique |    Gabriel    |   11/06    |
|  1.3   |  Adição da gravação e problemática, refatoração do UML  |    Gabriel    | João Henrique | 11/06/2023 |
|  1.4   |                   Adição da Conclusão                   | João Henrique |    Gabriel    | 11/06/2023 |
