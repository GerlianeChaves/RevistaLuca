function menuX(x) {
    console.log('menuX chamada')
    x.classList.toggle("change");
    var menu = document.getElementById("menu")
    menu.classList.toggle("show")
}

$(document).ready(function(){
    $('.carrossel').slick({
        // dots: false, // Adicione pontos de navegação (opcional)
        autoplay: true, // Ative a reprodução automática (opcional)
        autoplaySpeed: 1000 // Define a velocidade da reprodução automática (opcional)
    })
})

$(document).ready(function(){
    $('.filmes').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
    })
})
