let galeria = document.getElementById('galeria')

function galeriapcr(codigo) {

  galeria.innerHTML = ''

  for (let i = 0; i < dados.length; i++) {

    if (dados[i].codigo == codigo) {
      galeria.innerHTML += `
      <div class="col-lg-4 col-md-6 col-12 p-3">
          <div class="card text-dark pb-3 w-100 h-100">
              <img src="${dados[i].url}" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">${dados[i].titulo}</h5>
                <p class="card-text">${dados[i].descricao}</p>
              </div>
          </div>
      </div>

  `
    }
    }
  }
