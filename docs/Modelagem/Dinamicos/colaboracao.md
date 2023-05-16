# Diagrama de Colaboração/Comunicação

## Introdução

&emsp;&emsp; De acordo com a notação UML de diagramas dinâmicos, umm diagrama de comunicação(também conhecido como diagrama de colaborração) é um tipo de diagrama
de interação que pode ser usado para explorar o comportamento dinâmico de um sistema ou aplicativo de software. Ele fornece uma visualização alternativa das mesmas informações dos diagramas de sequência [1].
Na UML, um diagrama de comunicação mostra as interações entre os objetos ou funções associados com linhas de vida e mensagens transmitidas entre linhas de vida[2].

## Objetivo

&emsp;&emsp; O diagrama de colaboração, também conhecido como diagrama de comunicação, é uma ferramenta visual usada na modelagem de sistemas para representar a interação entre os objetos envolvidos em um determinado cenário ou processo. Ele tem o objetivo de mostrar como os objetos colaboram uns com os outros, trocando mensagens e compartilhando informações para realizar uma tarefa específica. No caso do nosso projeto fizemos o diagrama baseado nas interações entre vendedor, comprador e plataforma e o fluxo de avaliação, em algumas situações definidas.

## Participantes

Os integrantes do grupo que participaram da elaboração do artefato foram:

- Adne Moretti Moreira
- Matheus Pimentel Leal
- Gabriel Moretti de Souza
- Cícero Barrozo Fernandes Filho
- João Henrique Marques Calzavara
- Thiago Siqueira Gomes

## Metodologia

A metodologia utilizada para desenvolver o artefato do diagrama de colaboração/comunicação baseou-se em uma abordagem colaborativa entre os membros do grupo. Primeiramente, foram definidos os objetivos do diagrama, que consistiam em representar as interações entre comprador, vendedor e plataforma no fluxo de avaliação do sistema.

Em seguida, os participantes do grupo trabalharam em conjunto para identificar os elementos necessários no diagrama, como as classes envolvidas e as mensagens trocadas entre elas. Foi estabelecido um padrão para a representação gráfica dos diagramas de colaboração, garantindo a consistência visual em todas as interações. Por fim, foi criado o diagrama de colaboração utilizando a ferramenta LucidChart durante uma reunião com a participação de vários integrantes.
## Artefato

O artefato desenvolvido em questão foi desenvolvido por auxiliar no entedimento o sistema e as interções entre seus objetos, fornece uma visão clara das mensagens e do fluxo.
O diagrama foi separado em quatro diferentes interações para melhor entendimento do sistema e das diferentes interções existentes no fluxo de avaliação do sistema. As interções foram divididas em:

- Interação de avaliação comprador pré-compra;
- Interação de avaliação comprador pós compra;
- Interação de avaliação vendedor pós-compra;
- Interação de avaliação plataforma.

Os integrantes optaram por focar os diagramas no fluxo de avaliação, sem incluir outros possíveis fluxos necessários para chegar no fluxo de avaliação.

## Interação comprador pré-compra

O fluxo de avaliação de um comprador pré-compra consiste em todas as interações com as avaliações de produtos que um comprador faz antes de realizar de fato a compra no sistema do mercado livre, por exemplo, visualizar avaliações e comentários de outros usuários em produtos que esses já compraram.

Assim, o diagrama de colaboração dessa interação possui três diferentes classes envolvidas, sendo elas o Produto, Avaliação e Comentário. Primeiramente o comprador visualiza os produtos do Mercado Livre, escolhe um produto e a plataforma lista as avaliações existentes no produto. Ao visualizar as avaliações, o comprador pode filtrar as avaliações de acordo com as estrelas.

As avaliações possuem comentários, que também podem ser visualizados, além do comprador poder dar upvoting. O fluxo de avaliação de pré-compra é importante para o comprador ver visões de outras pessoas sobre o produto que está interessado, para que possa encontrar produtos de maior qualidade possível.

Segue imagem do diagrama desenvolvido:

