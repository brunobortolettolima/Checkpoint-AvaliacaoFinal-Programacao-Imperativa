const aluno = require('./aluno');
const estudantes = require('./estudantes');

const curso = {
    nomeDoCurso: 'Javascript',
    notaDeAprovacao: 7,
    faltasMaximas: 3,
    listaEstudantes: estudantes,
    
    adicionarAluno(nome, quantidadeFaltas, notas) {
        let newAluno = new aluno(nome, quantidadeFaltas, notas);
        this.listaEstudantes.push(newAluno);
    },

    paraSerAprovado(student) {
        let mediaEspecial = this.notaDeAprovacao*1.1;
        let mediaFinal = student.calcularMedia();
        let faltas = student.quantidadeFaltas;
        if(faltas > this.faltasMaximas && mediaFinal < mediaEspecial){
            console.log(`O aluno: ${student.nome} foi Reprovado por faltas`)
            return false;
        } else if(mediaFinal < this.notaDeAprovacao){
            console.log(`O aluno: ${student.nome} foi Reprovado por notas`)
            return false;
        } else {
            console.log(`O aluno: ${student.nome} foi Aprovado`)
            return true;
        }
    },    

    verificarAprovacao() {
        for( let i = 0; i < this.listaEstudantes.length; i++ ) {
            curso.paraSerAprovado(this.listaEstudantes[i]);            
                }
    },
};

console.log('==========CURSO==========');
console.log(`------ ${curso.nomeDoCurso} ------`);
console.log('=====DETALHES DO CURSO=====');
console.log(`Nota de Aprovação: ${curso.notaDeAprovacao}`);
console.log(`Máximo de Faltas: ${curso.faltasMaximas}`);
console.log('=====RESULTADO FINAL=====');
curso.verificarAprovacao();
console.log('============================================');