const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const width = canvas.width = 800;
const height = canvas.height = 600;

const GameBg = new Image();
GameBg.src = "./res/img/game.jpg";

let speed = 7;
let x = 0;

function draw(){
    ctx.clearRect(0,0, width, height);
    ctx.drawImage(GameBg,x , 0);
    if (x > -1*width){
        x-= speed;
    }   
    requestAnimationFrame(draw);
};
draw();

