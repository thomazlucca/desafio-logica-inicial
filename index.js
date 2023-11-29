let heroi = ["Goku", 5500]


//testando condições do vetor para definir o nível do herói.
//como o desafio não define o nível entre 5001 e 6000, incluí esses valores no nível Ouro.

if (heroi[1] <= 1000) {
    console.log("O herói de nome " + heroi[0] + " está no nível Ferro!")
} else if (heroi[1] > 1000 && heroi[1] <= 2000) {
    console.log("O herói de nome " + heroi[0] + " está no nível Bronze!")
} else if (heroi[1] > 2000 && heroi[1] <= 5000) {
    console.log("O herói de nome " + heroi[0] + " está no nível Prata!")
} else if (heroi[1] > 5000 && heroi[1] <= 7000) {
    console.log("O herói de nome " + heroi[0] + " está no nível Ouro!")
} else if (heroi[1] > 7000 && heroi[1] <= 8000) {
    console.log("O herói de nome " + heroi[0] + " está no nível Platina!")
} else if (heroi[1] > 8000 && heroi[1] <= 9000) {
    console.log("O herói de nome " + heroi[0] + " está no nível Ascendente!")
} else if (heroi[1] > 9000 && heroi[1] <= 10000) {
    console.log("O herói de nome " + heroi[0] + " está no nível Imortal!")
} else if (heroi[1] > 10000) {
    console.log("O herói de nome " + heroi[0] + " está no nível Radiante!")
} else {
    console.log("O herói de nome " + heroi[0] + " não possui classificação de nível!")
}