const burgueropen = document.querySelector('.burgueropen');
const conteudoBurguer = document.querySelector('.menu-mobile-conteudo')
const main = document.querySelector('.cont-principal')


function menuAbrir(){
    if(burgueropen) {
        conteudoBurguer.classList.toggle('ativo');
        main.classList.toggle('desativa');
        // burgueropen.setAttribute('src', './assets/img/menu-buguer-close.svg');

    }
}


burgueropen.addEventListener('click', menuAbrir);
