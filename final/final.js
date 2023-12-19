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
let greentimg;
let herrimg;
let haliimg;
let kirimg;
let peaimg;
let sharkimg;
let hearts;
let greentotems;
let herrings;
let halibuts;
let kirbys;
let peacocks;
let sharks;
let heartx, hearty;
let greenx, greeny;
let herrx, herry;
let halix, haliy;
let kirx, kiry;
let peax, peay;
let sharkx, sharky;
let smallx1, smallx2, smally1, smally2;
let midy1, midy2;
let lary1, lary2;
let hugy1, hugy2;
let heartflip;
let greenflip;
let herrflip;
let haliflip;
let kirflip;
let peaflip;
let sharkflip;
let liney;
let linedown, lineup;
let fishtype;
let heartmoney;
let abandonstart;
let reset;
let boaty;
let greenmoney;
let herrmoney;
let halimoney;
let kirmoney;
let peamoney;
let sharkmoney;
let fromshop;
let midboatimg, bigboatimg;
let boattype;
let midpur, bigpur;
let noten;

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
  greentimg = loadImage('greentotem.png');
  herrimg = loadImage('herring.png');
  haliimg = loadImage('halibut.png');
  kirimg = loadImage('kirby.png');
  peaimg = loadImage('peacock.png');
  sharkimg = loadImage('shark.png');
  midboatimg = loadImage('midboat.png');
  bigboatimg = loadImage('bigboat.png');
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

  stbgx1 = 0; //start background
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
  boaty = 0;

  smallx1 = -(cusMap(800/9*16, 'x')); //fish
  smallx2 = 0;

  heartx = []; //hearts
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

  smallx1 = -(cusMap(800/9*16, 'x'));
  smallx2 = 0;

  greenx = []; //green totems
  for(let i = 0; i < 9; i++){
    if(i % 3 == 0 && i != 0){
      smallx1 += cusMap(800/9*16, 'x');
      smallx2 += cusMap(800/9*16, 'x');
    }
    greenx[i] = random(smallx1, smallx2);
  }

  midy1 = cusMap(800, 'y');
  midy2 = cusMap(1050, 'y');

  greeny = [];
  for(let i = 0; i < 9; i++){
    greeny[i] = random(midy1, midy2);
  }

  greenflip = [];
  for(let i = 0; i < 9; i++){
    greenflip[i] = random(0, 1);
    if(greenflip[i] >= 0.5){
      greenflip[i] = 1;
    }
    else{
      greenflip[i] = -1;
    }
  }

  greentotems = [];
  for(let i = 0; i < 9; i++){
    greentotems[i] = new greentotem(greenx[i], greeny[i], greentimg, greenflip[i]);
  }

  smallx1 = -(cusMap(800/9*16, 'x'));
  smallx2 = 0;

  herrx = []; //herring
  for(let i = 0; i < 6; i++){
    if(i % 2 == 0 && i != 0){
      smallx1 += cusMap(800/9*16, 'x');
      smallx2 += cusMap(800/9*16, 'x');
    }
    herrx[i] = random(smallx1, smallx2);
  }

  midy1 = cusMap(800, 'y');
  midy2 = cusMap(1050, 'y');

  herry = [];
  for(let i = 0; i < 6; i++){
    herry[i] = random(midy1, midy2);
  }

  herrflip = [];
  for(let i = 0; i < 6; i++){
    herrflip[i] = random(0, 1);
    if(herrflip[i] >= 0.5){
      herrflip[i] = 1;
    }
    else{
      herrflip[i] = -1;
    }
  }

  herrings = [];
  for(let i = 0; i < 6; i++){
    herrings[i] = new herring(herrx[i], herry[i], herrimg, herrflip[i]);
  }

  smallx1 = -(cusMap(800/9*16, 'x'));
  smallx2 = 0;

  peax = []; //peacock
  for(let i = 0; i < 6; i++){
    if(i % 2 == 0 && i != 0){
      smallx1 += cusMap(800/9*16, 'x');
      smallx2 += cusMap(800/9*16, 'x');
    }
    peax[i] = random(smallx1, smallx2);
  }

  midy1 = cusMap(800, 'y');
  midy2 = cusMap(1050, 'y');

  peay = [];
  for(let i = 0; i < 6; i++){
    peay[i] = random(midy1, midy2);
  }

  peaflip = [];
  for(let i = 0; i < 6; i++){
    peaflip[i] = random(0, 1);
    if(peaflip[i] >= 0.5){
      peaflip[i] = 1;
    }
    else{
      peaflip[i] = -1;
    }
  }

  peacocks = [];
  for(let i = 0; i < 6; i++){
    peacocks[i] = new peacock(peax[i], peay[i], peaimg, peaflip[i]);
  }

  smallx1 = -(cusMap(800/9*16, 'x'));
  smallx2 = 0;

  halix = []; //halibut
  for(let i = 0; i < 6; i++){
    if(i % 2 == 0 && i != 0){
      smallx1 += cusMap(800/9*16, 'x');
      smallx2 += cusMap(800/9*16, 'x');
    }
    halix[i] = random(smallx1, smallx2);
  }

  lary1 = cusMap(1150, 'y');
  lary2 = cusMap(1400, 'y');

  haliy = [];
  for(let i = 0; i < 6; i++){
    haliy[i] = random(lary1, lary2);
  }

  haliflip = [];
  for(let i = 0; i < 6; i++){
    haliflip[i] = random(0, 1);
    if(haliflip[i] >= 0.5){
      haliflip[i] = 1;
    }
    else{
      haliflip[i] = -1;
    }
  }

  halibuts = [];
  for(let i = 0; i < 6; i++){
    halibuts[i] = new halibut(halix[i], haliy[i], haliimg, haliflip[i]);
  }

  smallx1 = -(cusMap(800/9*16, 'x'));
  smallx2 = 0;

  kirx = []; //kirby
  for(let i = 0; i < 3; i++){
    if(i % 1 == 0 && i != 0){
      smallx1 += cusMap(800/9*16, 'x');
      smallx2 += cusMap(800/9*16, 'x');
    }
    kirx[i] = random(smallx1, smallx2);
  }

  lary1 = cusMap(1150, 'y');
  lary2 = cusMap(1400, 'y');

  kiry = [];
  for(let i = 0; i < 3; i++){
    kiry[i] = random(lary1, lary2);
  }

  kirflip = [];
  for(let i = 0; i < 3; i++){
    kirflip[i] = random(0, 1);
    if(kirflip[i] >= 0.5){
      kirflip[i] = 1;
    }
    else{
      kirflip[i] = -1;
    }
  }

  kirbys = [];
  for(let i = 0; i < 3; i++){
    kirbys[i] = new kirby(kirx[i], kiry[i], kirimg, kirflip[i]);
  }

  smallx1 = -(cusMap(800/9*16, 'x'));
  smallx2 = 0;

  sharkx = random(smallx1, smallx2); //shark

  hugy1 = cusMap(1450, 'y');
  hugy2 = cusMap(1700, 'y');

  sharky = random(hugy1, hugy2);

  sharkflip = random(0, 1);
  if(sharkflip >= 0.5){
    sharkflip = 1;
  }
  else{
    sharkflip = -1;
  }

  sharks = new shark(sharkx, sharky, sharkimg, sharkflip);

  liney = 100; //line
  linemove = false;

  abandonstart = false;
  reset = false;

  fishtype = '';

  heartmoney = 600;
  greenmoney = 1200;
  herrmoney = 2000;
  halimoney = 3000;
  kirmoney = 5000;
  peamoney = 1500;
  sharkmoney = 10000;

  fromshop = false;

  boattype = 'small';
  midpur = false;
  bigpur = false;
  noten = false;
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
  //image(inven, cusMap(800/9*16 - 70, 'x'), cusMap(125, 'y'), cusMap(90, 'x'), cusMap(90, 'y'));
  //image(aqua, cusMap(800/9*16 - 70, 'x'), cusMap(200, 'y'), cusMap(90, 'x'), cusMap(100, 'y'));

  fill(0);
  push();
  translate(cusMap(800/9*16 - 25, 'x'), cusMap(60, 'y'));
  scale(cusMap(1, 's'));
  textAlign(CENTER);
  textFont(handwriting, 35);
  text('I', 0, 0);
  pop();
  /*
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
  */
  push();
  translate(cusMap(90, 'x'), cusMap(60, 'y'));
  scale(cusMap(1, 's'));
  textAlign(LEFT);
  textFont(handwriting, 40);
  text(money, 0, 0);
  pop();
  
  imageMode(CORNER);
}

