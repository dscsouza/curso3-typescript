export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    paraTexto() {
        return `PARA TEXTO: 
        Data: ${this.data.getDate()} 
        Qtd: ${this.quantidade} 
        Valor: ${this.valor}`;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
    ehIgual(objeto) {
        return (this.data.getDay === objeto.data.getDay &&
            this.data.getMonth === objeto.data.getMonth &&
            this.data.getFullYear === objeto.data.getFullYear &&
            this.quantidade === objeto.quantidade &&
            this.valor === objeto.valor);
    }
}
//# sourceMappingURL=negociacao.js.map