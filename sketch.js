var balloon , background ;

function preload(){

  backgroundimg = loadImage("cityImage.png");
  hotairballoon = loadImage("HotAirBallon-02.png");

}

function setup(){
  database = firebase.database();
  console.log(firebase);
  createCanvas(500,500);

  balloon = createSprite(100,400,20,20);
  balloon.shapeColor = "blue";
  balloon.scale = 0.4;
  balloon.addImage(hotairballoon);

}

function draw(){

  background(backgroundimg);

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x - 10;
  }

  if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x + 10;
  }

  if(keyDown(UP_ARROW)){
    balloon.y = balloon.y - 10;
  }

  if(keyDown(RIGHT_ARROW)){
    balloon.y = balloon.y + 10;
  }

  drawSprites();
}