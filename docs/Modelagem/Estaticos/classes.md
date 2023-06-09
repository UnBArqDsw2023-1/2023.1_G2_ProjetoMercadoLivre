# Diagrama de Classes

## 1. Introdução

UML é a sigla para "Unified Modeling Language" ou "Linguagem de Modelagem Unificada". Trata-se de uma linguagem de modelagem visual que permite representar e comunicar a estrutura, o comportamento e a interação de sistemas complexos de software. Ela foi criada por algumas empresas de software na década de 1990, liderado por Grady Booch, James Rumbaugh e Ivar Jacobson, e é amplamente utilizada em todo o mundo para o desenvolvimento de software. O UML inclui vários tipos de diagramas, como o diagrama de classes, que é um dos principais artefatos utilizados na modelagem de sistemas com paradigma da orientação objetos, portanto uma boa escolha para o desenvolvimento da diciplina de arquitetura de software.

## 1.1 O que é

O diagrama de classes é uma representação visual das classes, interfaces, atributos e métodos que compõem um sistema de software. Ele descreve a estrutura do sistema, bem como as relações entre seus elementos, sendo assim uma ferramenta para a comunicação e a documentação do design de software, Além de servir de base para código do sistema.

## 2. Objetivo

&emsp;&emsp; Segundo [2], através do diagrama de classes, é possível identificar as classes que compõem um sistema, seus atributos e métodos, bem como as relações entre elas. Isso ajuda a garantir que as classes sejam definidas de maneira clara e consistente, com suas funções e responsabilidades bem definidas.

&emsp;&emsp; Além disso, o diagrama de classes pode ajudar a identificar problemas de design, como classes que têm muitas responsabilidades ou dependências desnecessárias. Isso permite que os desenvolvedores identifiquem áreas problemáticas do sistema e trabalhem para corrigir esses problemas antes que eles se tornem mais difíceis e caros de resolver.

&emsp;&emsp; O diagrama de classes também pode ser usado para documentar um sistema existente, ajudando a fornecer uma visão geral do sistema e ajudando a facilitar a manutenção e o desenvolvimento futuro. Isso é especialmente útil em sistemas complexos, onde a documentação é fundamental para garantir que o sistema possa ser mantido e expandido com segurança e eficiência.

## 3. Participantes

