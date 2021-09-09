
/* cria uma variável btn1 e associa ao ID #cadastra */
let btn1 = document.querySelector('#cadastra')
/* Pega esse o evento do click ligado ao btn1 , através dele sempre que clicar executa a função abaixo  */
btn1.addEventListener('click', function (event) {
  event.preventDefault() /* já deixa desabilitado por default somente abilita com o click */

  /* cria uma variável img e associa ao ID img pegando seu valor com o .value */
  let img = document.getElementById("img").value
   /* cria uma variável nome e associa ao ID nome pegando seu valor com o .value */
  let nome = document.getElementById("nome").value
     /* cria uma variável descricao e associa ao ID descricao pegando seu valor com o .value */
  let descricao = document.getElementById("descricao").value

/* cria uma div e associa a const div somente quando a addEventListener for acionado  */
  const div = document.createElement('div')
 /* Ele irar criar uma div e colocara as informações nos campos, nome, img e descricao
  que ele pegar no .value que o usuário ira digitar */
                   div.innerHTML = `
                                   <p class="finalizado">Filme</p>
                                   <h4>${nome}</h4>
                                   <img class="img-materias" src="${img}" alt="">
                                   <p>${descricao}</p>`
/* apontando a const div para ser inserida dentro da ID content */
  document.getElementById('content').appendChild(div)


})


// a função mostrarForm abre o campo para inserção dos dados no formulário de contato
function mostrarForm() {
  document.getElementById('formContato').style.display='block';
}

// a função fechar fecha o formulário de co
function fecharForm() {
    document.getElementById('formContato').style.display='none';
}