
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var papper;
var ground;
var w1,w2,w3;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(200,380,400,20);

	w1 = new Ground(300,330,10,80);
	w2 = new Ground(380,330,10,80);
	w3 = new Ground(340,365,80,10);
    
papper = new Papper(30,330);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  w1.display();
  w2.display();
  w3.display();

  papper.display();

  drawSprites();
 
}



