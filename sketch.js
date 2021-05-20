var car,wall;
var speed, weight;

speed=random(45,31);
weight= random(400,1500);

function setup() {
  createCanvas(1600,400);

car= createSprite(50,200,50,50);

wall=createSprite(1280,200,60,height/2);
car.VelocityX = 5;
}

function draw() {
  background("cyan");  
  
  if(wall.x-car.x <  (car.width+wall.width)/2)
{
  car.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22500
  if(deformation>180)
  {
    car.shapecolor=color("255,0,0");
    wall.shapecolor=color("white");
  }
  if(deformation<180 && deformation>100)
  {
    car.shapecolor=color("230,230,0");
    wall.shapecolor=color("white");
  }
  if(deformation<100)
  {
    car.shapecolor=color("0,255,0");
    wall.shapecolor=color("white"); 
  }
} 






drawSprites();
}
