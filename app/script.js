const saida = document.querySelector(".texto_apresentação")
function efeito (texto, contador) {
    if(contador < texto.length){


        setTimeout(() =>{
            saida.textContent += texto.charAt(contador)
            contador++
            efeito(texto, contador)
        }, 90)
    }
}

efeito("<p>Olá, meu nome é Marcos gomes eu sou um desenvolvedor front-end</p>", 0)

