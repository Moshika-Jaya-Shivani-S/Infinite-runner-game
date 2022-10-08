var runner,runnerImg
var road,roadImg
var rock,rockImg
var coin,coinImg
var Score = 0;
//Game States
var PLAY=1;
var END=0;
var gameState=PLAY;


function preload() {
    runnerImg = loadAnimation("runner.png","runner2.png")
    roadImg = loadImage("background.jpg")
    coinImg = loadImage("coin.jpg")
    rockImg = loadImage("rock.jpg")


}
function createCash() {
  if (World.frameCount % 200 == 0) {
    var coin = createSprite(Math.round(random(50, 350),40, 10, 10));
coin.addImage(cashImg);
  coin.scale=0.12;
  coin.velocityY = 5;
  coin.lifetime = 200;
  coinG.add(coin);
  }
}
function setup() {
    createCanvas(600,600);
    //road = createSprite(300,300);
    //road.addImage("background",roadImg);
    //road.velocityX = -1;
    //road.scale = 2;
    
runner = createSprite(200,300,20,20);
runner.addAnimation("runner",runnerImg);
runner.scale=0.8;


}

function draw() {
    background(255);
   if(road.x <400 ){
        road.x = 300
      } 
    
    if (gameState === PLAY) {
      
      if(keyDown("left")){
          runner.x = runner.x - 3;
      }
      if(keyDown("right")){
    
            runner.x = runner.x + 3;

      }
      if(keyDown("space")){
  
        runner.velocityY = -10;
    }
    drawSprites();
  }
  textSize(20);
  fill(255);
  text("Score: "+ Score,width-150,30);
  }
  