<div style="display: center; align-items: center;">
  <img src="Assets/diagramas/Colaboracao2.png" alt="" style="margin-right: 20px;"/>
  <div style="flex-grow: 1;">
    <h6 style="text-align: flex;">
    Figura 1 : Interação de avaliação comprador pré-compra
    </h6>
  </div>
</div>

### Interação comprador pós compra

O fluxo de interação do comprador pós-compra consiste em todas as ações relacionadas a avaliação após um comprador comprar e receber o seu produto.

A interação teve 4 classes, sendo elas Produto, Pedido, Avaliação e Comentário. Primeiramente o comprador entra no sistema, escolhe um produto e decide comprá-lo, fazendo assim um pedido. No produto, a todo momento vai existir um método que calcula a média de avaliações constantemente. Após comprar um produto e recebe-lo, o comprador pode avaliar o produto e listar as avaliações do produto. Ao fazer uma avaliação o comprador faz comentários, que pode editar e excluir posteriormente. 

Segue o diagrama de interação do fluxo de avaliação de comprador pós-compra. 

<div style="display: center; align-items: center;">
  <img src="Assets/diagramas/Colaboracao1.png" alt="" style="margin-right: 20px;"/>
  <div style="flex-grow: 1;">
    <h6 style="text-align: flex;">
    Figura 2 : Interação de avaliação comprador pós-compra
    </h6>
  </div>
</div>

### Interação vendedor pós compra

O fluxo de interação de vendedor pós compra consiste em todas as interações de um vendedor com os outros objetivos 

<div style="display: center; align-items: center;">
  <img src="Assets/diagramas/Colaboracao3.png" alt="" style="margin-right: 20px;"/>
  <div style="flex-grow: 1;">
    <h6 style="text-align: flex;">
    Figura 3 : Interação de avaliação vendedor pós-compra
    </h6>
  </div>
</div>

<div style="display: center; align-items: center;">
  <img src="Assets/diagramas/Colaboracao4.png" alt="" style="margin-right: 20px;"/>
  <div style="flex-grow: 1;">
    <h6 style="text-align: flex;">
    Figura 4 : Interação de avaliação plataforma 
    </h6>
  </div>
</div>

## Gravação da reunião

A reunião de desenvolvimento do artefato foi gravada no Microsoft Teams e está disponível abaixo: 

<iframe width="560" height="315" src="https://www.youtube.com/embed/EvrEI1-k6Ws" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Conclusão

O artefato desenvolvido consiste em diagramas de colaboração/comunicação que visualizam as interações entre participantes em um sistema. Esses diagramas mostram como os objetos colaboram, trocam mensagens e compartilham informações para realizar uma tarefa específica. Foram criadas quatro interações para representar o fluxo de avaliação entre comprador, vendedor e plataforma. Cada interação foi detalhada em um diagrama separado, proporcionando uma compreensão mais profunda do sistema e suas interações.

Os diagramas de colaboração/comunicação são essenciais para visualizar e compreender as interações entre os objetos em um sistema, representando o fluxo de informações e ações. Eles contribuem para melhorar o design e a eficiência do sistema, proporcionando uma experiência aprimorada para os usuários e um desenvolvimento mais efetivo do projeto.

## Referências

- [1] https://www.ibm.com/docs/pt-br/rsm/7.5.0?topic=uml-communication-diagrams;
- [2] https://www.ibm.com/docs/pt-br/radfws/9.6?topic=SSRTLW_9.6.0/com.ibm.xtools.sequence.doc/topics/ccommndiag.htm;
- [UML.org](https://www.uml.org/what-is-uml.htm)

## 5. Histórico de Versão

| Versão |               Alteração               |  Responsável  | Revisor | Data  |
| :----: | :-----------------------------------: | :-----------: | :-----: | :---: |
|  1.0   |        Adicionando introdução         | João Henrique | Gabriel | 13/05 |
|  1.1   | Adicionando objetivos e participantes |    Gabriel    |    -    | 15/05 |
|  1.2   |         Adicionando conclusao         | Thiago Gomes  | Adne Moretti | 15/05 |
|  1.2   |         Adicionando artefato       | Adne Moretti  |  Thiago Gomes  | 15/05 |
