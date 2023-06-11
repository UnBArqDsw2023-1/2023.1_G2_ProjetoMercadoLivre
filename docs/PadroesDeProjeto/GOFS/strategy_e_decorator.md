# GoF Strategy e Decorator

## Introdução

O strategy é um padrão de projeto comportamental que permite o desenvolvimento de diferentes algoritmos, que ficam em classes separadas. Esse padrão pode ser utilizado quando uma classe faz algo específico de várias maneiras diferentes. 

O Strategy pode ser facilmente combinado com o Decorator, e é uma implementação comumente utilizada. Isso acontece, pois, assim como dito anteriormente, o Strategy é utilizado para definir algoritmos  encapsulados em diferentes classes em que os algoritmos sejam intercambiáveis. Já o decorator, utilizado para acrescentar comportamentos a objetos, sem que a base seja alterada. 

Sendo assim, é possível combinar esses padrões, o Strategy para definir diferentes estratégias ou algoritmos e o Decorator para adicionar comportamentos adicionais a essas estratégias. Podemos envolver a classe Strategy com uma classe Decorator, adicionando assim funcionalidades extras ao comportamento da estratégia.

## Objetivo

Essa combinação permite uma maior modularização do sistema, em que diferentes estratégias possam estar combinadas com diferentes comportamentos dinâmicos através do uso de decoradores. Facilita na adição de novas estretégias para a funcionalidade e novos comportamentos para cada estratégia. 

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

A problemática que possibilitou a aplicação dos padrões de projeto no fluxo de avaliação do Mercado Livre foi a funcionalidade de filtrar avaliações dos produtos. A funcionalidade está presente ao visualizar um produto e suas "opiniões", assim como mostra a imagem 1. 

Ao observar a funcionalidade no sistema em questão foi possível elencar as diferentes possibilidades de filtro, sendo elas: 

- Ordenação: 
    - Mais úteis: Seriam as avaliações com maior quantidade de votos; 
    - Mais recentes: Ordenadas de forma dcrescente do momento de criação; 
- Qualificação: 
    - 5 estrelas;
    - 4 estrelas;
    - 3 estrelas;
    - 2 estrelas;
    - 1 estrela;

A partir dessa funcionalidade, foi elencada a possibilidade de criação de um padrão Strategy para separar as diferentes estretégias de filtro, no Mercado Livre sendo por Maior utilidade, mais recente e por quantidade de estrelas. Enquanto que o decorator poderia ser utilizado no filtro por quantidade de estrelas, tendo em vista que a base para todos seria a mesma. 

## UML

## Código 

## Gravação da reunião

## Conclusão

## Referências

## Versionamento

| Versão |                  Alteração                   |    Responsável     |      Revisor       | Data  |
| :----: | :------------------------------------------: | :----------------: | :----------------: | :---: |
|  1.0   | Adicionando participantes, metodologia | Adne Moretti |   Leonardo Milomes  | 11/06/23  |