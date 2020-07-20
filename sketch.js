var blocks1,blocks2,blocks3,blocks4,blocks5,blocks6,blocks7,blocks8,blocks9,blocks10,blocks11,blocks12,blocks13,blocks14,blocks15,blocks16;
var polygon;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


  //top
  blocks1 = new Blocks(390,155,30,40);
  
  //level one 
  blocks2 = new Blocks(360,195,30,40);
  blocks3 = new Blocks(390,195,30,40);
  blocks4 = new Blocks(420,340,30,40);

  //level two
  blocks5 = new Blocks(330,235,30,40);
  blocks6 = new Blocks(360,235,30,40);
  blocks7 = new Blocks(390,235,30,40);
  blocks8 = new Blocks(420,235,30,40);
  blocks9 = new Blocks(450,235,30,40);
  
  //level three
  blocks10 = new Blocks(300,275,30,40);
  blocks11 = new Blocks(330,275,30,40);
  blocks12 = new Blocks(360,275,30,40);
  blocks13 = new Blocks(390,275,30,40);
  blocks14 = new Blocks(420,275,30,40);
  blocks15 = new Blocks(450,275,30,40);
  blocks16 = new Blocks(480,275,30,40);


  polygon = Bodies.circle(50,200,20)
  world.add(world,polygon)

  slingshot = new Slingshot(this.polygon,{x:100,y:200})

  blocks1.shapeColor = color(128,128,128);
  
  blocks2.shapeColor = color(0,224,208);
  blocks3.shapeColor = color(0,224,208);
  blocks4.shapeColor = color(0,224,208);

  blocks5.shapeColor = color(255,192,203);
  blocks6.shapeColor = color(255,192,203);
  blocks7.shapeColor = color(255,192,203);
  blocks8.shapeColor = color(255,192,203);
  blocks9.shapeColor = color(255,192,203);

  blocks10.shapeColor = color(124,206,233);
  blocks12.shapeColor = color(124,206,233);
  blocks13.shapeColor = color(124,206,233);
  blocks14.shapeColor = color(124,206,233);
  blocks15.shapeColor = color(124,206,233);
  blocks11.shapeColor = color(124,206,233);
  blocks16.shapeColor = color(124,206,233);

}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  strokeWeight(4);
  drawSprites();

  blocks1.display();

  blocks2.display();
  blocks3.display();
  blocks4.display();

  blocks5.display();
  blocks6.display();
  blocks7.display();
  blocks8.display();
  blocks9.display();

  blocks10.display();
  blocks11.display();
  blocks12.display();
  blocks13.display();
  blocks14.display();
  blocks15.display();
  blocks16.display();

}

function mouseDragged()
{
 
    Matter.Body.setPosition (polygon.body,{x : mouseX, y : mouseY});

}

function mouseReleased()
{

   slingShot.fly();
    
}