import engine from "./engine_o.js"

let btnSimul = document.getElementById("btn-simul")
let textInput = document.getElementById("txtInput")
let textOutput = document.getElementById("txtOutput")

textInput.value = `grupo: Joao Olga
grupo: Maria Manuel Alface
grupo: Fabio Duda Ivo
existe: Olga
existe: Julia
conhece: Julia Alface
conhece: Fabio Ivo
criaFila: Guiche1
chegou: Ana Maria
criaFila: Guiche2
chegou: Joao Ivo Manuel Bia Olga Guga Pedro Alface Fabio
desiste: Ana Pedro
atendeFila: Guiche1 Guiche2 Guiche2
imprime:`

btnSimul.onclick = function() {
    let input = textInput.value
    //console.log('input',input);
    let doc = engine.parse(input)
    engine.run(doc)
    textOutput.value = engine.out
}