function boat(boattype){
  imageMode(CENTER);
  strokeWeight(4);
  stroke(0);
  boaty = (bgy1 + bgy2) / 2 - 400;
  push();
  translate(cusMap(410, 'x'), cusMap(110 - boaty, 'y'));
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
  translate(cusMap(280, 'x'), cusMap(240 - boaty, 'y'));
  rotate(-btspn);
  image(panda, 0, 0, cusMap(160, 'x'), cusMap(175, 'y'));
  pop();
  push();
  if(boattype == 'small'){
    translate(cusMap(200, 'x'), cusMap(270 - boaty, 'y'));
    rotate(btspn);
    image(boatimg, 0, 0, cusMap(280, 'x'), cusMap(230, 'y'));
  }
  else if(boattype == 'mid'){
    translate(cusMap(180, 'x'), cusMap(260 - boaty, 'y'));
    rotate(btspn);
    image(midboatimg, 0, 0, cusMap(400, 'x'), cusMap(300, 'y'));
  }
  else if(boattype == 'big'){
    translate(cusMap(140, 'x'), cusMap(240 - boaty, 'y'));
    rotate(btspn);
    image(bigboatimg, 0, 0, cusMap(420, 'x'), cusMap(345, 'y'));
  }
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
  //bgy1 = 400;
  //bgy2 = 400;
  image(startbg, bgx1, 0, cusMap(800/9*16*4, 'x'), cusMap(800, 'y'), 0, bgy1, startbg.width, 650);
  image(startbg, bgx2, 0, cusMap(800/9*16*4, 'x'), cusMap(800, 'y'), 0, bgy2, startbg.width, 650);
  bgmove(boatspeed);
  icons(money);
  fishline();
  boat(boattype);
  fish();
}

