let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2 ; 

let velocidadeXBolinha = 8;
let velocidadeYBolinha = 8;

let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 70;

let colidiu = false;

let xRaqueteOpo = 586;
let yRaqueteOpo = 150;

let velocidadeXOpo;
let velocidadeYOpo;

let meusPontos = 0;
let pontosOpo = 0;

let chanceDeErrar = 0;

let raquetada;
let trilha;
let ponto;

 function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");   

 }

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha() 
  movimentaBolinha()
  colisaoborda()
  mostraRaquete(xRaquete, yRaquete)
  movimentaMyRaquete()
  verificaColisaoRaquete(xRaquete, yRaquete)
  mostraRaquete(xRaqueteOpo, yRaqueteOpo)
  movimentaRaqueteOpo()
  verificaColisaoRaquete(xRaqueteOpo, yRaqueteOpo)
  placar()
  marcaPonto()
  bolinhaNaoFicaPresa()
  
}
function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro)
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colisaoborda(){
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}
function mostraRaquete(x,y) {
  rect(x, y, larguraRaquete, alturaRaquete);  
}
function movimentaMyRaquete() {
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
   if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}
function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadeXBolinha *= -1;
      raquetada.play();
    }
}
function movimentaRaqueteOpo(){
  velocidadeYOpo = yBolinha - yRaqueteOpo - larguraRaquete / 2 - 50;
// yRaqueteOpo += velocidadeYOpo;
//ou
yRaqueteOpo += velocidadeYOpo + chanceDeErrar
  calculaChanceDeErrar()
   // } 
}

//function movimentaRaqueteOpo(){
//if (keyIsDown(87)){
 //   yRaqueteOpo -= 10;
  //}
  // if (keyIsDown(83)) {
  //  yRaqueteOpo+= 10;
 // }
//}
function placar(){
  stroke(255);
  textAlign(CENTER)
  textSize(16);
  
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20)
  fill(255);
  text(meusPontos, 170, 26 )
  
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20)
  fill(255);
  text(pontosOpo, 470, 26)
}
function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
    ponto.play()
  }
  if (xBolinha < 10){
    pontosOpo += 1;
    ponto.play()
  }
}
function calculaChanceDeErrar() {
  if (pontosOpo >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}
function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}