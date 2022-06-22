
//Função sem definição de retorno
function somarValoresNumericos(n1: number, n2: number){
    return n1 + n2.toString();
}

console.log(somarValoresNumericos(1, 3));

//Função com definição de retorno
function somarValores(n1: number, n2:number): number {
    return n1 + n2;
}

console.log(somarValores(1, 3));