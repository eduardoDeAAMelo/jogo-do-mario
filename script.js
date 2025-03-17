const mario = document.querySelector('.mario');
const pipeGreen = document.querySelector('.pipeGreen');
const pipeRed = document.querySelector('.pipeRed');
const pipeBlue = document.querySelector('.pipeBlue');
const bala = document.querySelector('.bala');
const turtle = document.querySelector('.turtle');
const sun = document.querySelector('.sun');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    } ,500);
}

const loop = setInterval(() => {
    
    const pipeGreenPosition = pipeGreen.offsetLeft;
    const pipeRedPosition = pipeRed.offsetLeft;
    const pipeBluePosition = pipeBlue.offsetLeft;
    const sunPosition = sun.offsetLeft;
    const turtlePosition = turtle.offsetLeft;
    const balaPosition = bala.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipeGreenPosition <= 120 && pipeGreenPosition > 0 && marioPosition < 100) {

        sun.style.animation = 'none';
        sun.style.left = `${sunPosition}px`;

        turtle.style.animation = 'none';
        turtle.style.left = `${turtlePosition}px`;

        bala.style.animation = 'none';
        bala.style.left = `${balaPosition}px`;

        pipeGreen.style.animation = 'none';
        pipeGreen.style.left = `${pipeGreenPosition}px`;

        pipeRed.style.animation = 'none';
        pipeRed.style.left = `${pipeRedPosition}px`;
        
        pipeBlue.style.animation = 'none';
        pipeBlue.style.left = `${pipeBluePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './assets/mario-dead.gif';
        mario.style.width = '120px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
        
    }
    if (pipeRedPosition <= 140 && pipeRedPosition > 0 && marioPosition < 120) {

        sun.style.animation = 'none';
        sun.style.left = `${sunPosition}px`;

        turtle.style.animation = 'none';
        turtle.style.left = `${turtlePosition}px`;

        bala.style.animation = 'none';
        bala.style.left = `${balaPosition}px`;

        pipeGreen.style.animation = 'none';
        pipeGreen.style.left = `${pipeGreenPosition}px`;

        pipeRed.style.animation = 'none';
        pipeRed.style.left = `${pipeRedPosition}px`;

        pipeBlue.style.animation = 'none';
        pipeBlue.style.left = `${pipeBluePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './assets/mario-dead.gif';
        mario.style.width = '120px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
        
    }
    if (pipeBluePosition <= 120 && pipeBluePosition > 0 && marioPosition < 120) {

        sun.style.animation = 'none';
        sun.style.left = `${sunPosition}px`;

        turtle.style.animation = 'none';
        turtle.style.left = `${turtlePosition}px`;

        bala.style.animation = 'none';
        bala.style.left = `${balaPosition}px`;

        pipeGreen.style.animation = 'none';
        pipeGreen.style.left = `${pipeGreenPosition}px`;

        pipeRed.style.animation = 'none';
        pipeRed.style.left = `${pipeRedPosition}px`;

        pipeBlue.style.animation = 'none';
        pipeBlue.style.left = `${pipeBluePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './assets/mario-dead.gif';
        mario.style.width = '120px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
        
    }
    if (balaPosition <= 120 && balaPosition > 0 && marioPosition > 30) {

        sun.style.animation = 'none';
        sun.style.left = `${sunPosition}px`;

        turtle.style.animation = 'none';
        turtle.style.left = `${turtlePosition}px`;

        bala.style.animation = 'none';
        bala.style.left = `${balaPosition}px`;

        pipeGreen.style.animation = 'none';
        pipeGreen.style.left = `${pipeGreenPosition}px`;

        pipeRed.style.animation = 'none';
        pipeRed.style.left = `${pipeRedPosition}px`;

        pipeBlue.style.animation = 'none';
        pipeBlue.style.left = `${pipeBluePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './assets/mario-dead.gif';
        mario.style.width = '120px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
        
    }
    if (turtlePosition <= 120 && turtlePosition > 0 && marioPosition < 120) {

        sun.style.animation = 'none';
        sun.style.left = `${sunPosition}px`;

        turtle.style.animation = 'none';
        turtle.style.left = `${turtlePosition}px`;

        bala.style.animation = 'none';
        bala.style.left = `${balaPosition}px`;

        pipeGreen.style.animation = 'none';
        pipeGreen.style.left = `${pipeGreenPosition}px`;

        pipeRed.style.animation = 'none';
        pipeRed.style.left = `${pipeRedPosition}px`;
        
        pipeBlue.style.animation = 'none';
        pipeBlue.style.left = `${pipeBluePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './assets/mario-dead.gif';
        mario.style.width = '120px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
        
    }

},10);

document.addEventListener('keydown', jump);