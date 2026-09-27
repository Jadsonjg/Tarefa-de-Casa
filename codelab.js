//Crie um sistema (somente terminal, sem tela) que pergunte ao usuário
//a altura, e calcule o peso ideal do usuario.

// import * as readline from 'node:readline/promises';
// import { stdin as input, stdout as output } from 'node:process';
// const rl = readline.createInterface({ input, output });

// let altura = await rl.question('Qual a sua altura? ');
// altura = Number(altura)
// altura = altura / 100 //Converter para metros

// let peso = 0
// let imc = peso / (altura * altura)

// while (imc <24.9) {
//     // NAO ENTRA NO CODIGO
//     //if (imc > 18.5 && imc < 24.9) {
//     // console.log('O seu peso ideal é: ' + peso + 'kg') 
//     // }
//     peso++
//     imc = peso / (altura * altura)
// }
// console.log("O seu peso ideal é: " + peso + "kg");



// if(imc < 18.5){
//     console.log('Você está abaixo do peso')
// } else if(imc >= 18.5 && imc < 24.9){
//     console.log('Você está no peso adequado')
// } else if(imc >= 25 && imc < 29.9){
//     console.log('Você está no Sobrepeso (pré-obesidade)')
// } else if(imc >= 30 && imc < 34.9){
//     console.log('Você está no Obesidade Grau I (moderada)')
// } else if(imc >= 35 && imc < 39.9){
//     console.log('Você está no Obesidade Grau II (severa)')
// }else{
//     console.log('Você está no Obesidade Grau III (grave ou mórbida)')
// }

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

let altura = await rl.question('Qual a sua altura? ');
altura = Number(altura)
altura = altura / 100 //Converter para metros

let pesoMin = 0
let pesoMax = 0
let imc1 = pesoMax / (altura * altura)
let imc2 = pesoMin / (altura * altura)

while (imc1 <24.9) {
pesoMax++
imc1 = pesoMax / (altura * altura)
}

while (imc2 <18.5) {
pesoMin++
imc2 = pesoMin / (altura * altura)
}

console.log(`A sua faixa de peso ideal é: ${pesoMin}kg até ${pesoMax}kg`);
