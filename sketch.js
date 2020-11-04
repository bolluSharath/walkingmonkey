
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0 

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600,600);
  
  monkey = createSprite(80,330,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(100,330,2000,20);
  ground.velocityX=-4;
  ground.x = ground.width/2
  console.log(ground.x);
  
  obstacleGroup = new Group();
  foodGroup = new Group();
   
  
    
  
}


function draw() {
  background(180);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score"+score,500,50)
  
  var survivalTime=0;
  stroke("black");  
  textSize(20)
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime"+survivalTime,100,50)
  
  
  
  
  if(keyDown("space")&& monkey.y >= 100){
    monkey.velocityY=-10;
  }
  
  monkey.velocityY = monkey.velocityY+0.8;
  
  if(ground.x <0){
    ground.x = ground.width/2
  }
  
  
  
  
  monkey.collide(ground);
  
  
  Food();
  Obstacles();
  
  drawSprites();
}

function Food(){
  if(frameCount % 80 === 0){
    banana = createSprite(600,400,20,20);
    banana.addAnimation("moving",bananaImage)
    banana.y=Math.round(random(120,200));
    banana.velocityX=-2;
    banana.scale=0.1;
    banana.lifetime=300;
 }
}

function Obstacles(){
  if(frameCount % 300 === 0){
    stone = createSprite(600,310,20,20);
    stone.addAnimation("stones",obstacleImage);
    stone.velocityX=-2;
    stone.scale=0.1;
    stone.lifetime=300;
  }
  

}
