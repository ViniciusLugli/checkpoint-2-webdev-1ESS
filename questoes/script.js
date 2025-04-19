// Questão 01

console.log('== Questão 01 ==')

let tarefaConcluida = true

if (tarefaConcluida == true) {
    console.log('Tarefa Concluída!')
} else {
    console.log('Tarefa não Concluída!')
}

// Questão 02

console.log('== Questão 02 ==')

let prioridade = 3

if (prioridade == 1) {
    console.log('Prioridade baixa!')
} else if (prioridade == 2) {
    console.log('Prioridade média!')
} else {
    console.log('Prioridade alta!')
}

// Questão 03

console.log('== Questão 03 ==')

let diaSemana = new Date().getDay()
// Datas teste: '2025-04-6' - '2025-04-7' - '2025-04-8' - '2025-04-9' - '2025-04-10' - '2025-04-11' - '2025-04-12'

console.log(`O número da semana é ${diaSemana}, então:`)

switch (diaSemana) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('Dia Inválido')
        break
}

// Questão 04