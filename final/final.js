let hand;
let alpha, af, ab;
let tsz, tl, ts;
let tw, th;
let scrn;
let french, cater, croi, donut, toast, bagel;

function preload(){
  hand = loadFont('MotleyForcesRegular.ttf');
  french = loadImage('french.png');
  cater = loadImage('caterpillar.png');
  croi = loadImage('croissant.png');
  donut = loadImage('donut.png');
  toast = loadImage('toast.png');
  bagel = loadImage('bagel.png');
}

function setup(){
  createCanvas(800,800);
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
  translate(400, 300);
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
  textAlign(CENTER);
  textFont(hand, 100);
  text('Bread Run!', 0, 0);
  pop()

  //img

  textAlign(CENTER); //start button
  textFont(hand, tsz);
  text('Start', 400, 550);
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

}

function lv1(){ //first level
  background(0);
}

function mousePressed(){
  //used to make the text the button
  //mouseX > 400 - tw/2 && mouseX < 400 + tw/2 && mouseY > 550 - th && mouseY < 550
  if(mouseX        && scrn == 'start'){
    scrn = 'lv1';
  }
  
}

function draw(){
  background(255);
  if(scrn == 'start'){
    start();
  }
  else if(scrn == 'lv1'){
    lvl();
  }
}