function fishStill(){
  for(let i = 0; i < 12; i++){
    hearts[i].show();
  }
  for(let i = 0; i < 9; i++){
    greentotems[i].show();
  }
  for(let i = 0; i < 6; i++){
    herrings[i].show();
    halibuts[i].show();
    peacocks[i].show();
  }
  for(let i = 0; i < 3; i++){
    kirbys[i].show();
  }
  sharks.show();
}

function fish(){
  for(let i = 0; i < 12; i++){
    hearts[i].show();
    hearts[i].move();
    hearts[i].strike();
  }
  for(let i = 0; i < 9; i++){
    greentotems[i].show();
    greentotems[i].move();
    greentotems[i].strike();
  }
  for(let i = 0; i < 6; i++){
    herrings[i].show();
    herrings[i].move();
    herrings[i].strike();
    halibuts[i].show();
    halibuts[i].move();
    halibuts[i].strike();
    peacocks[i].show();
    peacocks[i].move();
    peacocks[i].strike();
  }
  for(let i = 0; i < 3; i++){
    kirbys[i].show();
    kirbys[i].move();
    kirbys[i].strike();
  }
  sharks.show();
  sharks.move();
  sharks.strike();
}

function fishline(){
  imageMode(CENTER);
  strokeWeight(2);
  stroke(220);
  push();
  translate(cusMap(410, 'x'), cusMap(110 - boaty, 'y'));
  line(0, 0, 0, cusMap(liney + boaty, 'y'));
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

  if(liney >= 500 && linedown){
    liney = 500;
    bgy1 += 2;
    bgy2 += 2;
    if(bgy1 >= 1500 && bgy2 >= 1500){
      bgy1 = 1500;
      bgy2 = 1500;
    }
  }

  else if(bgy1 > 400 && bgy2 > 400 && lineup){
    liney = 500;
    bgy1 -= 2;
    bgy2 -= 2;
    if(bgy1 <= 400 & bgy2 <= 400){
      bgy1 = 400;
      bgy2 = 400;
    }
  }
  fill(0);
  //circle(cusMap(408, 'x'), cusMap(liney + 125, 'y'), 10);
}

