import {aleatorio} from ‘./aleatorio.js’; import { aleatorio, nome } from './aleatorio.js';
import {perguntas} from ‘./perguntas.js’;


const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const caixaResultado = document.querySelector('.texto-resultado');
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const listsa = [item1, item2]
const perguntas = {
tamanho: 20,
tipo 'HB',
cor: 'grafite',
temBorrachaAtras: false
}
const perguntas = [
]

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
    const afirmacoes = aleatorio (opcaoSelecionada.afirmacao);
historiaFinal += afirmacoes + "  ";
atual++;
function jogaNovamente() {
    atual = 0;
    historiaFinal = "";
    caixaResultado.classList.remove("mostrar");
    mostraPergunta();
}
mostraPergunta();
}

function mostraResultado(){
caixaPerguntas.textContent = "Em 2049...";
textoResultado.textContent = caixaPerguntas.textContent = `Em 2049, ${nome}`;;
caixaAlternativas.textContent = "";
caixaResultado.classList.add("mostrar");

botaoJogarNovamente.addEventListener("click", jogaNovamente);
}

function aleatorio (lista) {
const posicao = Math floor(Math.radom() *lista.lenght);
return lista [posicao];

}
function substituiNome() {
    for (const pergunta of perguntas) {
        pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}

substituiNome();
mostraPergunta();