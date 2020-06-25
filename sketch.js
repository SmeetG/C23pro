var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,packageContainer1,packageContainer2,packageContainer3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageContainer1=createSprite(width/2,654,200,15);
	packageContainer1.shapeColor=color(255,0,0);
	
    packageContainer2=createSprite(295,590,15,150);
	packageContainer2.shapeColor=color(255,0,0);
	
	packageContainer3=createSprite(495,590,15,150);
	packageContainer3.shapeColor=color(255,0,0);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
     
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
    

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	packageContainer1 = Bodies.rectangle(width/2, 654, 200, {isStatic:true} );
 	World.add(world,packageContainer1);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



