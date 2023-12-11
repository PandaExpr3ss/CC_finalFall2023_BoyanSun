let handwriting;
let alpha, af, ab;
let tsz, tl, ts;
let tw, th;
let scrn;
let french, cater, croi, donut, toast, bagel;
let startbg, startbutton;

function preload(){
  handwriting = loadFont('MotleyForcesRegular.ttf');
  french = loadImage('french.png');
  cater = loadImage('caterpillar.png');
  croi = loadImage('croissant.png');
  donut = loadImage('donut.png');
  toast = loadImage('toast.png');
  bagel = loadImage('bagel.png');
  startbg = loadImage('startbackground.png');
}

function setup(){
  createCanvas(800/9*16,800);
  //createCanvas(windowWidth,windowHeight);
  background(255);

  alpha = 0; //title
  af = true;
  ab = false;
  tsz = 80;
  tl = true;
  ts = false;
  scrn = 'start';
}

function start(){ //start screen
  push(); //title
  translate(cusMap(800/9*16/2, 'x'), cusMap(300, 'y'));
  if(af){
    alpha += 0.005;
  }
  else if(ab){
    alpha -= 0.005;
  }
  if(alpha >= PI/16 && af){
    ab = true;
    af = false;
  }
  else if(alpha <= -PI/16 && ab){
    ab = false;
    af = true;
  }
  rotate(alpha);
  scale(cusMap(1, 's'));
  textAlign(CENTER);
  textFont(handwriting, 100);
  text("Let's Go Fishing!", 0, 0);
  pop()

  //img

  //startbutton = createImage('startbutton.png');
  //startbutton.position()

  push();
  translate(cusMap(800/9*16/2, 'x'), cusMap(550, 'y'));
  scale(cusMap(1, 's'));
  textAlign(CENTER); //start button
  textFont(handwriting, tsz);
  text('Start', 0, 0);
  //tw = textWidth('Start'); //used to make the text the button
  //th = textAscent('Start'); //commented out because the image is now the button
  if(tl){
    tsz += 1;
  }
  else if(ts){
    tsz -= 1;
  }
  if(tsz >= 90 && tl){
    tl = false;
    ts = true;
  }
  else if(tsz <= 70 && ts){
    ts = false;
    tl = true;
  }
  pop();

}

function cusMap(v, side){
  if(side == 'x'){
    nv = map(v, 0, 800/9*16, 0, windowWidth);
  }
  else if(side == 'y'){
    nv = map(v, 0, 800, 0, windowHeight);
  }
  else if(side == 's'){
    nv = createVector();
    nv = (v/800/9*16*windowWidth, v/800*windowHeight);
  }
  return nv;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function beforeCast(){ //screen before casting the bait
  background(0);
}

function mousePressed(){
  //used to make the text the button
  //mouseX > 400 - tw/2 && mouseX < 400 + tw/2 && mouseY > 550 - th && mouseY < 550
  if(mouseX        && scrn == 'start'){
    scrn = 'beforeCast';
  }
  
}

function draw(){
  background(255);
  if(scrn == 'start'){
    start();
  }
  else if(scrn == 'beforeCast'){
    beforeCast();
  }
}