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
