let heartmovex = 0; //need to change
let heartmovey = 0; //need to change
let d = 0;
let v;
let strikemode = false;
let angle = 0;
let movev = 0;
let mouth;
let hooked = false;

class heart{

    constructor(x, y, img, flip){
        this.x = x;
        this.y = y;
        this.img = img;
        this.flip = flip;
        this.heartmovex = heartmovex; //need to change
        this.heartmovey = heartmovey; //need to change
        this.d = d;
        this.v = v;
        this.strikemode = strikemode;
        this.angle = angle;
        this.movev = movev;
        this.mouth = mouth;
        this.hooked = hooked;
    }

    show(){
        imageMode(CENTER);
        push();
        translate(cusMap(this.x, 'x'), cusMap(this.y, 'y'))
        scale(this.flip, 1);
        rotate(this.angle);
        image(this.img, 0, 0, cusMap(200, 'x'), cusMap(145, 'y')); //need to change
        pop();
        imageMode(CORNER);
    }

    move(){
        if(!this.strikemode){ //moves need to change
            if(frameCount % 200 == 0){
                this.heartmovex = random(-1, 1);
                if(this.y <= cusMap(400, 'y')){
                    this.heartmovey = random(1, 3);
                    this.movev = createVector(this.heartmovex, this.heartmovey);
                    this.angle = findHeadingAngle(this.movev);
                }
                else if(this.y >= cusMap(800, 'y')){
                    this.heartmovey = random(-3, -1);
                    this.movev = createVector(this.heartmovex, this.heartmovey);
                    this.angle = findHeadingAngle(this.movev);
                }
                else{
                    this.heartmovey = random(-0.3, 0.3);
                    this.movev = createVector(this.heartmovex, this.heartmovey);
                    this.angle = findHeadingAngle(this.movev);
                    while(abs(this.angle) > PI/8){
                        this.heartmovex = random(-1, 1);
                        this.heartmovey = random(-0.3, 0.3);
                        this.movev = createVector(this.heartmovex, this.heartmovey);
                        this.angle = findHeadingAngle(this.movev);
                    }
                }
                if(this.heartmovex < 0){
                    this.flip = 1;
                }
                else{
                    this.flip = -1;
                }
            }
            //print(this.heartmove);
            this.x += this.heartmovex;
            this.y += this.heartmovey;
            if(this.x < -(cusMap(800/9*16, 'x'))){
                this.x += cusMap(800/9*16*3, 'x');
            }
            if(this.x > (cusMap(800/9*16*2, 'x'))){
                this.x -= cusMap(800/9*16*3, 'x');
            }
        }

        this.x -= boatspeed;
        
    }

    strike(){
        if(!hooked){
            if(this.flip == 1){
                //createVector(this.x - cusMap(50, 'x'), this.y + cusMap(12, 'x'));
                this.d = dist(cusMap(408, 'x'), cusMap(liney + 125, 'y'), this.x, this.y);
                //print(this.d);
                //circle(this.x - cusMap(50, 'x'), this.y + cusMap(12, 'x'), 10);
            }
            else if(this.flip == -1){
                //createVector(this.x + cusMap(50, 'x'), this.y + cusMap(12, 'x'));
                this.d = dist(cusMap(408, 'x'), cusMap(liney + 125, 'y'), this.x, this.y);
            }
            //print(this.d);
            if(this.d <= 200 && this.d >= 20){
                this.v = findVector(cusMap(408, 'x'), cusMap(liney + 125, 'y'), this.x, this.y);
                //print(this.v);
                this.strikemode = true;
                this.x += this.v.x * 1.3;
                this.y += this.v.y * 1.3;
                this.angle = findHeadingAngle(this.v);
                if(this.v.x > 0 && this.flip > 0){
                    this.flip = -1;
                }
                else if(this.v.x < 0 && this.flip < 0){
                    this.flip = 1;
                }
            }
            else if(this.d < 20){
                this.y = cusMap(liney + 140, 'y');
                this.x = cusMap(408, 'x');
                //print(this.d);
                this.angle = PI/2;
                this.hooked = true;
                hooked = true;
            }
            else{
                this.strikemode = false;
                this.angle = findHeadingAngle(this.movev);
                if(this.heartmovex < 0){ //need to change
                    this.flip = 1;
                }
                else{
                    this.flip = -1;
                }
            }
        }
        else if(this.hooked && !reset){
            this.y = cusMap(liney + 140, 'y');
            this.x = cusMap(408, 'x');
            //print(this.d);
            this.angle = PI/2;
            fishtype = 'heart'; //need to change
            if(liney <= 100){
                scrn = 'hooked'
            }
        }
        else if(this.hooked && reset){
            this.y = random(cusMap(500, 'y'), cusMap(750, 'y'));
            this.x = random(-(cusMap(800/9*16, 'x')), 0);
            this.hooked = false;
            reset = false;
            hooked = false;
        }
        else{
            this.strikemode = false;
            this.angle = findHeadingAngle(this.movev);
            if(this.heartmovex < 0){ //need to change
                this.flip = 1;
            }
            else{
                this.flip = -1;
            }
        }
        
    }

}

function findVector(x1, y1, x2, y2){
    vec = createVector(x1, y1);
    vec.sub(x2, y2);
    vec.div(sqrt(sq(vec.x)+sq(vec.y)));
    return vec;
}

function findHeadingAngle(vec){
    if(vec.x <= 0){
        ang = atan(vec.y/vec.x);
        return ang;
    }
    else{
        ang = atan(vec.y/vec.x);
        return -ang;
    }
    
}