import engine from "./engine.js"

let btnSimul = document.getElementById("btn-simul")
let textInput = document.getElementById("txtInput")
let textOutput = document.getElementById("txtOutput")

textInput.value = "grupo: Ana Bia Julia Paty\ngrupo: Marco Paulo Tony Fabio\nexiste: Guga\nexiste: Julia\nconhece: Julia Marco\nconhece: Tony Paulo"

btnSimul.onclick = function() {
    let input = textInput.value
    //console.log('input',input);
    let doc = engine.parse(input)
    engine.run(doc)
    textOutput.value = engine.out
}