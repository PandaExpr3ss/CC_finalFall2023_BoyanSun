let handwriting;
let alpha, af, ab;
let tsz, tl, ts;
let tw, th;
let scrn;
let french, cater, croi, donut, toast, bagel;
let startbg;
let stbgx1, stbgx2;
let op, opi, opf, opdone, ophalf;
let bgx1, bgx2;
let bgy1, bgy2;
let hook, aqua, inven, moneyicon, shop;
let money;
let boatimg, panda;
let btspn, bf, bb;
let boatspeed;
let heartimg;
let hearts;
let heartx, hearty;
let smallx1, smallx2, smally1, smally2;
let heartflip;
let liney;
let linedown, lineup;
let fishtype;
let heartmoney;
let abandonstart;
let reset;

function preload(){
  handwriting = loadFont('MotleyForcesRegular.ttf');
  french = loadImage('french.png');
  cater = loadImage('caterpillar.png');
  croi = loadImage('croissant.png');
  donut = loadImage('donut.png');
  toast = loadImage('toast.png');
  bagel = loadImage('bagel.png');
  startbg = loadImage('startbackground.png');
  hook = loadImage('hook.png');
  aqua = loadImage('aqua.png');
  inven = loadImage('inventory.png');
  moneyicon = loadImage('money.png');
  shop = loadImage('shop.png');
  boatimg = loadImage('boat.png');
  panda = loadImage('panda.png');
  heartimg = loadImage('heart.png');
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

  stbgx1 = 0; //start backgrounf
  stbgx2 = cusMap(800/9*16*2, 'x');

  op = 0; //transition
  opi = true;
  opf = false;
  opdone = false;
  ophalf = false;

  bgx1 = 0; //before cast
  bgx2 = stbgx2 = cusMap(800/9*16*4, 'x');
  bgy1 = 400;
  bgy2 = 400;
  money = 0;

  btspn = 0; //boat
  bf = true;
  bb = false;
  boatspeed = 0;

  smallx1 = -(cusMap(800/9*16, 'x')); //fish
  smallx2 = 0;

  heartx = [];
  for(let i = 0; i < 12; i++){
    if(i % 4 == 0 && i != 0){
      smallx1 += cusMap(800/9*16, 'x');
      smallx2 += cusMap(800/9*16, 'x');
    }
    heartx[i] = random(smallx1, smallx2);
  }

  smally1 = cusMap(500, 'y');
  smally2 = cusMap(750, 'y');

  hearty = [];
  for(let i = 0; i < 12; i++){
    hearty[i] = random(smally1, smally2);
  }

  heartflip = [];
  for(let i = 0; i < 12; i++){
    heartflip[i] = random(0, 1);
    if(heartflip[i] >= 0.5){
      heartflip[i] = 1;
    }
    else{
      heartflip[i] = -1;
    }
  }
  //print(heartx);
  //print(hearty);
  //print(heartflip);

  hearts = [];
  for(let i = 0; i < 12; i++){
    hearts[i] = new heart(heartx[i], hearty[i], heartimg, heartflip[i]);
    //print(heartflip[i]);
  }

  liney = 100; //line
  linemove = false;

  abandonstart = false;
  reset = false;

  fishtype = '';

  heartmoney = 600;
}

