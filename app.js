//primeiro começa com a função sortear, pegando a quantidade e os números
function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    //para mostrar os números sorteados precisa de uma lista (array)
    let sorteados = [];
    let numero;
    //aqui usamos o loop for para repetir um bloco de código enquanto uma condição é verdadeira
    for (let i = 0; i < quantidade; i++){
      numero = obterNumeroAleatorio(de,ate);
      //no entanto, ainda poderia ocorrer de ter números iguais, por isso o novo loop while
      while (sorteados.includes(numero)){
        numero = obterNumeroAleatorio(de,ate);
      }
      //para colocar os valores lá
      sorteados.push(numero);
      }
    //para deixar os números serem exibidos em ordem crescente
    sorteados.sort((a, b) => a - b);
    //aqui se pega o elemento resultado e insere no HTML os números que foram sorteados
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`
    //para reiniciar o jogo, precisamos alterar o status do botão reiniciar que está inicialmente desativado no HTML, na função descrita mais abaixo no código
    alterarStatusBotao();
}
//criando uma função para sortear os números, sendo um número inteiro, incluindo máximo e mínimo
function obterNumeroAleatorio(min,max){
    return Math.floor(Math.random()*(max - min + 1)) + min;
}
function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
        //isso tudo dessa função muda o status do botão reiniciar, mas nao gera a função do reiniciar em si, para isso precisa de uma nova função
    }
}
function reiniciar(){
    //colocando os 3 elementos iniciais iguais ao vazio
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    //fazendo o resultado ser igual a nenhum até agora com trecho do próprio HTML
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    //chamando o alterar o status do botão
    alterarStatusBotao();
}
