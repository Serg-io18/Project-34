var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var superhero
var monster
var ground

function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(500,500,1200,20)
}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
}

