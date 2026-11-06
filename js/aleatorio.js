
const nomes = [
    "Ana",
    "Fernanda",
    "Maria",
    "Lucas",
    "Gabriel",
    "Amanda",
    "Gustavo",
    "Mariana"
];

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);

    return lista[posicao];
}

export const nome = aleatorio(nomes);
