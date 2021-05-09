var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];
var particle;
var divisionHeight=300;
var score =0;
var count=0;
var gameState="play"
var s1,bg;
function preload(){
s1=loadSound("bowling2.mp3")
bg=loadImage("bg.jpeg")
}
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background(bg);
  Engine.update(engine);
 
  
fill("white")
     textSize(25);
  text("Score : "+score,30,40);
  fill("blue");
  text(" 500 ", 10, 540);
  text(" 100 ", 85, 540);
  text(" 200 ", 160, 540);
  text(" 500 ", 250, 540);
  text(" 100 ", 340, 540);
  text(" 1000 ", 400, 540);
  text(" 500 ", 480, 540);
  text(" 100 ", 560, 540);
  text(" 200 ", 650, 540);
  text(" 500 ", 730, 540);
  Engine.update(engine);
  ground.display();
  if(gameState=="end"){
 textSize(100)
 text("GAME OVER",150,250)
  }
  //if (gameState=="play"){

  
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
  }
    if(particle!=null)
    {
     particle.display();
    if (particle.body.position.y>760)
     {
    if (particle.body.position.x < 300) 
    {
    score=score+500;      
    particle=null;
    if ( count>= 5) gameState ="end";                          
      }
      else if(particle.body.position.x < 450 && particle.body.position.x > 350 ){
        score = score + 1000;
        particle=null;
      if ( count>= 5) gameState ="end";  
      }
      else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
    {
    score = score + 100;
     particle=null;
   if ( count>= 5) gameState ="end";
}
  else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
    {

     score = score + 200;
     particle=null;
      if ( count>= 5)  gameState ="end";
    }
  }
  }
  
     
   
   /*
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 */
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
  }

function mousePressed(){


if (gameState!=="end")
{
  count++;
  particle=new Particle(mouseX,10,10,10);
s1.play();
}
}