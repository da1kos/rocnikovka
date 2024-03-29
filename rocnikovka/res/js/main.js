const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const progressText = document.getElementById("progress");
const video = document.createElement('video');


video.src = "res/img/MiskoL.mp4";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let jump = false;
let speed = 4;
let platformNum = 27;
let prehrani = 1;


class Finish {//cil
    constructor() {
        this.x = speed * 150 + 8750;
        this.y = 0;
        this.width = 60;
        this.height = canvas.height;
    };
    draw() {//vykresleni
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

let playerLook = new Image;

playerLook.src = "res/img/pixil-frame-0_1.png"

class Ball {//ctverec
    constructor() {
        this.x = 0;
        this.y = canvas.height - 70 - 60;
        this.velocity = 2;
        this.width = 60;
        this.height = 60;
        this.look = playerLook;
    };
    draw() {//vykresleni
        ctx.drawImage(this.look,this.x, this.y, this.width, this.height)
    }

    update() {//aktualizuje
        this.draw();
        this.y += this.velocity;
        player.velocity += 1;
        jump = false;
        platforms.forEach((platform, i) => {//kolize
            if ((player.x + player.width >= platform.x && player.x <= platform.x + platform.width)) {
                if (player.y + player.height + player.velocity >= platform.y) {
                    jump = true;
                    player.velocity = 0;
                }

                if (player.y + player.height - 5 > platform.y && !(player.y > platform.y + platform.height)) {
                    dead = 1;
                   
                    
                }


            }


            if (!(player.y + player.height + player.velocity <= canvas.height - floor.height)) {
                player.velocity = 0;
                jump = true;
            }
            console.log(i);
            video.loop = true;
            video.autoplay = true;
            if (dead) {
                
               
                if (prehrani) {
                    prehrani--;
                    
                   
                    
                    video.controls = false;                   
                    video.muted = false;
                    video.width = 210; // in px
                    const box = document.getElementById('box');
                    box.appendChild(video);

                    box.appendChild(video);
                }

                if (player.width > 6) {
                    player.width--;
                    player.x++;
                }
                else {
                    player.y += 0.05;
                }
            }
            

            else if (player.x >= 100) {
                platform.x -= speed;  //pohyb v pravo
                finish.x -= speed / (platformNum);


            }
            else {

                player.x += speed

            }

            
            if (player.x + player.width >= finish.x) {

                window.location = "./end.html";
            }
            


        });
    }
}


class Platform {//co asi
    constructor(x, y, w, h) {
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
    }
    draw() {

        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}





let dead = 0;

const finish = new Finish();//cil
const player = new Ball();//ctverec za ktereho se hraje
const floor = new Platform(0, canvas.height - 70, canvas.width, 70);
const platforms = [new Platform(speed * 150, canvas.height - 120, 300, 100), //asi tak tisíc platforem
new Platform(speed * 150 + 200, canvas.height - 160, 300, 100),
new Platform(speed * 150 + 600, canvas.height - 160, 50, 160 - canvas.height * (-1)),
new Platform(speed * 150 + 750, canvas.height - 200, 50, 200 - canvas.height * (-1)),
new Platform(speed * 150 + 900, canvas.height - 240, 50, 240 - canvas.height * (-1)),
new Platform(speed * 150 + 1050, canvas.height - 280, 50, 280 - canvas.height * (-1)),
new Platform(speed * 150 + 1200, canvas.height - 280, 500, 280 - canvas.height * (-1)),
new Platform(speed * 150 + 1750, canvas.height - 240, 50, 240 - canvas.height * (-1)),
new Platform(speed * 150 + 1900, canvas.height - 200, 50, 200 - canvas.height * (-1)),
new Platform(speed * 150 + 2000, canvas.height - 160, 50, 160 - canvas.height * (-1)),
new Platform(speed * 150 + 2300, canvas.height - 120, 50, 120 - canvas.height * (-1)),
new Platform(speed * 150 + 2600, canvas.height - 120, 500, 120 - canvas.height * (-1)),
new Platform(speed * 150 + 3300, canvas.height - 145, 1500, 10),
new Platform(speed * 150 + 5050, canvas.height - 180, 1300, 50),
new Platform(speed * 150 + 6500, canvas.height - 180, 1000, 50),
new Platform(speed * 150 + 5050, canvas.height - 330, 50, 50),
new Platform(speed * 150 + 5250, canvas.height - 230, 50, 50),
new Platform(speed * 150 + 5450, canvas.height - 330, 50, 50),
new Platform(speed * 150 + 5600, canvas.height - 230, 50, 50),
new Platform(speed * 150 + 5850, canvas.height - 330, 50, 50),
new Platform(speed * 150 + 6250, canvas.height - 300, 50, 50),
new Platform(speed * 150 + 7640, canvas.height - 180, 50, 50),
new Platform(speed * 150 + 7830, canvas.height - 180, 50, 50),
new Platform(speed * 150 + 8020, canvas.height - 180, 50, 50),



];



function animate() { //vykresluje ctverec
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    platforms.forEach((platforms) => {
        ctx.fillStyle = "red";
        platforms.draw();
    });
    ctx.fillStyle = "black";
    floor.draw();
    player.update();
    finish.draw();
}

animate();


function bar() {
    let barWidth = 0;
    const bar = setInterval(frame, 10);

    function frame() {
        if (barWidth >= 105 || dead) {
            clearInterval(bar);
        }
        else {
            barWidth += 1 / (platformNum + 2); // 2/pocet platforem
            if (barWidth < 6) {

            }
            else {

                progressText.style.width = barWidth - 6 + "%";
                progressText.innerHTML = Math.round(barWidth) - 5 + "%";
            }
        }
    }

}

bar();
addEventListener('keydown', ({ keyCode }) => {// skok
    if (keyCode == 32 && jump) { // aby se jen skocilo (nefunguje skok ve vzduchu jsem god
        if (dead) {
            window.location.reload();
        }
        else {
            player.velocity -= 15;
            jump = false;
        }

    }


})



