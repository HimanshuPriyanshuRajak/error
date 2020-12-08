
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690,795,20)
	paper = new Ball()
	
  
}


function draw() {
  background("black"); 
  Engine.update(engine); 
  ground.display();
  paper.display();
}

function keyPressed () {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body=position,{x:85,y:-85});
	}
}
