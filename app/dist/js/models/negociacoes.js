export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    ehIgual(objeto) {
        return JSON.stringify(objeto.lista()) === JSON.stringify(this.lista());
    }
}
//# sourceMappingURL=negociacoes.js.map