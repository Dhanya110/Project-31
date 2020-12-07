const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, ground01;



function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  

  for(var k =0; k <=width; k = k + 80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
    }

  ground01=new Ground (60,730,850,10);
}
var plinkos=[];
  var particles=[];
  var divisions=[];
  var divisionHeight=300;

  
function draw() {
  background(0);  
  Engine.update(engine);

  ground01.display();
  drawSprites();
}