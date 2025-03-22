$(document).ready(function(){
    $('.filmes').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        // autoplaySpeed: 500,
    })
})

// $(document).ready(function(){
//     $('.filmes div').each(function(){
//         var imageUrl = $(this).find('img').attr('src');
//         $(this).html('<a href="/info-filme.html"><img src="' + imageUrl + '"></a>');
//     });
// });