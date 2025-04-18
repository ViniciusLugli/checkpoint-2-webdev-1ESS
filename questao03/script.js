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