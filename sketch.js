var bow, bowMove, greenB, redB, blueB, pinkB, background;
var GB, RB, BB, PB, arrow, arrowM, backgroundImage,score=0;
var redG, blueG, greenG, pinkG, arrowG;

function preload(){
   backgroundImage = loadImage("background0.png");
   bowMove=loadAnimation("bow0.png");
  GB=loadAnimation("green_balloon0.png");
   RB=loadAnimation("red_balloon0.png");
  PB=loadAnimation("pink_balloon0.png");
  BB=loadAnimation("blue_balloon0.png")
  arrowM=loadImage("arrow0.png");
}

function setup() {
  createCanvas(600, 600);
  
   background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5;
  
  bow=createSprite(450,250,10,10);
 bow.addAnimation("ash",bowMove);
  bow.scale=1.5;
  
  pinkG= new Group();
  greenG= new Group();
  blueG= new Group();
  redG= new Group();
  arrowG= new Group();

}

function draw() {
 background.velocityX = -3 
  
  textSize(20);
text("Score:"+ score,500,30);

    if (background.x < 0){
      background.x = background.width/4;
    }
  bow.y=World.mouseY;
  
  
  
   if(frameCount%550===0){
   greenB=createSprite(110,Math.round(random(20,380)),10,10);
  greenB.addAnimation("pqr",GB);
  greenB.lifetime=200;
  greenB.velocityX=3;
  greenB.scale=0.1;
  greenG.add(greenB);
   }
   if(frameCount%400===0){
  redB=createSprite(90,Math.round(random(20,360)),10,10);
  redB.addAnimation("abc",RB);
  redB.lifetime=200;
  redB.velocityX=3
  redB.scale=0.1;
  redG.add(redB);
   }
   if(frameCount%350===0){
   pinkB=createSprite(60,Math.round(random(20,370)),10,10);
  pinkB.addAnimation("rst",PB)
  pinkB.lifetime=200;
  pinkB.velocityX=3;
  pinkB.scale=1.2;
  pinkG.add(pinkB);
   }
 if(frameCount%250===0){  
  blueB=createSprite(30,Math.round(random(20,370)),10,10);
  blueB.addAnimation("rst",BB);
  blueB.velocityX=3;
  blueB.lifetime=200;
  blueB.scale=0.1;
  blueG.add(blueB);
   }
  
  if(arrowG.isTouching(greenG)){
  greenG.destroyEach();
    arrowG.destroyEach();
    score=score+3;
  }
  if(arrowG.isTouching(redG)){
  redG.destroyEach();
    arrowG.destroyEach();
    score=score+1;
  }
  if(arrowG.isTouching(blueG)){
  blueG.destroyEach();
    arrowG.destroyEach();
    score=score+2;
  }
  if(arrowG.isTouching(pinkG)){
  pinkG.destroyEach();
    arrowG.destroyEach();
    score=score+1;
  }
 
  if (keyDown("space")){
    arrow=createSprite(455,250,10,10);
  arrow.addImage("xyz",arrowM);
  arrow.scale=0.4;
 arrow.depth=bow.depth;
  bow.depth=bow.depth+1;
  arrow.velocityX=-6;
    arrow.y=bow.y;
    arrow.lifetime=200;
    arrowG.add(arrow);
 
  }
  
  drawSprites();
}    



   
