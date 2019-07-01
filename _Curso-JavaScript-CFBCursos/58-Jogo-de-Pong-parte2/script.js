//Elementos
var vbtIniciar;
var vbola;
var vcpu;
var vjogador;
var vPaineltxtPontos;

//Controle de Animação
var game, frames;

//Posições
var posBolaX, posBolaY;
var posJogadorX, posJogadorY;
var posCpuX, posCpuY;

//Direção de acordo com a tecla
var dirJy;

//Posições iniciais
var posJogIniY = 180;
var posCpuIniY = 180;
var posBolaIniX = 475;
var posBolaIniY = 240;

//Tamanhos
var campoX = 0, campoY = 0, campoW = 960, campoH = 500;
var barraW = 20, barraH = 140, bolaW = 20, bolaH = 20;

//Direção
var bolaX, bolaY;
var cpuY = 0;

//Velocidade
var velBola, velCpu, velJogador;

//Controle
var pontos = 0;
var tecla;
var jogo = false;

function controlajog(){
    if(jogo){
        posJogadorY += velJogador * dirJy;
        vjogador.style.top = posJogadorY + "px";
        
    }
}

function teclaDw(){
    tecla = event.keyCode;
    if(tecla == 38){//cima
        dirJy = -1;    
    }else if(tecla == 40){//cima
        dirJy = +1;    
    }
    
}
function teclaUp(){
    tecla = event.keyCode;
    if(tecla == 38){//cima
        dirJy = 0;    
    }else if(tecla == 40){//cima
        dirJy = 0;    
    }
}

function game(){
    if(jogo){
        controlajog();
           
    }
    frames = requestAnimationFrame(game);
}

function iniciaJogo(){
    if(!jogo){
        cancelAnimationFrame(frames);
        jogo = true;
        dirJy = 0;
        posBolaX = posBolaIniX;
        posBolaY = posBolaIniY;
        posJogadorY = 0;
        posCpuY = posCpuIniY;
        grame();
    }
       
}

function inicializa(){
    velBola = velCpu = velJogador = 8;
    vbtIniciar = document.getElementById('btInicial');
    vbtIniciar.addEventListener('click', iniciaJogo);
    vjogador = document.getElementById('dvJogador');
    vcpu =document.getElementById('dvCpu');
    vbola = document.getElementById('dvBola');
    vPaineltxtPontos = document.getElementById('txtPontos');
    document.addEventListener("keydown", teclaDw);
    document.addEventListener("keyup", teclaUp);
}



window.addEventListener('load', inicializa);
























