export function logarTempoDeExecucao(emSegundos: boolean = false){
    /*
        EXPLICAÇÃO BÁSICA SOBRE OS PARÃMETROS DO DECORATOR
        target: any: Esse parâmetro representa o objeto alvo da decoração. No contexto de um decorator de classe, target se refere à própria classe sendo decorada. No contexto de um decorator de método, target se refere à função/método sendo decorado.
        propertyKey: string: Esse parâmetro representa a chave (nome) da propriedade/método sendo decorado. No caso de um decorator de classe, propertyKey será undefined, pois não está sendo aplicado diretamente a uma propriedade ou método específico.
        descriptor: PropertyDescriptor: Esse parâmetro contém informações sobre a propriedade/método sendo decorado. PropertyDescriptor é uma interface que define as propriedades de um descritor de propriedade. Ele contém informações como value (valor da propriedade/método), writable (se a propriedade/método pode ser escrita), enumerable (se a propriedade/método pode ser enumerada) e configurable (se a propriedade/método pode ser reconfigurada).
    */
    return function(
        target:any,
        propertyKey:string,
        descriptor:PropertyDescriptor
    ){
        //salvamos o método original para usar depois em algum momento
        const metodoOriginal = descriptor.value; 

        //vamos alterar o método orignal, passando os argumentos originais
        descriptor.value = function(...args:Array<any>){
            let divisor = 1;
            let unidade = 'milesegundos';
            if (emSegundos){
                divisor = 1000;
                unidade = 'segundos'
            }

            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`Método: ${propertyKey}, tempo de execução ${(t2 - t1)/divisor} ${unidade}`);
            retorno;
        }
        return descriptor;
    }
}