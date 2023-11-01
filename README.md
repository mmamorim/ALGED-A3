# Avaliação A3
![](./assets/logoUC.png)
### professores
>Marcelo Amorim e Marcelo Duduchi

Descrição e documentação do projeto A3 da Unidade curricular de Algoritmos e estrutura de dados. 

## FASE 1: Pessoas conhecem pessoas
<img src="./assets/people.gif" width="240" height="160" />

Nesta fase iremos implementar uma simulação de um sistema que manipula grupos de pessoas que se conhecem. Para isso seu programa precisará de uma instância de uma estrutura de dados ```pessoas conhecem pessoas```. 

Esta estrutura de dados armazena grupos de pessoas que se conhecem (amigos, familiares, etc..) Para testar essa estrutura, deverá ser implementado um parser que leia uma entrada de dados no formato texto e gere uma saída também no formato texto.

>**Exemplo de parser:** [Parser.java](/Parser/Parser.java) / [Teste.java](/Parser/Teste.java)

## Sobre a entrada de dados e saída

A entrada de dados será a partir da leitura de um arquivo texto que poderá conter em cada linha os seguintes comandos:

>#### **```grupo:```** ```nome [ nome1, nome2, ... ]``` 
> cria um grupo de pessoas associadas por seu respectivo identificador (nome, nome1, nome2, ...) que se conhecem.

>#### **```existe:```** ```nome``` 
> verifica se um identificador **nome** foi encontrado em algum grupo, isto é, se uma pessoa existe. Para cada comando deste tipo, uma nova linha no texto de saída deverá ser criada, conforme o exemplo (entrada/saída). Na saída, o nome deve obrigatóriamente estar entre [ ].  

>#### **```conhece:```** ```nome1 nome2``` 
> verifica se uma pessoa com identificador **nome1** pertence a um mesmo grupo de uma outra pessoa com identificador **nome2**, isto é, se as pessoas se conhecem. Para cada comando deste tipo, uma nova linha no texto de saída deverá ser criada, conforme o exemplo (entrada/saída). Na saída, os nomes devem obrigatóriamente estar entre [ ].

**Exemplo Entrada:**

    grupo: Ana Bia Guga Pedro
    grupo: Joao Olga
    grupo: Maria Manuel Alface
    existe: Bia
    existe: Banana
    conhece: Maria Alface
    conhece: Guga Olga

**Exemplo Saída:**

     [Bia] existe!
     [Banana] NÃO existe!
     [Maria] conhece [Alface]
     [Guga] NÃO conhece [Olga]


>**Exemplos de entrada e saída (Fase 1):** ```/Pasta Simulations``` [Simulações](/Simulations)

## FASE 2: Filas Brasileiras
<img src="./assets/queue.gif" width="280" height="160" />

Nesta fase iremos implementar uma simulação de um sistema de filas para compra de ingressos de eventos. Para isso seu programa precisará de várias instâncias de uma estrutura de dados conhecida como <code>fila brasileira</code>. 

Esta estrutura de dados procura simular algo muito comum na compra de ingressos para eventos culturais e esportivos. Imagine que você chega para comprar seu ingresso e se depara com várias bilheterias com filas de diferentes tamanhos. Numa rápida olhada, procura um amigo, colega, familiar, conhecido, vizinho ou assemelhado (ou seja, alguém de sua classe) junto ao qual você poderia se encostar.

Uma ```fila brasileira``` é uma generalização de uma fila comum, com algumas diferenças:
* Quando um elemento for inserido em uma fila, ele pode entrar no final, como numa fila comum, ou junto com algum outro elemento da sua classe.

## Sobre a entrada de dados e saída

A entrada de dados será a partir da leitura de um arquivo texto que poderá conter em cada linha os seguintes comandos:

>#### **```criaFila:```** ```ID [ ID1, ID2, ... ]``` 
> cria uma ou mais filas (ou guiches) de atendimento associando com seu respectivo  identificador ID.

>#### **```atendeFila:```** ```ID [ ID1, ID2, ... ]``` 
> atende uma ou mais filas (ou guiches) associado por seu respectivo identificador ID. Ao atender uma fila, o primeiro será removido.

>#### **```chegou:```** ```nome [ nome1, nome2, ... ]``` 
> uma ou mais pessoas associadas por seu respectivo identificador (nome, nome1, nome2,...) chegam e devem ser adicionadas em alguma fila existente. 

>#### **```desiste:```** ```nome [ nome1, nome2, ... ]``` 
> uma ou mais pessoas associadas por seu respectivo identificador (nome, nome1, nome2,...) desistem de esperar e vão embora.

>#### **```imprime:```**
> uma ou mais pessoas associadas por seu respectivo identificador (nome,nome2,nome3,...) desistem de esperar e vão embora.
> imprime a situação atual de todas as filas. A saída deverá respeitar a seguinte formatação:
> 1. Uma fila por linha
> 2. Cada linha deve começar com símbolo hash '#' e seu identificador, seguido pelos nomes das pessoas entre [ ] separados por espaços.
> 
>**Exemplo:**
>
>     #Guiche1 [ Guga, Maria ]
>     #Guiche2 [ Ivo, Fabio, Manuel, Alface ]


>**Exemplos de entrada e saída (Fase 2):** ```/Pasta Simulations``` [Simulações](/Simulations)

## DEMO para simular entradas / saídas

>link para Demo -> [Demo](https://mmamorim.github.io/ALGED-A3/)


## Sobre a entrega

O projeto deverá ser disponibilizado em um repositório do Github de algum dos integrantes do grupo e deverá conter obrigatóriamente:
1. RA e Nome completo dos integrantes
2. Código fonte da implementação em Java
3. Entradas utilizadas para simulação com suas respectivas saídas.
4. Texto contendo explicações da implementação utilizada no projeto e justificativas das estruturas utilizadas. 

## Critérios

Deixaremos a escolha da estrutura de dados a seu critério. Lembre-se que este projeto será apresentado aos professores. Portanto antes de fazer a escolha das estruturas de dados, pense em como vai justificá-la. O critério de avaliação, vai levar em conta a implementação e as estruturas de dados escolhidas.