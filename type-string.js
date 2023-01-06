const texto1 = "Olá mundo!";
const texto2 = 'Olá mundo';

const senha = "senhaSuperSegura456!";
const StringDeNumeros = "34567";


// Concatenação (+)

const citacao = "Meu nome é ";
const meuNome = "Juliano";
console.log(citacao + meuNome);


// Código Unicode

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// Trabalhando com strings

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

const minhaSenha = "minhaSenha123";
console.log(senha.length) // 13 caracteres

