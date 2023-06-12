# GoF Strategy e Decorator

## Introdução

&emsp;&emsp; O strategy é um padrão de projeto comportamental que permite o desenvolvimento de diferentes algoritmos, que ficam em classes separadas. Esse padrão pode ser utilizado quando uma classe faz algo específico de várias maneiras diferentes. 

&emsp;&emsp; O Strategy pode ser facilmente combinado com o Decorator, e é uma implementação comumente utilizada. Isso acontece, pois, assim como dito anteriormente, o Strategy é utilizado para definir algoritmos  encapsulados em diferentes classes em que os algoritmos sejam intercambiáveis. Já o decorator, utilizado para acrescentar comportamentos a objetos, sem que a base seja alterada. 

&emsp;&emsp; Sendo assim, é possível combinar esses padrões, o Strategy para definir diferentes estratégias ou algoritmos e o Decorator para adicionar comportamentos adicionais a essas estratégias. Podemos envolver a classe Strategy com uma classe Decorator, adicionando assim funcionalidades extras ao comportamento da estratégia.

## Objetivo

&emsp;&emsp; Essa combinação efetua uma maximização da modularização do sistema, possibilitando a união de diversas estratégias com variados comportamentos dinâmicos por meio da aplicação de decoradores. Isso simplifica a inclusão de novas estratégias para a funcionalidade e a incorporação de novos comportamentos para cada estratégia. 

## Participantes

- Adne Moretti Moreira
- Arthur José Nascimento de Lima
- Cícero Barrozo Fernandes Filho
- Leonardo Milomes Vitoriano
- Marcos Vinicius de Deus
- Matheus Pimentel Leal

## Metodologia

A metodologia adotada consistiu no desenvolvimento colaborativo dos artefatos pelo grupo 1, que foi sorteado pelo grupo para que todos pudessem participar da elaboração de diferentes tipos de padrões de projeto. O desenvolvimento aconteceu da seguinte forma: 

1. Um dos membros, que previamente havia concebido e elaborado uma solução potencial para o problema, compartilhou sua ideia, proporcionando uma oportunidade para que os demais membros discutissem tanto a solução quanto o problema em questão. Nesse momento, o membro compartilhou a sua tela na ferramenta **Microsoft Teams**.

2. Após discussão de ideias e pontos de vista diferentes, o grupo modelou a solução utilizando a ferramenta LucidChart em uma reunião no Microsoft Teams, que foi gravada. 

3. Ao fazer a modelagem da solução com a utilização de padrões de projeto, a equipe utilizou do **Live Share**, que permite escrever o código paralelamente. Utilizando a linguagem **Typescript**, a equipe representou o padrão de projeto. 

## Problemática e Solução

&emsp;&emsp; A problemática que possibilitou a aplicação dos padrões de projeto no fluxo de avaliação do Mercado Livre foi a funcionalidade de filtrar avaliações dos produtos. A funcionalidade está presente ao visualizar um produto e suas "opiniões", assim como mostra a imagem 1. 

&emsp;&emsp; Ao observar a funcionalidade no sistema em questão foi possível elencar as diferentes possibilidades de filtro, sendo elas: 

- Ordenação: 
    - Mais úteis: Seriam as avaliações com maior quantidade de votos; 
    - Mais recentes: Ordenadas de forma decrescente do momento de criação; 
- Qualificação: 
    - 5 estrelas;
    - 4 estrelas;
    - 3 estrelas;
    - 2 estrelas;
    - 1 estrela;

&emsp;&emsp; A partir dessa funcionalidade, foi elencada a possibilidade de criação de um padrão Strategy para separar as diferentes estratégias de filtro, no Mercado Livre sendo por Maior utilidade, mais recente e por quantidade de estrelas. Enquanto que o decorator poderia ser utilizado no filtro por quantidade de estrelas, tendo em vista que a base para todos seria a mesma. 

## UML

![image](https://lucid.app/publicSegments/view/237a8ddc-5a23-429f-8edc-1878b26c97e8/image.png)

<figcaption align='center'>
    <b>Figura 1: Diagrama do padrão Strategy e Decorator para a funcionalidade de filtrar avaliações dos produtos</b>
    <br><small>Fonte: Elaboração Própria</small>
</figcaption> </center>

## Código

&emsp;&emsp; Para acessar a implementação em código do Decorator de Conteúdo para realizado aqui basta clicar [aqui](https://github.com/UnBArqDsw2023-1/2023.1_G2_ProjetoMercadoLivre/tree/design-patterns/src/strategyDecorator).

## Gravação da reunião

- [Link da reunião](https://youtu.be/8tbrdL8N8gg)

## Conclusão

&emsp;&emsp; Após uma análise mais aprofundada, podemos concluir que, embora haja algum código duplicado devido à similaridade das lógicas do Decorator, aplicamos dois princípios importantes em áreas específicas. O primeiro princípio é o da Responsabilidade Única, que nos permite separar as duas lógicas envolvidas no problema: ordenação e filtragem. Ao fazer essa separação, conseguimos obter uma estrutura mais modular e facilitar a manutenção do código. Isso significa que, se precisarmos modificar ou corrigir uma dessas lógicas, podemos fazê-lo de forma isolada, sem afetar as outras partes do código.

&emsp;&emsp; Além disso, o princípio do Aberto/Fechado está presente nessa abordagem. Isso significa que o código está aberto para extensões, permitindo que novas funcionalidades sejam adicionadas sem modificar o código existente. Ao invés de alterar diretamente a lógica existente, podemos criar uma nova classe concreta que implementa a nova funcionalidade. Essa nova classe pode ser facilmente substituída pela anterior, tornando o código flexível e adaptável a mudanças futuras. Dessa forma, o código se torna mais robusto e reutilizável, facilitando a evolução e manutenção do sistema como um todo.

## Referências

- https://refactoring.guru/design-patterns/strategy

## Versionamento

| Versão |                  Alteração                   |    Responsável     |      Revisor       | Data  |
| :----: | :------------------------------------------: | :----------------: | :----------------: | :---: |
|  1.0   | Adicionando participantes, metodologia | Adne Moretti |   Leonardo Milomes e Arthur | 11/06/23  |
|  1.1   | Adicionando conclusão , código e UML  | Arthur José |  Cícero Barrozo  | 11/06/23  |
|  1.2   | Adicionando gravação da reunião  | Marcos Vinícius |  Cícero Barrozo  | 11/06/23  |