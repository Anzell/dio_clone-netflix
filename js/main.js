$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    responsive:{
        0: {
            items:1
        },
        700: {
            items:3
        },
        1000: {
            items:5
        }
    }
});

var modal = document.getElementById("modal");
var botaoFecharModal = document.getElementById("botaoFecharModal")

document.querySelectorAll(".filme").forEach(botao => {
    botao.addEventListener("click", () => {
        modal.style.display = "block";
        var trailerUrl = botao.attributes['trailerUrl']['value'];
        document.getElementById("conteudoModal").insertAdjacentHTML("beforeend", 
            `<iframe id="trailer" width="100%" height="400px"  src="${trailerUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        );
    });
});

document.querySelectorAll(".maisInformacoesFilme").forEach(botao => {
    botao.addEventListener("click", () => {
        modal.style.display = "block";
        var sinopseFilme = botao.attributes['sinopseFilme']['value'];
        document.getElementById("conteudoModal").insertAdjacentHTML("beforeend", 
            `<p id = "sinopseFilmeExpandido">${sinopseFilme}</p>`
        );
    });
});

botaoFecharModal.onclick = function() {
    modal.style.display = "none";
    var trailer = document.getElementById("trailer");
    var sinopse = document.getElementById("sinopseFilmeExpandido");
    if(trailer != null){
        trailer.remove();
    }
    if(sinopse != null){
        sinopse.remove();
    }  
};