Nas reuniões para desenvolvimento do artefato, todos os integrantes do [grupo 2](https://unbarqdsw2023-1.github.io/2023.1_G2_ProjetoMercadoLivre/#/Modelagem/AtaReuniao_0205?id=_3-decis%c3%b5es) que participaram, sendo então os presentes:

- Arthur José Nascimento de Lima
- Christian Fleury Alencar Siqueira
- Leonardo Milomes Vitoriano
- Letícia Assunção Aires Moreira
- Marcos Vinicius de Deus

## 4. Metodologia

O diagrama de classes foi elaborado conforme a documentação e os padrões apresentados na linguagem de modelagem unificada (UML). Nesse sentido, os integrantes designados para o desenvolvimento do artefato se reuniram por meio do [Microsoft Teams](https://www.microsoft.com/pt-br/microsoft-teams/log-in) e utilizaram a ferramenta [LucidChart](https://www.lucidchart.com/pages/pt/landing?utm_source=google&utm_medium=cpc&utm_campaign=_chart_pt_allcountries_mixed_search_brand_exact_&km_CPC_CampaignId=1500131167&km_CPC_AdGroupID=59412156898&km_CPC_Keyword=lucid%20chart&km_CPC_MatchType=e&km_CPC_ExtensionID=&km_CPC_Network=g&km_CPC_AdPosition=&km_CPC_Creative=294337318271&km_CPC_TargetID=kwd-55720648523&km_CPC_Country=1001541&km_CPC_Device=c&km_CPC_placement=&km_CPC_target=&gclid=Cj0KCQjwsIejBhDOARIsANYqkD0e9p-ZAY9DkX9p6qGe4vBPj1SNfy38hmE8d0tKApmqB7XmsQ9gCIkaAqrPEALw_wcB) para desenvolvimento em conjunto, enquanto um membro do grupo compartilhava a tela da ferramenta de modelagem e, com o auxílio do restante do grupo, modificava o diagrama online. Por fim, obteve-se a primeira versão do diagrama, que foi refinada e atualizada até resultar em sua terceira versão.

## 5. Artefato

A equipe se reuniu 09/05 no microsoft teams e começou a construir o diagrama de classes em conjunto. A priori, decidimos definir quais seriam as classes mais pertinentes a serem inseridas no diagrama. Em seguida, adicionaram-se os atributos, os métodos e, por fim, foram incluídos os relacionamentos entre os diagramas.
Assim, concluímos o protótipo do diagrama de classes, o qual foi otimizado, ao decorrer do tempo, a fim de adequar principalmente os relacionamentos das classes.

Além disso, introduzimos na entrega de padrões de projeto uma nova versão mostrando outras partes da amplicação além do conjunto de entidades descritos nos diagramas iniciais.

### 5.1 Primeira Versão do Diagrama de Classes

<div style="display: center; align-items: center;">
  <img src="Assets/diagramas/ClassesV1.png" alt="descrição da imagem" style="margin-right: 20px;"/>
  <div style="flex-grow: 1;">
    <h6 style="text-align: flex;">
    Figura 1 : Diagrama de Classes V1
    </h6>
  </div>
</div>

Como é possível observar, houve mudanças significativas especificamente na modelagem dos relacionamentos presentes no diagrama.
Assim, tem-se que setas de associação foram substituídas por outra de agregação e composição de forma a retratar melhor a relacção entre o pedido, o produto, o vendedor e o comprador.

### 5.2 Segunda Versão do Diagrama de Classes

<div style="display: center; align-items: center;">
  <img src="Assets/diagramas/ClassesV2.png" alt="descrição da imagem" style="margin-right: 20px;"/>
  <div style="flex-grow: 1;">
    <h6 style="text-align: flex;">
    Figura 2 : Diagrama de Classes V2
    </h6>
  </div>
</div>

Por fim, foi analisada a relação entre produto e avaliação e, após debate, optamos por alterar a seta indicativa de associação para agregação, a fim de retrata a relação de exclusividade entre as classes supracitadas.

### 5.3 Terceira Versão do Diagrama de Classes

<div style="display: center; align-items: center;">
  <img src="Assets/diagramas/ClassesV3.png" alt="descrição da imagem" style="margin-right: 20px;"/>
  <div style="flex-grow: 1;">
    <h6 style="text-align: flex;">
    Figura 3 : Diagrama de Classes V3
    </h6>
  </div>
</div>

### 5.4 Quarta Versão do Diagrama de Classes

Para a quarta versão do diagrama de classe foram adicionados novas partes referentes aos Padrões de Projeto.

<div style="display: center; align-items: center;">
  <img src="Assets/diagramas/ClassesV4.png" alt="descrição da imagem" style="margin-right: 20px;"/>
  <div style="flex-grow: 1;">
    <h6 style="text-align: flex;">
    Figura 4 : Diagrama de Classes V4
    </h6>
  </div>
</div>

## 6. Legenda

Por padrão utilizamos os seguintes elementos em nosso diagrama:

<div style="display: center; align-items: center;">
  <img src="Assets/diagramas/legenda_diagrama_de_classes.png" alt="descrição da imagem" style="margin-right: 20px;"/>
  <div style="flex-grow: 1;">
    <h6 style="text-align: flex;">
    Figura 1 : Legenda diagrama de Classes
    </h6>
  </div>
</div>

## 7. Gravação da reuniao
Primeira Versão:
[Parte 1](https://youtu.be/CbLMMBllyBQ)
Segunda/terceira Versão:
[Parte 2](https://youtu.be/eYP6UfRJLb4)

## 8. Conclusão

&emsp;&emsp; O diagrama de classes foi para englobar as entidades que compõe o fluxo de avaliação de produto e para descrever relações sobre os padrões de projeto, desenhando classes que estão diretamente ligadas à regra de negócio da aplicação.

&emsp;&emsp; Em conclusão, o artefato de diagrama de classes proporcionou ao grupo uma visualização mais clara e concisa da estrutura das entidades e suas relações dentro do sistema, foi possível compreender melhor a regra de negócio e também concretizar ideias em classes, relacionamentos, atributos,  métodos e descrever bem os padrões de projeto abordados no projeto.

&emsp;&emsp; O diagrama fica também como forma de documentação, facilitando a colaboração e entendimento do sistema.

## 8. Referências

- [1] https://www.uml-diagrams.org/class-reference.html
- [2] https://developer.ibm.com/articles/the-class-diagram/

## 9. Histórico de Versão

| Versão |                  Alteração                   |    Responsável     |      Revisor       | Data  |
| :----: | :------------------------------------------: | :----------------: | :----------------: | :---: |
|  1.0   | Adição dos tópicos Objetivos e Participantes | Leonardo Vitoriano |  Marcos Vinícius   | 14/05 |
|  1.1   |     Adição do tópico Gravação da reunião     |  Marcos Vinícius   | Christian Siqueira | 14/05 |
|  1.2   |        Adição da Introdução e Legenda        |    Arthur José     | Christian Siqueira | 15/05 |
|  1.3   |          Adição do tópico Conclusão          | Christian Siqueira |         -          | 15/05 |
|  1.4   |             Correção Estrutural              |   Letícia Aires    |         -          | 15/05 |
|  1.5   |            Adição da Metodologia             |   Letícia Aires    |         -          | 15/05 |
|  1.6   |         Atualizar Legenda de classes         |       Arthur       |         -          | 15/05 |
|  1.7   |         Add Versão 4 do diagrama de classes         |       Arthur       |         -          | 15/05 |
