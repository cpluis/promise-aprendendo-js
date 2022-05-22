function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
               resolve(msg);
        },tempo);
    })
}

// o segredo é sempre no retorno passar mais um esperaAi e criar mais um then pra receber a resposta
// caso seja necessário mais uma chamada é só retornar mais um esperaAi e ter outro then para printar a informação 

esperaAi('1 Conexão com o BD', rand(1.3)) //mandando a primeira mensagem
    .then(resposta =>{
        console.log(resposta);//printa a resposta
        return esperaAi('2 Busca dados da BASE', rand(1,3));//chama o novamente o metodo  agora é o 2
    })
    .then(resposta =>{
        console.log(resposta) // retorna a resposta qua foi chamada no 2
        return esperaAi('3 Tratando os dados da BASE', rand(1,3)); // chama o 3 e passa a frase
    })
    .then(resposta =>{
        console.log(resposta)    // retornando a frase 3
        return esperaAi('4 Exibe os dados na tela', rand(1,3));    // manda a mensagem para o 4
    })
    .then(resposta=>{
        console.log(resposta) // retorna o 4
        return esperaAi('5 Ultima chamada', rand(1,3)); // metodo para o 5
    })
    .then(resposta=>{
        console.log(resposta) // retorna o 5 
        return esperaAi('6 fazendo outra coisa', rand(1,3)); // metodo para o 6
    })
    .then(resposta=>{
        console.log(resposta) // retorna o 6
        return esperaAi('7 fazendo outra coisa', rand(1,3)); // metodo para o 7
    })
    .then(resposta=>{
        console.log(resposta) // retorna o 7
        return esperaAi('8 fazendo outra coisa', rand(1,3)); // metodo para o 8
    })
    .then(resposta=>{
        console.log(resposta) // retorna o 8
        return esperaAi('9 fazendo outra coisa', rand(1,3)); // metodo para o 9
    })
    .then(resposta=>{
        console.log(resposta) // retorna o 9
        return esperaAi('10 fazendo outra coisa', rand(1,3)); // metodo para o 10
    })
    .then(resposta=>{
        console.log(resposta) // retorna o 10
        return esperaAi('11 fazendo outra coisa', rand(1,3)); // metodo para o 11
    })
    .then(resposta=>{
        console.log(resposta) // retorna o 11
        return esperaAi('12 fazendo outra coisa', rand(1,3)); // metodo para o 12
    })
    .then(resposta=>{
        console.log(resposta) // retorna o 12
        return esperaAi('13 fazendo outra coisa', rand(1,3)); // metodo para o 13
    })
    .then(resposta=>{
        console.log(resposta) // retorna o 13
    })
    .catch();