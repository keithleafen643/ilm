const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var bruh, peter, fundo, dick;
var bruhIMG, peterIMG, fundoIMG, dickIMG;


function preload() {
 
fundoIMG = loadImage("./assets/fundo_qualidade.png");
bruhIMG = loadImage("./assets/bruh.png");
dickIMG = loadImage("./assets/dick_cock.png");
peterIMG = loadImage("./assets/peter.png");

}
function setup() {

  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  
 options={
 isStatic:true
 }
 
 ground= bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);
 
 fundo = createSprite(windowWidth/2,windowHeight/2,20,20)
 fundo.addImage(fundoIMG)

}

function draw() {
  background(189);
  Engine.update(engine);
 
 rect(ground.position.x, ground.position.y,width*2,1);
  
 drawSprites()  
}
