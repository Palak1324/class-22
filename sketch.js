const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
var engine;
var world;
var ball, ground;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var groundoption= {isStatic:true}
  ground=Bodies.rectangle(200,390,400,20,groundoption);
  World.add (world,ground);
  var balloption= {restitution:1}
  ball=Bodies.circle(200,100,20,balloption);
  World.add (world,ball);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  fill("black");
rectMode(CENTER);
rect(200,390,400,20);
fill("red");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);
}




























