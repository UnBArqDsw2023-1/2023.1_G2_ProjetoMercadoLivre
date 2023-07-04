# GoF Observer e Abstract Factory
## Introdução

&emsp;&emsp; O Observer é um padrão de projeto comportamental que permite a definição de um mecanismo de assinatura para notificar diversos objetos sobre eventos que aconteçam com o objeto por eles observado. Já o Abstract Factory é um padrão de projeto criacional que permite a produção de famílias de objetos relacionados, sem a necessidade de especificar suas classes concretas.

&emsp;&emsp; Nesse sentido, na tentativa de conciliar os dois padrões GoF supracitados, foi necessário desenvolver inúmeras versões de diagrama de classes UML, até atingir a composição desejada dos padrões, como será apresentado a posteriori.

&emsp;&emsp; Assim, por meio da modelagem dos padrões, obteve-se um sistema que, a partir da avaliação orientada a categorias de produto ([clothesAvaliation.py](https://github.com/UnBArqDsw2023-1/2023.1_G2_ProjetoMercadoLivre/blob/7d69910d1ebc7701c0e614c7c7d75618cee396ab/src/observerAbstract/abstractFactory/clothesAvaliation.py) e [techAvaliation.py](https://github.com/UnBArqDsw2023-1/2023.1_G2_ProjetoMercadoLivre/blob/7d69910d1ebc7701c0e614c7c7d75618cee396ab/src/observerAbstract/abstractFactory/techAvaliation.py)), utilizando o abstract factory, notifica o vendedor relacionado à compra por meio do observer em [avaliationNotifier.py](src/observerAbstract/observer/avaliationNotifier.py).

## Objetivo

&emsp;&emsp; Através da combinação dos dois padrões, visamos aproveitar benefícios de ambos. Isto é, ao utilizar a notificação automática de mudanças de estado do Observer, promove-se um baixo acoplamento e alta coesão dos objetos, assim permitindo a reutilização de código.

&emsp;&emsp; Além disso, ao utilizar o Abstract Factory, criam-se famílias de objetos sem a necessidade de especificar suas classes concretas. Dessa forma, a troca de famílias de objetos reforça a flexibilidade e independência do sistema, de modo que o mesmo seja eficiente e modular.

## Participantes

* Letícia Assunção Aires Moreira
* Matheus Pimentel Leal

## Metodologia

&emsp;&emsp; A fim de desenvolver os padrões apresentados no presente documento, optamos por estudar os possíveis padrões a serem adotados. Em seguida, nos reunimos por meio do Discord, definimos os padrões e passamos a concilia-los em diagrama de classes UML no LucidChart.

&emsp;&emsp; Ao fazer a modelagem da solução com a utilização de padrões de projeto, optamos por desenvolver o projeto no Visual Studio Code em Python, o qual consta no seguinte [link](https://github.com/UnBArqDsw2023-1/2023.1_G2_ProjetoMercadoLivre/tree/7040c559f925995cfcbfc0df98fa635875d8fa05/src/observerAbstract).

## Problemática e Solução

A partir da funcionalidade de notificação automática de vendedores, por meio da avaliação dos compradores, observamos a possibilidade de aplicar a composição de GoFs desejada.

![image](https://github.com/UnBArqDsw2023-1/2023.1_G2_ProjetoMercadoLivre/assets/72623771/53c8a65f-e008-48e3-80d6-dcb0159130db)

<figcaption align='center'>
    <b>Figura 1: Exemplo de Avaliação</b>
    <br><small>Fonte: Elaboração Própria</small>
</figcaption> </center>


## UML

![image](https://github.com/UnBArqDsw2023-1/2023.1_G2_ProjetoMercadoLivre/assets/72623771/ca872f81-e1e4-4020-a885-645b4c156033)

<figcaption align='center'>
    <b>Figura 2: Diagrama do padrão Observer e Abstract Factory</b>
    <br><small>Fonte: Elaboração Própria</small>
</figcaption> </center>

## Código

Para acessar a implementação em código do Observer e Abstract Factory, basta clicar [aqui](https://github.com/UnBArqDsw2023-1/2023.1_G2_ProjetoMercadoLivre/tree/7040c559f925995cfcbfc0df98fa635875d8fa05/src/observerAbstract).

Nesta pasta podemos encontrar todos os arquivos que irão servir de base para o Observer e o Abstract Factory, mas neste documento, para fins de resumir a funcionalidade, serão apenas demonstrados os principais arquivos de cada padrão, sendo esses respectivamente [clothesAvaliation.py](https://github.com/UnBArqDsw2023-1/2023.1_G2_ProjetoMercadoLivre/blob/7040c559f925995cfcbfc0df98fa635875d8fa05/src/observerAbstract/abstractFactory/clothesAvaliation.py), [techAvaliation.py](https://github.com/UnBArqDsw2023-1/2023.1_G2_ProjetoMercadoLivre/blob/7040c559f925995cfcbfc0df98fa635875d8fa05/src/observerAbstract/abstractFactory/techAvaliation.py) e [avaliationNotifier.py](https://github.com/UnBArqDsw2023-1/2023.1_G2_ProjetoMercadoLivre/blob/7040c559f925995cfcbfc0df98fa635875d8fa05/src/observerAbstract/observer/avaliationNotifier.py)

A seguir os códigos para cada classe:

* clothesAvaliation:
  ![image](https://github.com/UnBArqDsw2023-1/2023.1_G2_ProjetoMercadoLivre/assets/72623771/ee8327f8-723d-4b1f-9f31-eb68124f0252)
* techAvaliation:
  ![image](https://github.com/UnBArqDsw2023-1/2023.1_G2_ProjetoMercadoLivre/assets/72623771/8eaf1078-7ee2-462b-b689-c14d14dc3699)
* avaliationNotifier:
  ![image](https://github.com/UnBArqDsw2023-1/2023.1_G2_ProjetoMercadoLivre/assets/72623771/83798379-a3e9-44a6-ae51-40ba527133cf)
## Conclusão



## Referências

* https://refactoring.guru/pt-br/design-patterns/abstract-factory
* https://refactoring.guru/pt-br/design-patterns/observer

## Versionamento

| Versão |                  Alteração                   |    Responsável     |      Revisor       | Data  |
| :----: | :------------------------------------------: | :----------------: | :----------------: | :---: |
|  1.0   | Criação do Documento e Adição de Conteúdo | Letícia Aires |   Matheus Pimentel | 03/07/23  |
