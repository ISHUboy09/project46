var MAN;
var MAN_img;
var ground; 
var back_img;
var obstacle_img;
var obstacle;
var ground_img;
var standingman;
var grass_img;



function preload(){

 MAN_img = loadAnimation("S1.png","S2.png","S3.png","S4.png","S5.png","S6.png")
 back_img = loadImage("back4.jpg");
 obstacle_img = loadImage("obstacle1.png");
 ground_img = loadImage("ground 5.jpg");
 standingman = loadImage("S1.png");
 grass_img = loadImage("spareground.png");


}


function setup() {
  createCanvas(displayWidth,655);
  
  
  MAN = createSprite(150, 489, 50, 50);
  MAN.addImage("standing",standingman);
  MAN.addAnimation("MAN",MAN_img)

  ground = createSprite(400,550,800,20);
  ground.addImage("GR1",ground_img);
  ground.velocityX = -5;

  grass = createSprite(400,542,displayWidth,20);
  grass = addImage("grass",grass_img);
  



}

function draw() {
  background(back_img);  
  
  
  MAN.collide(ground);
  
  if(ground.x<100){
 ground.x = ground.width/2;   
  }

  if(keyDown("SPACE")){
   MAN.changeAnimation("MAN",MAN_img)
   MAN.velocityY = -5;

  }
  MAN.velocityY += 0.8;




  spawnObstacles();
  drawSprites();
}

function spawnObstacles(){
    
   if(frameCount %60 === 0 ){
      obstacle = createSprite(750,200,20,20);  
      obstacle.addImage("OB1",obstacle_img);
      obstacle.scale = 0.4;
      obstacle.velocityX = -6;
      obstacle.y = Math.round(random(120,220))
   }  

}



 //1} Change the background image 
 //2} Change the ground image
 //3} Add Dog animation 
 //4} complete previous project 
 //5} display width , display height(done);
