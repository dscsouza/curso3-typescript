import { Comparavel } from '../interfaces/comparavel.js';
import { Negociacao } from './negociacao.js';

export class Negociacoes implements Comparavel<Negociacoes> {
    
    
    private negociacoes: Negociacao[] = [];
    
    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }
    
    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

    public ehIgual(objeto: Negociacoes): boolean {
        
        return JSON.stringify(objeto.lista()) === JSON.stringify(this.lista())
        
    }

}
