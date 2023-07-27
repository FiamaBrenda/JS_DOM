// Algoritmo

// CALCULARIMC
// 1. Pegar os valores
// 2. Calcular o IMC
// 3. Gerar a classificação do IMC
// 4. Organizar as informações
// 5. Salvar os dados na lista
// 6. Ler a lista com os dados
// 7. Renderizar o conteudo no html
// 8. Botão de limpar os registros 

//Função principal
function calcularImc(event) {
    event.preventDefault()

    console.log("Funcionante!!!");

    let dadosUsuario = pegarValores();

    let imc = calcular(dadosUsuario.altura, dadosUsuario.peso);

    let classificacaoImc = classificarImc();

    let  dadosUsuarioAtualizado = organizarDados(dadosUsuario, imc, classificacaoImc);
    cadastroUsuario(dadosUsuarioAtualizado);

   /*  console.log(classificarImc(imc)); */





}

// Passo 1 - Pegar valor
function pegarValores() {
    let nomeRecebido = document.getElementById("nome").value.trim();
    let alturaRecebida = parseFloat(document.getElementById("altura").value);
    let pesoRecebido = parseFloat(document.getElementById("peso").value);

    let dadosUsuario = {
        nome: nomeRecebido,
        altura: alturaRecebida,
        peso: pesoRecebido
    }

    console.log(dadosUsuario);

    return dadosUsuario;
}


//Passo 2 - Calcular
function calcular(altura, peso) {
    let imc = peso / (altura * altura)

    console.log(imc);

    return imc;
}


//Passo 3 - Classificar
function classificarImc(imc) {
    /*
        Resultado	        Situação
        Abaixo de 18,5      Filezinho!!
        Entre 18,5 e 24,99	Diliça!!!!
        Entre 25 e 29,99	Ta Top!!!
        Acima de 30      	Oh la em casa!!!
    */

    if(imc < 18.5){
        return "Filezinho!!!";

    }else if(imc < 25){
        return "Diliça!!!"

    }else if (imc < 30) {
        return "Ta Top!!!"

    }else{
        return "Oh la em casa!!!"
    }
}

//Passo 4 - Organizar Informacoes 
function organizarDados(dadosUsuario, valorImc, classificarImc){
    let dtHoraAtual = Intl.DateTimeFormat('pt-BR',{timeStyle:'long', dateStyle:'short'}).format(Date.now());

    let dadosUsuarioAtualizado = {
        ...dadosUsuario,
        imc: valorImc.toFixed(2),
        classificacao: classificarImc,
        dataCadastro: dtHoraAtual
    }

    console.log(dadosUsuarioAtualizado);

    return dadosUsuarioAtualizado;
}

// Passo 5 - Salvar


function cadastroUsuario(usuario){

    let listaUsuarios = [];

    if (localStorage.getItem("usuariosCadastrados")) {
        listaUsuarios = JSON.parse(localStorage.getItem("usuariosCadastrados"));
    }

    listaUsuarios.push(usuario)

    localStorage.setItem("usuariosCadastrados", JSON.stringify(listaUsuarios))


}