function hookeddisplay(img, x, y, name, worth){
  imageMode(CENTER);
  push();
  translate(cusMap(300, 'x'), cusMap(400, 'y'));
  scale(-1, 1);
  rotate(PI/2.4);
  image(img, 0, 0, cusMap(x, 'x'), cusMap(y, 'y'));
  pop();
  imageMode(CORNER);
  fill(0);
  noStroke();
  push();
  translate(cusMap(950, 'x'), cusMap(200, 'y'));
  scale(cusMap(1, 's'));
  textAlign(CENTER);
  textFont(handwriting, tsz);
  text(name, 0, 0);
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
  text(worth, 0, 0);
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

function hookedscreen(){ //after a fish is hooked and brought to the top
  if(fishtype == 'heart'){
    hookeddisplay(heartimg, 1000, 724, 'Heart', '$600')
  }
  else if(fishtype == 'greentotem'){
    hookeddisplay(greentimg, 1000, 724, 'Green Totem', '$1200')
  }
  else if(fishtype == 'herring'){
    hookeddisplay(herrimg, 1000, 724, 'Herring', '$2000')
  }
  else if(fishtype == 'halibut'){
    hookeddisplay(haliimg, 1000, 724, 'Halibut', '$3000')
  }
  else if(fishtype == 'kirby'){
    hookeddisplay(kirimg, 1000, 724, 'Kirby', '$5000')
  }
  else if(fishtype == 'peacock'){
    hookeddisplay(peaimg, 1000, 724, 'Peacock', '$1500')
  }
  else if(fishtype == 'shark'){
    hookeddisplay(sharkimg, 1000, 724, 'Shark', '$10000')
  }
}

function itemshop(){
  background(255);
  fill(0)
  noStroke();
  push();
  translate(cusMap(800/9*16/2, 'x'), cusMap(80, 'y'));
  textAlign(CENTER);
  textFont(handwriting, 80);
  text('Shop', 0, 0);
  pop();
  imageMode(CENTER);
  image(moneyicon, cusMap(50, 'x'), cusMap(50, 'y'), cusMap(90, 'x'), cusMap(90, 'y'));
  push();
  translate(cusMap(90, 'x'), cusMap(60, 'y'));
  scale(cusMap(1, 's'));
  textAlign(LEFT);
  textFont(handwriting, 40);
  text(money, 0, 0);
  pop();
  push();
  translate(cusMap(0, 'x'), cusMap(105, 'y'));
  stroke(0);
  strokeWeight(8);
  line(0, 0, width, 0);
  pop();
  push();
  translate(cusMap(0, 'x'), cusMap(336.67, 'y'));
  stroke(0);
  strokeWeight(8);
  line(0, 0, width, 0);
  pop();
  push();
  translate(cusMap(0, 'x'), cusMap(568.34, 'y'));
  stroke(0);
  strokeWeight(8);
  line(0, 0, width, 0);
  pop();
  push();
  translate(cusMap(200, 'x'), cusMap(230, 'y'));
  image(midboatimg, 0, 0, cusMap(420, 'x'), cusMap(345, 'y'));
  pop();
  push();
  translate(cusMap(200, 'x'), cusMap(450, 'y'));
  image(bigboatimg, 0, 0, cusMap(420, 'x'), cusMap(345, 'y'));
  pop();
  if(!midpur){
    push();
    translate(cusMap(800/9*16/2, 'x'), cusMap(180, 'y'));
    textAlign(CENTER);
    textFont(handwriting, 50);
    text('Speedboat', 0, 0);
    pop();
    push();
    translate(cusMap(800/9*16/2, 'x'), cusMap(230, 'y'));
    textAlign(CENTER);
    textFont(handwriting, 50);
    text('Speed: 50mph', 0, 0);
    pop();
    push();
    translate(cusMap(800/9*16/2, 'x'), cusMap(280, 'y'));
    textAlign(CENTER);
    textFont(handwriting, 50);
    text('$10000', 0, 0);
    pop();
  }
  else{
    push();
    translate(cusMap(800/9*16/2, 'x'), cusMap(230, 'y'));
    textAlign(CENTER);
    textFont(handwriting, 50);
    text('Purchased!', 0, 0);
    pop();
  }
  if(!bigpur){
    push();
    translate(cusMap(800/9*16/2, 'x'), cusMap(411.67, 'y'));
    textAlign(CENTER);
    textFont(handwriting, 50);
    text('Yacht', 0, 0);
    pop();
    push();
    translate(cusMap(800/9*16/2, 'x'), cusMap(461.67, 'y'));
    textAlign(CENTER);
    textFont(handwriting, 50);
    text('Speed: 100mph', 0, 0);
    pop();
    push();
    translate(cusMap(800/9*16/2, 'x'), cusMap(511.67, 'y'));
    textAlign(CENTER);
    textFont(handwriting, 50);
    text('$50000', 0, 0);
    pop();
  }
  else{
    push();
    translate(cusMap(800/9*16/2, 'x'), cusMap(461.67, 'y'));
    textAlign(CENTER);
    textFont(handwriting, 50);
    text('Purchased!', 0, 0);
    pop();
  }
  push();
  translate(cusMap(800/9*16/2, 'x'), cusMap(750, 'y'));
  textAlign(CENTER);
  textFont(handwriting, 50);
  text('More Coming Soon....', 0, 0);
  pop();
  

  imageMode(CORNER);
  noStroke();
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
    else if(fishtype == 'greentotem'){
      money += greenmoney;
      //hooked = false;
      abandonstart = true;
      reset = true;
      scrn = 'beforeCast'
    }
    else if(fishtype == 'herring'){
      money += herrmoney;
      //hooked = false;
      abandonstart = true;
      reset = true;
      scrn = 'beforeCast'
    }
    else if(fishtype == 'halibut'){
      money += halimoney;
      //hooked = false;
      abandonstart = true;
      reset = true;
      scrn = 'beforeCast'
    }
    else if(fishtype == 'kirby'){
      money += kirmoney;
      //hooked = false;
      abandonstart = true;
      reset = true;
      scrn = 'beforeCast'
    }
    else if(fishtype == 'peacock'){
      money += peamoney;
      //hooked = false;
      abandonstart = true;
      reset = true;
      scrn = 'beforeCast'
    }
    else if(fishtype == 'shark'){
      money += sharkmoney;
      //hooked = false;
      abandonstart = true;
      reset = true;
      scrn = 'beforeCast'
    }
  }
  if(mouseY >= cusMap(105, 'y') && mouseY < cusMap(336.67, 'y') && scrn == 'shop' && !midpur){
    if(money >= 10000){
      money = money - 10000;
      midpur = true;
      boattype = 'mid';
    }
  }
  if(mouseY >= cusMap(336.67, 'y') && mouseY < cusMap(568.34, 'y') && scrn == 'shop' && !bigpur){
    if(money >= 50000){
      money = money - 50000;
      bigpur = true;
      boattype = 'big'
    }
  }
}

function keyPressed(){
  if(key == 'a'){
    if(boattype == 'small'){
      boatspeed = -2;
    }
    else if(boattype == 'mid'){
      boatspeed = -4;
    }
    else if(boattype == 'big'){
      boatspeed = -8;
    }
  }
  else if(key == 'd'){
    if(boattype == 'small'){
      boatspeed = 2;
    }
    else if(boattype == 'mid'){
      boatspeed = 4;
    }
    else if(boattype == 'big'){
      boatspeed = 8;
    }
  }
  if(key == 's'){
    linedown = true;
  }
  else if(key == 'w'){
    lineup = true;
  }
  if(key == 'i' && scrn == 'beforeCast'){
    scrn = 'shop'
    abandonstart = true;
    fromshop = false;
  }
  else if(key == 'i' && scrn == 'shop'){
    fromshop = true;
    scrn = 'beforeCast'
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
      if(fromshop){
        if(!opdone){
          if(!ophalf){
            itemshop();
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
    fromshop = false;
  }
  else if(scrn == 'shop'){
    if(opdone){
      if(ophalf){
        beforeCast();
      }
      else{
        itemshop()
      }
      transitionflip();
    }
    else{
      itemshop();
    }
  }
}