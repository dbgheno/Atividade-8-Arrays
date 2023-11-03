
// ATIVIDADE 8 - ARRAYS
document.write(`<br><br><strong>ATIVIDADE 8 - Arrays</strong><br><br>`)


// 1. Desenvolva um algoritmo para percorrer um vetor de 15 elementos inteiros já preenchido e imprima todos os valores pares.

let numerosInteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
document.write(`1. Os números pares de 1 a 15 são`)
for (let numerosPares of numerosInteiros) {
    if (numerosPares % 2 == 0) {
        document.write(`, <strong>${numerosPares}</strong>`)
    }
}
document.write(`.<br><br>`)



// 2. Desenvolva um algoritmo para percorrer um vetor de 20 elementos inteiros e no final mostre a soma de todos os elementos.

document.write(`2. Soma de 20 elementos de um array: `)

let elementos = [] // declaração de um array

for (let e=1/2**9, i=0; i<20; e*=2, i++) { // o for escrito dessa forma faz com que eu possa escolher a progressão desejada do valor e pelo total de 20 iterações de i
    elementos.push(e) // inserção de uma sequência númerica ao array  ---  o fato de i estar escrito após uma virgula depois de let e, faz com i seja também declarado como let
}

let somaElementos = 0
for (let num of elementos) {
    somaElementos += num
}

document.write(`<strong>${Math.round(somaElementos)}</strong><br><br>`)




// 3. Desenvolva um algoritmo que preenche um vetor com os 4 primeiros números perfeitos.

// numeros perfeitos são todos aqueles cujo a soma de todos seus divisores (exceto ele mesmo) resulta nele mesmo. Ex: 1+2+3 = 6; 1+2+4+7+14 = 28

const numerosPerfeitos = [] // declaração do array vazio
for (let iNP=1; numerosPerfeitos.length<4; iNP++) { // enquanto o lenght do array não for 3, ou seja, enquanto ele não tiver 4 elementos (0,1,2,3), o loop for persiste
    let somaDivisores = 0 
    for (let d=1; d<iNP; d++) { // roda todos os numeros do 1 ao numero anterior ao verificado
        if (iNP % d === 0) { // identifica por quais numeros o verificado retorna resto 0 ao ser dividido
            somaDivisores += d // soma todos os divisores de resto 0
            if (somaDivisores === iNP) { // verifica se a soma de todos os divisores equivale ao numero verificado
                numerosPerfeitos.push(iNP) // adiciona ao array os aprovados no teste
            }
        }
    }
}
document.write(`3. Lista dos 4 primeiros números perfeitos: <strong>${numerosPerfeitos}</strong><br><br>`)




// 4. Desenvolva um algoritmo que declare uma lista de 10 números e solicite um número para o usuário e no final informe se o número que o usuário digitou está dentro da lista ou não.

const dezNumeros = []
while (dezNumeros.length<10) {
    dezNumeros.push((dezNumeros.length +1)*9)
}

let outraVez = true
while (outraVez) {
    const escolhido = Number(prompt(`4. Tente acertar um número de 1 a 100: \n (dica: há mais de um número possível e eles correspondem aos múltiplos da terceira unidade após o último número de um dado.)`)) 
    if (dezNumeros.includes(escolhido)) { // .includes serve para verificar se há o escolhido em algum dos elementos todos do array
        alert(`4. Parabéns! Você acertou! \n A lista continha os múltiplos de 9! `)
        outraVez = false
    } else {
        outraVez = confirm(`4. Você errou! \n Deseja tentar mais uma vez? `)
    }
}
document.write(`4. A lista continha os múltiplos de 9! <br><br>`)




// 5. Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes, e que exiba a lista desses nomes na tela. Após exibir essa lista, o programa deve mostrar também os nomes na ordem inversa em que o usuário os digitou.
// Ex:
// Entrada: Édson, Marcelo, Letícia, Ju, Thobias
// Saída: Thobias, Ju, Letícia, Marcelo, Édson

const cincoNomes = []
for (n=1; cincoNomes.length<5; n++) {
    const umNome = prompt(`Digite o ${n}º nome do total de 5: `)
    cincoNomes.push(umNome)
}

document.write(`5. Lista reversa dos 5 nomes digitados: <br>`)
for (let umNome of cincoNomes.slice().reverse()) { // .slice e .reverse explicados abaixo
    document.write(`<strong>${umNome}</strong><br>`)
}
document.write(`<br>`)

// .reverse inverte a ordem do array. Porém mesmo que isto seja feito dentro um escopo local, o .reverse aplica-se sempre para  código inteiro. O .slice() cria uma cópia do array, portanto a reversão aplicada ao array é na verdade aplicada apenas a esta cópia específica, fazendo com a reversão não se mantenha em usos futuros do array original.