function start(){ //start screen
  image(startbg, stbgx1, 0, cusMap(800/9*16*2, 'x'), cusMap(800, 'y'), 0, 0, startbg.width, 1300);
  image(startbg, stbgx2, 0, cusMap(800/9*16*2, 'x'), cusMap(800, 'y'), 0, 0, startbg.width, 1300);
  stbgmove();

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

  push();
  translate(cusMap(800/9*16/2, 'x'), cusMap(550, 'y'));
  scale(cusMap(1, 's'));
  textAlign(CENTER); //start button
  textFont(handwriting, tsz);
  text('Start', 0, 0);
  tw = textWidth('Start'); //used to make the text the button
  th = textAscent('Start'); //commented out because the image is now the button
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

function stbgmove(){
  stbgx1 -= 1;
  stbgx2 -= 1;
  //print((cusMap(800/9*16*2, 'x')));
  if(stbgx1 <= -(cusMap(800/9*16, 'x'))){
    if(stbgx1 + cusMap(800/9*16*2, 'x') != stbgx2){
      stbgx2 = stbgx1 + cusMap(800/9*16*2, 'x');
    }
  }
  if(stbgx2 <= -(cusMap(800/9*16, 'x'))){
    if(stbgx2 + cusMap(800/9*16*2, 'x') != stbgx1){
      stbgx1 = stbgx2 + cusMap(800/9*16*2, 'x');
    }
  }
  if(stbgx1 <= -(cusMap(800/9*16*2, 'x'))){
    stbgx1 = cusMap(800/9*16*2, 'x');
    if(stbgx2 + cusMap(800/9*16*2, 'x') != stbgx1){
      stbgx1 = stbgx2 + cusMap(800/9*16*2, 'x');
    }
  }
  if(stbgx2 <= -(cusMap(800/9*16*2, 'x'))){
    stbgx2 = cusMap(800/9*16*2, 'x');
    if(stbgx1 + cusMap(800/9*16*2, 'x') != stbgx2){
      stbgx2 = stbgx1 + cusMap(800/9*16*2, 'x');
    }
  }
}

function bgmove(boatspeed){
  bgx1 -= 1 + boatspeed;
  bgx2 -= 1 + boatspeed;
  //print((cusMap(800/9*16*2, 'x')));
  if(1 + boatspeed >= 0){
    if(bgx1 <= -(cusMap(800/9*16, 'x'))){
      if(bgx1 + cusMap(800/9*16*4, 'x') != bgx2){
        bgx2 = bgx1 + cusMap(800/9*16*4, 'x');
      }
    }
    if(bgx2 <= -(cusMap(800/9*16, 'x'))){
      if(bgx2 + cusMap(800/9*16*4, 'x') != bgx1){
        bgx1 = bgx2 + cusMap(800/9*16*4, 'x');
      }
    }
    if(bgx1 <= -(cusMap(800/9*16*4, 'x'))){
      bgx1 = cusMap(800/9*16*4, 'x');
      if(bgx2 + cusMap(800/9*16*4, 'x') != bgx1){
        bgx1 = stbgx2 + cusMap(800/9*16*4, 'x');
      }
    }
    if(bgx2 <= -(cusMap(800/9*16*4, 'x'))){
      bgx2 = cusMap(800/9*16*4, 'x');
      if(bgx1 + cusMap(800/9*16*4, 'x') != bgx2){
        bgx2 = bgx1 + cusMap(800/9*16*4, 'x');
      }
    }
  }

  if(1 + boatspeed < 0){
    if(bgx1 >= -(cusMap(800/9*16*2, 'x'))){
      if(bgx1 - cusMap(800/9*16*4, 'x') != bgx2){
        bgx2 = bgx1 - cusMap(800/9*16*4, 'x');
      }
    }
    if(bgx2 >= -(cusMap(800/9*16*2, 'x'))){
      if(bgx2 - cusMap(800/9*16*4, 'x') != bgx1){
        bgx1 = bgx2 - cusMap(800/9*16*4, 'x');
      }
    }
    if(bgx1 >= 0){
      bgx2 = -(cusMap(800/9*16*4, 'x'));
      if(bgx1 - cusMap(800/9*16*4, 'x') != bgx2){
        bgx2 = bgx1 - cusMap(800/9*16*4, 'x');
      }
    }
    if(bgx2 >= 0){
      bgx1 = -(cusMap(800/9*16*4, 'x'));
      if(bgx2 - cusMap(800/9*16*4, 'x') != bgx1){
        bgx1 = bgx2 - cusMap(800/9*16*4, 'x');
      }
    }
  }
}

function cusMap(v, side){ //to map any number based on the window size to allow resizes
  if(side == 'x'){
    nv = map(v, 0, 800/9*16, 0, width);
  }
  else if(side == 'y'){
    nv = map(v, 0, 800, 0, height);
  }
  else if(side == 's'){
    nv = createVector();
    nv = (v/800/9*16*width, v/800*height);
  }
  return nv;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function transition(){
  fill(0, 0, 0, op);
  rect(0, 0, width, height)
  if(op < 255 && opi){
    op += 10;
  }
  if(op >= 255 && opi){
    opi = false;
    opf = true;
    ophalf = true;
  }
  if(op > 0 && opf){
    op -= 10;
  }
  if(op <= 0 && opf){
    op = 0;
    //opf = false;
    opdone = true;
  }
}

function transitionflip(){
  fill(0, 0, 0, op);
  rect(0, 0, width, height)
  if(op < 255 && !opi){
    op += 10;
  }
  if(op >= 255 && !opi){
    opi = true;
    opf = false;
    ophalf = false;
  }
  if(op > 0 && !opf){
    op -= 10;
  }
  if(op <= 0 && !opf){
    op = 0;
    //opf = false;
    opdone = false;
  }
}

function icons(money){ //icons on game screen
  imageMode(CENTER);
  noStroke();
  image(moneyicon, cusMap(50, 'x'), cusMap(50, 'y'), cusMap(90, 'x'), cusMap(90, 'y'));
  image(shop, cusMap(800/9*16 - 70, 'x'), cusMap(50, 'y'), cusMap(110, 'x'), cusMap(110, 'y'));
  image(inven, cusMap(800/9*16 - 70, 'x'), cusMap(125, 'y'), cusMap(90, 'x'), cusMap(90, 'y'));
  image(aqua, cusMap(800/9*16 - 70, 'x'), cusMap(200, 'y'), cusMap(90, 'x'), cusMap(100, 'y'));

  fill(0);
  push();
  translate(cusMap(800/9*16 - 25, 'x'), cusMap(60, 'y'));
  scale(cusMap(1, 's'));
  textAlign(CENTER);
  textFont(handwriting, 35);
  text('I', 0, 0);
  pop();
  push();
  translate(cusMap(800/9*16 - 25, 'x'), cusMap(140, 'y'));
  scale(cusMap(1, 's'));
  textAlign(CENTER);
  textFont(handwriting, 35);
  text('B', 0, 0);
  pop();
  push();
  translate(cusMap(800/9*16 - 25, 'x'), cusMap(210, 'y'));
  scale(cusMap(1, 's'));
  textAlign(CENTER);
  textFont(handwriting, 35);
  text('Q', 0, 0);
  pop();
  push();
  translate(cusMap(90, 'x'), cusMap(60, 'y'));
  scale(cusMap(1, 's'));
  textAlign(LEFT);
  textFont(handwriting, 40);
  text(money, 0, 0);
  pop();
  
  imageMode(CORNER);
}

function boat(){
  imageMode(CENTER);
  strokeWeight(4);
  stroke(0);
  push();
  translate(cusMap(410, 'x'), cusMap(110, 'y'));
  if(bf){
    btspn += 0.002;
  }
  else if(bb){
    btspn -= 0.002;
  }
  if(btspn >= PI/50 && bf){
    bb = true;
    bf = false;
  }
  else if(btspn <= -PI/50 && bb){
    bb = false;
    bf = true;
  }
  rotate(btspn*0.4);
  line(0, 0, -(cusMap(100, 'x')), cusMap(100, 'y'));
  pop();
  push();
  translate(cusMap(280, 'x'), cusMap(240, 'y'));
  rotate(-btspn);
  image(panda, 0, 0, cusMap(160, 'x'), cusMap(175, 'y'));
  pop();
  push();
  translate(cusMap(200, 'x'), cusMap(270, 'y'));
  rotate(btspn);
  image(boatimg, 0, 0, cusMap(280, 'x'), cusMap(230, 'y'));
  pop();
  imageMode(CORNER);
}

function boatStill(){
  imageMode(CENTER);
  strokeWeight(4);
  stroke(0);
  push();
  translate(cusMap(310, 'x'), cusMap(210, 'y'));
  line(0, 0, cusMap(100, 'x'), -(cusMap(100, 'y')));
  pop();
  push();
  translate(cusMap(280, 'x'), cusMap(240, 'y'));
  image(panda, 0, 0, cusMap(160, 'x'), cusMap(175, 'y'));
  pop();
  push();
  translate(cusMap(200, 'x'), cusMap(270, 'y'));
  image(boatimg, 0, 0, cusMap(280, 'x'), cusMap(230, 'y'));
  pop();
  imageMode(CORNER);
}

function beforeCastStill(){ //screen before casting the bait but not moving
  bgy1 = 400;
  bgy2 = 400;
  image(startbg, bgx1, 0, cusMap(800/9*16*4, 'x'), cusMap(800, 'y'), 0, bgy1, startbg.width, 650);
  image(startbg, bgx2, 0, cusMap(800/9*16*4, 'x'), cusMap(800, 'y'), 0, bgy2, startbg.width, 650);
  icons(money);
  fishline();
  boatStill();
  fishStill();
}

function beforeCast(){ //screen before casting the bait
  bgy1 = 400;
  bgy2 = 400;
  image(startbg, bgx1, 0, cusMap(800/9*16*4, 'x'), cusMap(800, 'y'), 0, bgy1, startbg.width, 650);
  image(startbg, bgx2, 0, cusMap(800/9*16*4, 'x'), cusMap(800, 'y'), 0, bgy2, startbg.width, 650);
  bgmove(boatspeed);
  icons(money);
  fishline();
  boat();
  fish();
}

function fishStill(){
  for(let i = 0; i < 12; i++){
    hearts[i].show();
  }
}

function fish(){
  for(let i = 0; i < 12; i++){
    hearts[i].show();
    hearts[i].move();
    hearts[i].strike();
  }
}

function fishline(){
  imageMode(CENTER);
  strokeWeight(2);
  stroke(220);
  push();
  translate(cusMap(410, 'x'), cusMap(110, 'y'));
  line(0, 0, 0, cusMap(liney, 'y'));
  pop();
  push();
  translate(cusMap(408, 'x'), cusMap(liney + 119, 'y'));
  image(hook, 0, 0, cusMap(30, 'x'), cusMap(40, 'y'));
  pop();
  imageMode(CORNER);

  if(linedown){
    liney += 2;
  }
  else if(lineup){
    liney -= 2;
  }

  if(liney <= 100){
    liney = 100;
  }
  fill(0);
  //circle(cusMap(408, 'x'), cusMap(liney + 125, 'y'), 10);
}

function hookedscreen(){ //after a fish is hooked and brought to the top
  if(fishtype == 'heart'){
    imageMode(CENTER);
    push();
    translate(cusMap(300, 'x'), cusMap(400, 'y'));
    scale(-1, 1);
    rotate(PI/2.4);
    image(heartimg, 0, 0, cusMap(1000, 'x'), cusMap(724, 'y'));
    pop();
    imageMode(CORNER);
    fill(0);
    noStroke();
    push();
    translate(cusMap(950, 'x'), cusMap(200, 'y'));
    scale(cusMap(1, 's'));
    textAlign(CENTER);
    textFont(handwriting, tsz);
    text('Heart', 0, 0);
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
    push();
    translate(cusMap(950, 'x'), cusMap(400, 'y'));
    scale(cusMap(1, 's'));
    textAlign(CENTER);
    textFont(handwriting, 80);
    text('$600', 0, 0);
    pop();
    push();
    translate(cusMap(950, 'x'), cusMap(600, 'y'));
    scale(cusMap(1, 's'));
    textAlign(CENTER);
    textFont(handwriting, 80);
    text('Sell', 0, 0);
    tw = textWidth('Sell');
    th = textAscent('Sell');
    pop();
  }
}

function mousePressed(){
  //used to make the text the button
  if(mouseX > cusMap(800/9*16/2, 'x') - tw/2 && mouseX < cusMap(800/9*16/2, 'x') + tw/2 && mouseY > cusMap(550, 'y') - th && mouseY < cusMap(550, 'y') && scrn == 'start'){
    scrn = 'beforeCast';
  }
  if(mouseX > cusMap(950, 'x') - tw/2 && mouseX < cusMap(950, 'x') + tw/2 && mouseY > cusMap(600, 'y') - th && mouseY < cusMap(600, 'y') && scrn == 'hooked'){
    if(fishtype == 'heart'){
      money += heartmoney;
      //hooked = false;
      abandonstart = true;
      reset = true;
      scrn = 'beforeCast'
    }
  }
}

function keyPressed(){
  if(key == 'a'){
    boatspeed = -2;
  }
  else if(key == 'd'){
    boatspeed = 2;
  }
  if(key == 's'){
    linedown = true;
  }
  else if(key == 'w'){
    lineup = true;
  }
}

function keyReleased(){
  if(key == 'a'){
    boatspeed = 0;
  }
  else if(key == 'd'){
    boatspeed = 0;
  }
  if(key == 's'){
    linedown = false;
  }
  else if(key == 'w'){
    lineup = false;
  }
}

function draw(){
  background(255);
  if(scrn == 'start'){
    start();
  }
  else if(scrn == 'beforeCast'){
    if(abandonstart){
      if(!opdone){
        if(!ophalf){
          hookedscreen();
        }
        else{
          beforeCast();
        }
        transition();
      }
      else{
        beforeCast();
      }
    }
    else{
      if(!opdone){
        if(!ophalf){
          start();
        }
        else{
          beforeCastStill();
        }
        transition();
      }
      else{
        beforeCast();
      }
    }
  }
  else if(scrn == 'hooked'){
    if(opdone){
      if(ophalf){
        beforeCast();
      }
      else{
        hookedscreen();
      }
      transitionflip();
    }
    else{
      hookedscreen();
    }
  }
}