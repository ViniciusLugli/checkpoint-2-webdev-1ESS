// Questão 01
console.log("== Questão 01 ==");

let tarefaConcluida = true;

if (tarefaConcluida == true) {
  console.log("Tarefa Concluída!");
} else {
  console.log("Tarefa não Concluída!");
}
// Obs: O uso de `==` funciona neste caso porque `tarefaConcluida` é booleano,
// mas é uma prática arriscada, pois se o valor fosse uma string "true", 
// a comparação ainda retornaria verdadeiro — o que não é o esperado.
// O ideal seria usar `=== true` ou simplesmente `if (tarefaConcluida)`.

// [Parcialmente correto]

// Questão 02
console.log("== Questão 02 ==");

let prioridade = 3;

if (prioridade == 1) {
  console.log("Prioridade baixa!");
} else if (prioridade == 2) {
  console.log("Prioridade média!");
} else {
  console.log("Prioridade alta!");
}

// [OK]

// Questão 03
console.log("== Questão 03 ==");

let diaSemana = new Date().getDay();
// Datas teste: '2025-04-6' - '2025-04-7' - '2025-04-8' - '2025-04-9' - '2025-04-10' - '2025-04-11' - '2025-04-12'

console.log(`O número da semana é ${diaSemana}, então:`);

switch (diaSemana) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Segunda");
    break;
  case 2:
    console.log("Terça");
    break;
  case 3:
    console.log("Quarta");
    break;
  case 4:
    console.log("Quinta");
    break;
  case 5:
    console.log("Sexta");
    break;
  case 6:
    console.log("Sábado");
    break;
  default:
    console.log("Dia Inválido");
    break;
}

// [OK]

// Questão 04
console.log("== Questão 04 ==");

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// [OK]

// Questão 05
console.log("== Questão 05 ==");

let numero = 1;
let soma = 0;

while (numero <= 5) {
  soma += numero;
  numero++;
}

console.log("A soma total é:", soma);

// [OK]

// Questão 06
console.log("== Questão 06 ==");

let number = 3;

do {
  console.log(number);
  number--;
} while (number >= 1);

console.log("FIM");

// [OK]

// Questão 07
console.log("== Questão 07 ==");

function verificarIdade(idade) {
  if (idade < 18) {
    return "Menor de idade";
  } else if (idade > 18 && idade < 60) {
    return "Maior de idade";
  } else {
    return "Idoso";
  }
}

// Comentário: a faixa "idade === 18" não é coberta explicitamente.
// Implementação correta:
// function verificarIdadeCorreta(idade) {
//   if (idade < 18) {
//     return "Menor de idade";
//   } else if (idade >= 18 && idade < 60) {
//     return "Maior de idade";
//   } else {
//     return "Idoso";
//   }
// }

// console.log(verificarIdade(15));
// console.log(verificarIdade(25));
// console.log(verificarIdade(60));

// Questão parcialmente correta
// [PARCIALMENTE CORRETO]

// Questão 08
console.log("== Questão 08 ==");

let temSenhaCorreta = false;
let temBiometriaAutenticada = false;

let acessoPermitido = temSenhaCorreta || temBiometriaAutenticada;

console.log("Acesso permitido?", acessoPermitido);
console.log("Acesso negado?", !acessoPermitido);

// [OK]

// Questão 09
console.log("== Questão 09 ==");

let tarefas = "lavar louça, limpar a casa, estudar, arrumar o quarto";
tarefas = tarefas.split(",").join(" | ");
console.log(tarefas);
console.log(tarefas.includes("estudar"));

// [OK]

// Questão 10
console.log("== Questão 10 ==");

const numeroAleatorio = function () {
  return Math.floor(Math.random() * (15 - 5 + 1)) + 5;
};

let raio = numeroAleatorio();
const pi = Math.PI.toFixed(3);
const areaCirculo = pi * Math.pow(raio, 2);

// Comentário: `pi` está como string devido ao `toFixed`, causando erro no cálculo.
// // Implementação correta:
// const piCorreto = Math.PI;
// const areaCorreta = piCorreto * Math.pow(raio, 2);
// console.log(`Área de um círculo com raio ${raio}: ${areaCorreta.toFixed(3)}`);

// [INCORRETO]
