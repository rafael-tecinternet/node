let aluno = "rafa";
let idade = 28;
import chalk from 'chalk';
console.log(chalk.magenta('Trabalhando com NPM'));
if (idade >= 18) {
    console.log(chalk.blue(`${aluno} é maior de idade!`))
} else {
    console.log(`${aluno} ${chalk.red('é menor de idade!')}`);
}
/* para instalar o chalk utilizamos o comando npm install chalk.
Chalk é um dos muitos pacotes disponíveis no repositório npmjs.com */