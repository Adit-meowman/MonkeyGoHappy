
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var survivalTime = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400);
  
  
   
    
 monkey = createSprite(70,355,30,50);
 monkey.addAnimation("monkeyAnimation",monkey_running); 
 monkey.scale = 0.09;
  
  ground = createSprite(200,390,800,20);
  ground.x = ground.width/2;
 
obstaclesGroup = createGroup();
 FoodGroup = createGroup(); 
}
function draw() {
  background("white");
  ground.velocityX = -4;  
   if (ground.x < 0){
    ground.x = ground.width/2;
   }
  monkey.collide(ground);
 if (keyDown("space") && monkey.y >= 330) {
      monkey.velocityY = -15;
     
    }

    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8

  spawnBanana();
  spawnObstacles();
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Suruvival Time: "+survivalTime,100,50);
       
  
  drawSprites();
}
function spawnBanana(){
if (frameCount % 80 === 0) {
     banana = createSprite(420,100,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
  
  FoodGroup.add(banana);
  
  
  
  
  
  
}
}
function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(400,363,10,40);
   obstacle.velocityX = -4;
 obstacle.scale = 0.1;
    obstacle.lifetime = 300;
   obstacle.addImage("obstacleImage",obstaceImage);
   
   //adding obstacles to the group
   obstaclesGroup.add(obstacle);
 }
}