const sonic = document.querySelector("#sonic")

sonic.addEventListener("mousemove", efeitoImagem)
sonic.addEventListener("mouseleave", sonicBack);
sonic.addEventListener("mouseenter", sonicEnter);

function efeitoImagem(event) {
    const sonicWidith = sonic.offsetWidth
    const sonicHeight = sonic.offsetHeight
    const eixox = sonic.offsetLeft + sonicWidith/2
    const eixoy = sonic.offsetTop + sonicHeight/2
    const positionX = event.clientX - eixox
    const positionY = event.clientY - eixoy


    const rotateX = ((+1)*10*positionY/(sonicHeight/2)).toFixed(2)
    const rotateY = ((-1)*10*positionX/(sonicWidith/2)).toFixed(2)

    sonic.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

}

function sonicBack(event)
{
    sonic.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`;
    sonicTransition();
}

function sonicTransition()
{
    clearInterval(sonic.transitionId);
    sonic.style.transition = 'transform 400ms';
    sonic.transitionId = setTimeout(() => {
        sonic.style.transition = '';
    },400);
}

function sonicEnter(event)
{
    sonicTransition();
}
