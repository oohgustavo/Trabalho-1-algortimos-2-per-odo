const readline = require("readline-sync");
let vetor =[
"Mamae", "67", "9", "Paralelepipedo",
"Albatroz", "11", "Mexerica",
"AP-301", "2", "Danette"
];

let numeros = [];
let palavras = [];

for (let i =0; i< vetor.length; i++){
    if (!isNaN(vetor[i])){
        numeros.push(Number(vetor[i]));
    } else {
        palavras.push(vetor[i]);
    }

}
numeros.sort((a, b) => a - b);
palavras.sort();

console.log("Números:");
console.log(numeros);

console.log("Palavras:");
console.log(palavras);
