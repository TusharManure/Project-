var canvas;
var music;
var ball;
var block1,block2,block3,block4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
   
    block1=createSprite(100,550,180,20);
    block2=createSprite(300,550,180,20);
    block3=createSprite(500,550,180,20);
    block4=createSprite(700,550,180,20);
    block1.shapeColor="orange";
    block2.shapeColor="yellow";
    block3.shapeColor="blue";
    block4.shapeColor="red";

music.play();
ball=createSprite(random(20,750),100,30,30);
ball.shapeColor="white";
ball.velocityY=2;

}

function draw() {
    background('black');
   

if (ball.isTouching(block1)){
    music.stop();
    ball.shapeColor="orange";
    ball.velocityY=0;
}


if (ball.isTouching(block2)){
    music.stop();
    ball.shapeColor="yellow";
    ball.velocityY=0;
}


if (ball.isTouching(block3)){
    ball.shapeColor="blue";
    ball.velocityY=0;
    music.stop();
}


if (ball.isTouching(block4)){
    ball.shapeColor="red";
   ball.velocityY=0;
   music.stop();
}



drawSprites();
    
}
