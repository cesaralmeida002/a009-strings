const frase1 = "BOAS VINDAS, mas não deixe o gato sair"
const frase = (`Jorge tem uma casa verde e com portão azul, com os dizeres:\" ${frase1.toUpperCase()}\"`)

    console.log(frase)

let novaFrase = frase.replace("verde","rosa").replace("azul","laranja") 
    console.log(novaFrase)

let temCor1 = novaFrase.includes("verde")
let temcor2 = novaFrase.includes("laranja")
    console.log(temCor1 , temcor2)
