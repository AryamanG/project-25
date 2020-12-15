var paperIMG, dustBinIMG;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bottom = new Bottom(1300,560,170,20);
	left = new Box(1210,580,20,120);
	right = new Box(1385,580,20,120);
	paper = new Paper(50,580,30,30);
	


	ground = new Ground(800,660,1600,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  left.display();
  right.display();
  ground.display();
  paper.display();	
  bottom.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:185,y:-350});

	}


}



