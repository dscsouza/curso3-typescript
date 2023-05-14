/*
    Objetivo deste decorator é transformar as propriedades/variáveis invocadas no
    negociação controller em getters.
    Desta forma, no início são transoformadas em getters, depois qdo forem
    chamadas inputData.value, por exemplo, elas buscam o elemento correspondente
    no DOM. 
    Assim, não precisamos de outras funções as definindo e podemos usar a 
    sintaxe abaixo no negociação controller

        @domInjector("#data")
        private inputData: HTMLInputElement;
        @domInjector("#quantidade")
        private inputQuantidade: HTMLInputElement;
        @domInjector("#valor")
        private inputValor: HTMLInputElement;


*/

export function domInjector(seletor:string){
    return function(target:any, propertyKey: string){
        console.log(`Modificando o prototype ${target.constructor.name}
            e adicionando getter para a propriedade ${propertyKey}`)
        const getter = function(){
            const elemento = document.querySelector(seletor);

            console.log(`buscando elemento do DOM com o seletor ${seletor}
                para injetar em ${propertyKey}`)
            return elemento
        }


        // Aplicando o getter na propriedade definida pela variável propertyKey
        Object.defineProperty(
            target, 
            propertyKey, 
            { get: getter }
        );
    }
}