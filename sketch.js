//const e uma variavel constante
//Engine e modulo do motor de fisica 
//World e o modulo do mundo 
//Bodies e o modulo do corpo
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine;
var world;
var bola;
var solo

function setup(){
  createCanvas(400,400)

//criando motor de fisica 
engine=Engine.create();
//colocando motor de fisica no mundo 
world=engine.world;

var propriedadesdabola={
  restituition:0.95,
  frictionAir:0.01
}
//criando corpo da bola 
bola=Bodies.circle(100,10,30,propriedadesdabola);
//adicionando a bola ao mundo 
World.add(world,bola);

var propriedadesdosolo={
  isStatic:true
}

solo=Bodies.rectangle(0,390,400,20,propriedadesdosolo);
World.add(world,solo);

}

function draw(){
  background("purple");
  //atualizando o motor de fisica 
  Engine.update(engine);
  //desenhando a bola 
  ellipse(bola.position.x,bola.position.y,30);
  rect(solo.position.x,solo.position.y,400,20);
}

