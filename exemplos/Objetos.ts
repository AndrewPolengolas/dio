/* enum PROFISSAO {
    Financeiro, 
    Desenvolvedor,
    Atriz,
    Jogador,
    Estudante
}

interface Usuario {
    nome: string
    idade: number
    profissao: PROFISSAO
}

interface Estudante extends Usuario{
    materias: string[]
}

class Pessoa implements Usuario {

    nome: string
    idade: number
    profissao: PROFISSAO
    
    constructor(nome: string, idade: number, profissao: PROFISSAO){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}

class Aluno implements Usuario, Estudante {

    nome: string
    idade: number
    profissao: PROFISSAO
    materias: string[]
    
    constructor(nome: string, idade: number, profissao: PROFISSAO, materias: string[]){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
        this.materias = materias;
    }
}

const pessoa1 = new Pessoa('Andrew', 22, PROFISSAO.Desenvolvedor);

const pessoa2 = new Pessoa ('Ana', 21, PROFISSAO.Financeiro);

const pessoa3 = new Pessoa ('Ricardo', 21, PROFISSAO.Desenvolvedor);

const aluno1 = new Aluno ('Miguel', 17, PROFISSAO.Estudante, ['Lapis', 'caderno'])


function listar (lista: string[]){
    for(const item of lista){
        console.log('- ', item)
    }
}

listar(aluno1.materias)

 */