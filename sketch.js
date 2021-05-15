var car,speed, weight;;  
var wall,thickness ;



function preload(){


}

function setup() {
  createCanvas(1600,600);
 
  bullet=createSprite(100, 300, 100, 50);
  bullet.shapeColor="deepskyblue";


  thickness = random(33,73); 
  speed = random(223,321);
  weight = random(30,51);

  wall=createSprite(1500,300,thickness,height/2);
  wall.shapeColor="#964B00";
}

function draw() {
  background(	'#000000');  3
if(keyDown("a")){
 
  speed=random(55,90);
  weight=random(400,1500);
  bullet.shapeColor="deepskyblue";
  bullet.x=100;
  bullet.y=300;
  bullet.velocityX=speed;
}
  if(Collided(bullet,wall)){
    bullet.velocityX=0;

  var d = 0.5* weight* speed* speed/(thickness*thickness*thickness);

    if(d>10){
     wall.shapeColor="green";
    }
    else if(d<10 ){
     wall.shapeColor="red";
    }
    else {
      wall.shapeColor =" brown";
    }
   

  }
  drawSprites();
}

function Collided(lbullet,lwall){

  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
    return false;
}