# GoF Adapter

## Introdução

Segundo [1], o padrão de projeto 'Adapter' é um padrão estrutural que permite que objetos com interfaces incompatíveis possam trabalhar juntos. Ele age como um intermediário entre duas classes, convertendo a interface de uma classe em outra interface esperada pelo cliente.

Em nosso projeto, o adapter foi utilizado para adaptar um serviço de email para a notificação do vendedor no site Mercado Livre.

## Objetivo

O Adapter resolve o problema quando uma classe existente possui uma interface que não é adequada para ser utilizada por um cliente específico. Em vez de modificar diretamente a classe existente, que pode ser uma biblioteca de terceiros ou parte de um código legado, o Adapter é introduzido para encapsular a funcionalidade da classe existente e disponibilizá-la através de uma interface compatível com o cliente.

## Participantes

- Christian Fleury Alencar Siqueira
- Gabriel Moretti de Souza
- João Henrique Marques Calzavara
- Thiago Siqueira Gomes

## Metodologia

&emsp;&emsp; Para se construir o artefato, utilizamos a metodologia de nos reunir via Discord e via Teams, com os integrantes do grupo, com alguém compartilhando a tela, e todos discutindo sobre como ficaria o artefato utilizando o _Adapter_. Com isso, fizemos um diagrama de classes para esse método, e após isso, o implementamos em código.

## Problemática e Solução

## UML

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/51ebca88-4c3e-4a16-8962-68fb315e975d" id="74l6spzfI3qV"></iframe></div>


<figcaption align='center'>
    <b>Figura 1: Diagrama do padrão adapter para a funcionalidade de serviço de notificação de vendedores (Página "Adapter EmailService")</b>
    <br><small>Fonte: Elaboração Própria</small>
</figcaption> </center>

## Código 

O código referente a uma representação _toy_ do adapter que será utilizado em nosso projeto pode ser encontrado no seguinte endereço web, como parte do menu de códigos _toy_ realizados para outros padrões do projeto:

[Adapter](https://github.com/UnBArqDsw2023-1/2023.1_G2_ProjetoMercadoLivre/tree/design-patterns/src/adapter)

## Gravação da reunião

[Link da Reunião](https://www.youtube.com/watch?v=wuYSZUKnArc)

## Conclusão

Desse modo, foi possível realizar a diagramação e representação do código desse artefato, que fará parte do sistema de avaliações do Mercado Livre por meio da ação de notificação ao vendedor.

## Referências

- [1] https://refactoring.guru/pt-br/design-patterns/adapter

## Versionamento

| Versão |                  Alteração                   |    Responsável     |      Revisor       | Data  |
| :----: | :------------------------------------------: | :----------------: | :----------------: | :---: |
|  1.0   | Adição de textos descritivos, UML e código | Gabriel Moretti |  -   | 11/06/2023 |
|  1.1   | Adição de referências, gravação e refatorações | Gabriel Moretti |  -   | 11/06/2023 |