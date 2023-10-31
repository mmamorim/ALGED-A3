<h1>Avaliação A3</h3>
<div align="center">
  <img src="./assets/logoUC.png" width="800" height="260" />
</div>
<h3 style="margin-bottom: 0px;">
    professores:
</h3>
<div>
    <code align="center">Marcelo Amorim e Marcelo Duduchi</code>
</div>
<br/>

>Descrição e documentação do projeto A3 da Unidade curricular de Algoritmos e estrutura de dados. 

<div>
  <h2>
    <strong>FASE 1: </strong>
    Pessoas conhecem pessoas
  </h2>
  <img src="./assets/people.gif" width="240" height="160" />
</div>

<p style="margin-top: 8px;">
    Nesta fase iremos implementar uma simulação de um sistema de filas para compra de ingressos de eventos. Para isso seu programa precisará de várias instâncias de uma estrutura de dados conhecida como <code>fila brasileira</code>. 
</p>

<div>
  <h2>
    <strong>FASE 2: </strong>
    Filas Brasileiras
  </h2>
  <img src="./assets/queue.gif" width="280" height="160" />
</div>

<p style="margin-top: 8px;">
    Nesta fase iremos implementar uma simulação de um sistema de filas para compra de ingressos de eventos. Para isso seu programa precisará de várias instâncias de uma estrutura de dados conhecida como <code>fila brasileira</code>. 
</p>
<p style="">
    Esta estrutura de dados procura simular algo muito comum na compra de ingressos para eventos
culturais e esportivos. Imagine que você chega para comprar seu ingresso e se depara com várias
bilheterias com filas de diferentes tamanhos. Numa rápida olhada, procura um amigo, colega,
familiar, conhecido, vizinho ou assemelhado (ou seja, alguém de sua classe) junto ao qual você
poderia se encostar.
</p>
<p style="">
Uma <code>fila brasileira</code> é uma generalização de uma fila comum, com algumas diferenças:
</p>
<ul>
    <li>
    Quando um elemento for inserido em uma fila, ele pode entrar no final, como numa fila
comum, ou junto com algum outro elemento da sua classe.
    </li>

</ul>

<h3>
Sobre a entrada de dados
</h3>

<p style="">
A entrada de dados será a partir da leitura de um arquivo texto que poderá conter em cada linha os seguintes comandos:
</p>
<code><strong>criaFila:</strong> <i>ID</i> [ID2, ID3, ...] </code> cria uma ou mais filas (ou guiches) de atendimento associando com seu respectivo  identificador ID.

<code><strong>atendeFila:</strong> <i>ID</i> [ID2, ID3, ...] </code> atende uma ou mais filas (ou guiches) associado por seu respectivo identificador ID. Ao atender uma fila, o primeiro será removido.

<code><strong>chegou:</strong> <i>nome</i> [nome2, nome3, ...] </code> uma ou mais pessoas associadas por seu respectivo identificador (nome,nome2,nome3,...) chegam e devem ser adicionadas em alguma fila existente. 

<code><strong>desiste:</strong> <i>nome</i> [nome2, nome3, ...] </code> uma ou mais pessoas associadas por seu respectivo identificador (nome,nome2,nome3,...) desistem de esperar e vão embora.

<code><strong>imprime:</strong></code> imprime a situação atual de todas as filas. A saída deverá respeitar a seguinte formatação:
1. Uma fila por linha
2. Cada linha deve começar com símbolo hash '#' e seu identificador, seguido pelos nomes das pessoas entre [ ] separados por espaços.

<p style="margin-bottom: 0px;">exemplo:</p>

```
#Guiche1 [ Guga, Maria ]
#Guiche2 [ Ivo, Fabio, Manuel, Alface ]
```

<h3>
Sobre a entrega
</h3>

O projeto deverá ser disponibilizado em um repositório do Github de algum dos integrantes do grupo e deverá conter obrigatóriamente:
1. RA e Nome completo dos integrantes
2. Código fonte da implementação em Java
3. Entradas utilizadas para simulação com suas respectivas saídas.
4. Texto contendo explicações da implementação utilizada no projeto e justificativas das estruturas utilizadas. 

<h3>
Critérios
</h3>

Deixaremos a escolha da estrutura de dados a seu critério. Lembre-se que este projeto será apresentado aos professores. Portanto antes de fazer a escolha das estruturas de dados, pense em como vai justificá-la. O critério de avaliação, vai levar em conta a implementação e as estruturas de dados escolhidas.