const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, rope;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;

function setup(){
    var canvas = createCanvas(2000,800);
    engine = Engine.create();
    world = engine.world;
ground=new Ground(400,600,1200,20)
box1=new Box (800,580,80,80)
box2=new Box (800,500,80,80)
box3=new Box (800,420,80,80)
box4=new Box (800,340,80,80)
box5=new Box (800,260,80,80)

box6=new Box (720,580,80,80)
box7=new Box (720,500,80,80)
box8=new Box (720,420,80,80)
box9=new Box (720,340,80,80)
box10=new Box (720,260,80,80)

ball=new Ball(200,200,80,80)
rope=new Rope (ball.body,{x:500,y:50})
}

function draw(){
    background("grey");
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    ball.display();
    rope.display();
}

