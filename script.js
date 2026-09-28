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
alternativas: [
{
texto: "Concertar geradores e escapar",
afirmacao: "afirmacao"
},
{
texto: "Encontrar 5 totens",
afirmacao: "afirmacao"
}
]
},
{
enunciado: "O que são Perks?",
alternativas: [
{
texto: "Modificadores exclusivos do mapa",
afirmacao: "afirmacao"
},
{
texto: "Habilidades equipaveis que concedem efeitos especiais",
afirmacao: "afirmacao"
}

]

},
{
enunciado: "Qual destes killers possui uma habilidade que permite se teleportar através de uma rede de portais??",
alternativas: [
{
texto: "Nurse",
afirmacao: "afirmacao"
},
{
texto: "Demogorgon",
afirmacao: "afirmacao"
}

]
}
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

function mostraResultado(){
caixaPerguntas.textContent = "Em 2049...";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}

mostraPergunta();