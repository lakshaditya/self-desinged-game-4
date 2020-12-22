const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,dog1,dog2,dog3;

function preload() {
    backgroundImg = loadImage("sprites/background.png");
    playerImg = loadImage("sprites/player.png");

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    dog1  = new Dog(1000,350,100,80)  ;
    book = new Book(950,350,50,100);
    stone = new Stone(170,290,20,20);
    launcher = new Launcher(stone.body,{x:160,y:290})
   }

function draw(){
    background(backgroundImg);
    image(playerImg,100,250,100,150);
  Engine.update(engine);
  dog1.display();
 stone.display();
  book.display();
launcher.display();
}
