var fixedrect;

var movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(200, 200, 30, 80);
  movingrect = createSprite(50,100,80,30);

  fixedrect.debug = true;
  movingrect.debug = true;
}

function draw() {
  background(0,0,200);  

  movingrect.x = mouseX;
  movingrect.y = mouseY;

  if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 && 
    fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2 && 
    movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2 &&
    fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2) {

    movingrect.shapeColor = "red";
    fixedrect.shapeColor = "red";
  }

  else{
    movingrect.shapeColor = "green";
    fixedrect.shapeColor = "green";
  }

  drawSprites();
}