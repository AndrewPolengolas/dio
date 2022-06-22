// Como podemos melhorar o esse código usando TS? 

interface pessoaInterface{
    nome:string;
    idade: number;
    profissao: string;
}

let pessoa1: pessoaInterface = {
    nome: "maria",
    idade: 29,
    profissao: "atriz"
};


let pessoa2: pessoaInterface = {
    nome: "roberto",
    idade: 19,
    profissao: "Padeiro"
}

let pessoa3: pessoaInterface = {
    nome: "laura",
    idade: 32,
    profissao: "Atriz"
};

let pessoa4: pessoaInterface = {
    nome: "carlos",
    idade: 19,
    profissao: "padeiro"
}