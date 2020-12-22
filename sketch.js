const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, dustbin2, dustbin3
var ground
var paper


function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	dustbin1 = new Dustbin(500,300,150,15)
    dustbin2 = new Dustbin(470,300,15,100)  	
	dustbin3 = new Dustbin(530,300,15,100)	 
	ground = new Ground()

	paper = new Paper()

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  paper.display();
  drawSprites();
 
}

function keyPressed (){

if (keyCode === UP_ARROW){

 Matter.Body.applyForce(paper.body,{x:500,y:300},1)

}
}


