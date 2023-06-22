/*Botão mostrar cardapio lanches*/
const btnLanches = document.querySelector('.btnLanches');
const boxLanches = document.querySelector('.boxLanches');

btnLanches.addEventListener('click', function(){
    if(boxLanches.style.display === 'block'){
        boxLanches.style.display = 'none';
    }else{
        boxLanches.style.display = 'block';
        boxBebidas.style.display = 'none';
        boxExtras.style.display = 'none';
    }
});
/*Botão mostrar cardapio lanches*/

/*Botão mostrar cardapio Bebidas*/
const btnBebidas = document.querySelector('.btnBebidas');
const boxBebidas = document.querySelector('.boxBebidas');

btnBebidas.addEventListener('click', function(){
    if(boxBebidas.style.display === 'block'){
        boxBebidas.style.display = 'none';
    }else{
        boxBebidas.style.display = 'block';
        boxLanches.style.display = 'none';
        boxExtras.style.display = 'none';
    }
});
/*Botão mostrar cardapio Bebidas*/

/*Botão mostrar cardapio Extra*/
const btnExtras = document.querySelector('.btnExtras');
const boxExtras = document.querySelector('.boxExtras');

btnExtras.addEventListener('click', function(){
    if(boxExtras.style.display === 'block'){
        boxExtras.style.display = 'none';
    }else{
        boxExtras.style.display = 'block';
        boxLanches.style.display = 'none';
        boxBebidas.style.display = 'none';
    }
});
/*Botão mostrar cardapio Extra*/

/*Botão Voltar ao Topo*/
const botaoParaTopo = document.querySelector(".bntVoltarAoTopo");

window.addEventListener("scroll", function (event) {
    if (this.window.scrollY == 0){
        botaoParaTopo.classList.remove("visible");
    }else{
        botaoParaTopo.classList.add("visible");
    }
})
/*Botão Voltar ao Topo*/

