
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	// paper
	paper=new Paper(100,600,20);

	// dustbin
	db1=new Rect(width-(width/3),650,200,20,'white');
	db2=new Rect(width-(width/3)+100,620,20,100,'white');
	db3=new Rect(width-(width/3)-100,620,20,100,'white');

	// ground
	ground=new Rect(width/2, height-35, width,10,'yellow');

	// runing the engine
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  db1.display();
  db2.display();
  db3.display();
  paper.display();
  ground.display();

}

function keyPressed(){
	if (keyCode == UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-50});
	}
}

