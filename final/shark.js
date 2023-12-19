let shamovex = 0; //need to change
let shamovey = 0; //need to change

class shark{

    constructor(x, y, img, flip){
        this.x = x;
        this.y = y;
        this.img = img;
        this.flip = flip;
        this.shamovex = shamovex; //need to change
        this.shamovey = shamovey; //need to change
        this.d = d;
        this.v = v;
        this.strikemode = strikemode;
        this.angle = angle;
        this.movev = movev;
        this.hooked = hooked;
    }

    show(){
        imageMode(CENTER);
        push();
        translate(this.x, this.y - boaty);
        //translate(cusMap(this.x, 'x'), cusMap(this.y, 'y')); //commented out to solve window resize hooked fish displacement issue
        scale(this.flip, 1);
        rotate(this.angle);
        image(this.img, 0, 0, cusMap(550, 'x'), cusMap(398.75, 'y')); //need to change
        pop();
        imageMode(CORNER);
    }

    move(){
        if(!this.strikemode){ //moves need to change
            if(frameCount % 200 == 0){
                this.shamovex = random(-2, 2);
                if(this.y <= cusMap(1400, 'y')){
                    this.shamovey = random(1, 3);
                    this.movev = createVector(this.shamovex, this.shamovey);
                    this.angle = findHeadingAngle(this.movev);
                }
                else if(this.y >= cusMap(1750, 'y')){
                    this.shamovey = random(-3, -1);
                    this.movev = createVector(this.shamovex, this.shamovey);
                    this.angle = findHeadingAngle(this.movev);
                }
                else{
                    this.shamovey = random(-0.6, 0.6);
                    this.movev = createVector(this.shamovex, this.shamovey);
                    this.angle = findHeadingAngle(this.movev);
                    while(abs(this.angle) > PI/8){
                        this.shamovex = random(-2, 2);
                        this.shamovey = random(-0.6, 0.6);
                        this.movev = createVector(this.shamovex, this.shamovey);
                        this.angle = findHeadingAngle(this.movev);
                    }
                }
                if(this.shamovex < 0){
                    this.flip = 1;
                }
                else{
                    this.flip = -1;
                }
            }

            this.x += this.shamovex;
            this.y += this.shamovey;
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
                this.d = dist(cusMap(408, 'x'), cusMap(liney + 125, 'y'), this.x, this.y - boaty);
                //print(this.d);
                //circle(this.x - cusMap(50, 'x'), this.y + cusMap(12, 'x'), 10);
            }
            else if(this.flip == -1){
                //createVector(this.x + cusMap(50, 'x'), this.y + cusMap(12, 'x'));
                this.d = dist(cusMap(408, 'x'), cusMap(liney + 125, 'y'), this.x, this.y - boaty);
            }
            //print(this.d);
            if(this.d <= 200 && this.d >= 20){ //striking
                this.v = findVector(cusMap(408, 'x'), cusMap(liney + 125, 'y'), this.x, this.y - boaty);
                //print(this.v);
                this.strikemode = true;
                this.x += this.v.x * 2;
                this.y += this.v.y * 2;
                this.angle = findHeadingAngle(this.v);
                if(this.v.x > 0 && this.flip > 0){
                    this.flip = -1;
                }
                else if(this.v.x < 0 && this.flip < 0){
                    this.flip = 1;
                }
            }
            else if(this.d < 20){
                this.y = cusMap(liney + 140, 'y') + boaty;
                this.x = cusMap(408, 'x');
                //print(this.d);
                this.angle = PI/2;
                this.hooked = true;
                hooked = true;
            }
            else{
                this.strikemode = false;
                this.angle = findHeadingAngle(this.movev);
                if(this.shamovex < 0){ //need to change
                    this.flip = 1;
                }
                else{
                    this.flip = -1;
                }
            }
        }
        else if(this.hooked && !reset){
            this.y = cusMap(liney + 140, 'y') + boaty;
            this.x = cusMap(408, 'x');
            //print(this.d);
            this.angle = PI/2;
            fishtype = 'shark'; //need to change
            if(liney <= 100){
                scrn = 'hooked'
            }
        }
        else if(this.hooked && reset){
            this.y = random(cusMap(800, 'y'), cusMap(1050, 'y'));
            this.x = random(-(cusMap(800/9*16, 'x')), 0);
            this.hooked = false;
            reset = false;
            hooked = false;
        }
        else{
            this.strikemode = false;
            this.angle = findHeadingAngle(this.movev);
            if(this.shamovex < 0){ //need to change
                this.flip = 1;
            }
            else{
                this.flip = -1;
            }
        }
        
    }

}