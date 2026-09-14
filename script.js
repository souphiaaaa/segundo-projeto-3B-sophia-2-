const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const caixaResultado = document.querySelector('.texto-resultado');
const listsa = [item1, item2]
const perguntas = {
tamanho: 20,
tipo 'HB',
cor: 'grafite',
temBorrachaAtras: false
}
const perguntas = [
{
enunciado: "Qual é o objetivo principal dos sobreviventes durante uma partida?",
Alternativas: [
"Concertar geradores e escapar",
"Encontrar 5 totens"
] ,
},
{
enunciado: "O que são Perks?",
Alternativas: [
"Modificadores exclusivos do mapa",
"Habilidades equipaveis que concedem efeitos especiais"
],
},
{
enunciado: "Qual destes killers possui uma habilidade que permite se teleportar através de uma rede de portais??",
Alternativas: [
"Nurse",
"Demogorgon"
],
},
];
let atual = 0;
let perguntaAtual;

function mostraPergunta () {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas [atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado
    mostraAlternativa();
}


function mostraAlternativa(){
for (const alternativa of perguntaAtual.alternativas) {
const botaoAlternativa = document.createElement("button");
botaoAlternativa.textContent = alternativa.texto;
botaoAlternativa.addEventListener("click", function (){
atual++;
mostraPergunta();
})
}
}

function respostaSelecionada (opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
historiaFinal = afirmacoes;
atual++;
mostraPergunta();
}