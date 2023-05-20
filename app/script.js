const saida = document.querySelector("#texto_inserido")
function efeito (texto, contador) {
    if(contador < texto.length){


        setTimeout(() =>{
            saida.textContent += texto.charAt(contador)
            contador++
            efeito(texto, contador)
        }, 90)
    }
}

efeito("Marcos gomes", 0)

window.sr = ScrollReveal({reset: true});

sr.reveal('.seção',{
    rotate: { x:80, y:0, z:0},
    duration: 1250
});