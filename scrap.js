let imagesDescriptions = {
    'bubassauro': {
        descricao: 'Do tipo planta e que é muito forte',
        tipos: ["planta", "terra"]
    }, 
    'charmander': {
        descricao: 'Do tipo fogo e que é maior palha',
        tipos: ["fogo", "foguinho"]
    }, 
    'pikachu': {
        descricao: 'Do tipo que dá choque quando encosta',
        tipos: ["choque", "elétrico"]
    },
    'squirtle': {
        descricao: 'Do tipo que agua e molha tudo',
        tipos: ["água", "cachoeirinha"]
    }, 
}


sequencia = 0
for (pokemon in imagesDescriptions) {
    console.log(sequencia,'- Nome: ',pokemon)
    console.log('-- Descrição:  ',imagesDescriptions[pokemon].descricao)
    console.log('-- Tipos:  ', imagesDescriptions[pokemon].tipos)
    sequencia++
    
}


