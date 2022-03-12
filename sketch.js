var sea,ship;
var seaImg,shipImg;

function preload(){
  //Making animation for the ship
  shipImg1 = loadAnimation("ship-1.png", "ship-2.png");
  //ading image
  seaImg = loadImage("sea.png");
}

function setup(){
  //creating canvas
  createCanvas(400,400);
  background("blue");

  // Moving background and creating background spirit
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  //Adding animation to ship and creating ship spirit
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  sea.velocityX = -3;

  if(sea.x < 0){
    //Making the background repeat
    sea.x = sea.width/8;
  }

 
  drawSprites();
}