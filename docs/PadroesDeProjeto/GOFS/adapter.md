# GoF Adapter

## Introdução

É um padrão estrutural que permite que objetos com interfaces incompatíveis possam trabalhar juntos. Ele age como um intermediário entre duas classes, convertendo a interface de uma classe em outra interface esperada pelo cliente.

Em nosso projeto, o adapter foi utilizado para adaptar um serviço de email para a notificação do vendedor no site Mercado Livre.

## Objetivo

O Adapter resolve o problema quando uma classe existente possui uma interface que não é adequada para ser utilizada por um cliente específico. Em vez de modificar diretamente a classe existente, que pode ser uma biblioteca de terceiros ou parte de um código legado, o Adapter é introduzido para encapsular a funcionalidade da classe existente e disponibilizá-la através de uma interface compatível com o cliente.

## Participantes

- Christian Fleury Alencar Siqueira
- Gabriel Moretti de Souza
- João Henrique Marques Calzavara
- Thiago Siqueira Gomes

## Metodologia

A metodologia base utizada para a construção do artefato tem inspiração no *pair programming*, no qual existe um piloto, responsável por compartilhar a tela, modelar o diagrama de classes e escrever código, enquanto o co-piloto, analisa as ações piloto e expõe seus pontos de vista.

## Problemática e Solução

## UML

O diagrama realizado para esse padrão de projeto pode ser encontrado no seguinte projeto do Lucidchart, que está incorporado com esta página da documentação. Para visualizar o adapter em si, acesse a página "Adapter EmailService". 

<div style="width: 960px; height: 720px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:960px; height:720px" src="https://lucid.app/documents/embedded/51ebca88-4c3e-4a16-8962-68fb315e975d" id="wYm6NmtE_Gvz"></iframe></div>

## Código 

O código referente a uma representação _toy_ do adapter que será utilizado em nosso projeto pode ser encontrado no seguinte endereço web, como parte do menu de códigos _toy_ realizados para outros padrões do projeto:

[Adapter](https://github.com/UnBArqDsw2023-1/2023.1_G2_ProjetoMercadoLivre/tree/design-patterns/src/adapter)

## Gravação da reunião

[]()

## Conclusão

Desse modo, foi possível realizar a diagramação e representação do código desse artefato, que fará parte do sistema de avaliações do Mercado Livre por meio da ação de notificação ao vendedor.

## Referências

## Versionamento

| Versão |                  Alteração                   |    Responsável     |      Revisor       | Data  |
| :----: | :------------------------------------------: | :----------------: | :----------------: | :---: |
|  0.1   | Adição de textos de introdução, UML e código | Gabriel Moretti |  -   | 11/06/2023 |