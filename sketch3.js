var fir,mor;
function setup() {
  createCanvas(1200,800);
  fir=createSprite(400, 400, 150, 70);
 mor =createSprite(400,200,70,150);
 fir.shapeColor="blue";
 mor.shapeColor="blue";
 fir.velocityY=-3;
 mor.velocityY=3;
}

function draw() {
  background(255,255,255);  
 
  console.log(mor.x-fir.x)
  bounceOff(fir,mor);
  drawSprites();
}   
