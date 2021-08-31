let btn1 = document.querySelector('#cadastra')
btn1.addEventListener('click', function (event) {


  let img = document.getElementById("img").value
  let nome = document.getElementById("nome").value
  let descricao = document.getElementById("descricao").value

  const div = document.createElement('div')
                   div.innerHTML = `
                                   <p class="finalizado">Filme</p>
                                   <h4>${nome}</h4>
                                   <img class="img-materias" src="${img}" alt="">
                                   <p>${descricao}</p>`

  document.getElementById('content').appendChild(div)


})