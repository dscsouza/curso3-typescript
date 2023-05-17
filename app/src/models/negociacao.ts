
import { Modelo } from "../interfaces/modelo";

export class Negociacao implements Modelo<Negociacao> {
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    public paraTexto(): string {
        return `PARA TEXTO: 
        Data: ${this.data.getDate()} 
        Qtd: ${this.quantidade} 
        Valor: ${this.valor}`
    }

    
    get volume(): number {
        return this.quantidade * this.valor;
    }
    
    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }
    
    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }

    public ehIgual(objeto: Negociacao): boolean {
        return (
            this.data.getDay === objeto.data.getDay &&
            this.data.getMonth === objeto.data.getMonth &&
            this.data.getFullYear === objeto.data.getFullYear && 
            this.quantidade === objeto.quantidade &&
            this.valor === objeto.valor)
    }
}