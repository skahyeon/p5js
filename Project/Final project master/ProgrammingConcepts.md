### Topics

## Shapes


Rect() was used to implement obstacles and googly eyes characters, and the four weapons made Shape different.


*code*


The first weapon used a circle().

    circle(v3[p3].position.x+50,this.y,25,25)
    
    
The second weapon used a ellipse().

    ellipse(v2[p2].position.x+50,this.y,40,20)
    
    
The third weapon used a rect().

    rect(v1[p1].position.x+50,this.y-10,20,20) 
    
    
The fourth weapon used a vertex().

    beginShape();
    vertex(0,-10);
    vertex(2*10,-10);
    vertex(2*10, -2*10);
    vertex(4*10,0);
    vertex(2*10,2*10);
    vertex(2*10,10);
    vertex(0,10);
    endShape(CLOSE); 
    
    
## Colors


The colors are different for each weapon, character, in-game, and main screen.
The code below lists the colors of the weapons in order.


*code*


    fill('#FF5E00'), 
    fill('yellow'), 
    stroke('#0100FF')
    strokeWeight(7)
    fill('#4374D9'),
    fill(255,255,255,210)
    stroke('yellow')
    strokeWeight(5)  
    
    
The color of the pipe is black at the bottom and white at the top and the color of the button also changes when you raise the mouse.(use fill()) 
The color of the background changes whenever the level of difficulty changes. 


*code*


  easy : background('#6092e3')
  normal : background('#6092e3')
  hard : background('#6092e3')
  main screen, help, level : background('#6092e3')
    
    
## Variables


Var was used to implement pipes, bird, pump, background, level, etc.


*code*


  var bird;
  var pipes;
  var isOver = false;
  var touched = false;
  var prevTouched = touched;
  var z=0
  var x=400
  var y=400
  var v =[];
  var v1 = []
  var v2 = []
  var v3 = []
  var Jump = false 
  var sound
  var q = 0
  var m = 0
  var m1 = 1000
  var thrusting = false;
  var l = 0
  var l2 = 0
  var page = 'home';
  var level = 36
  var bac = '#00c5cd'
  var o = 960
    
    
## Conditional Statements


Conditional statements were used to allow the character's energy, time limit, bump into a wall, or to function differently whenever the character attacks or jumps.


*code*


  if (pipes[i].hits(bird)) 
    {
      console.log("HITS")
      gameover();
    }
    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  if(o+l2 < 100){
    gameover(); 
   }     
   if(m-q > 1000){
    gamewin(); 
   }  
   if(m1-l < 0){
    gameover(); 
   }
   if (keyCode === 81) {//q
    v3.push(new particle(74,170,35,0));    
    l += 10;//l=energy
    l2 += 5;  
  } 
         
         
## Loops


NoLoop() was used to prevent repetition when the game won or lost, and loop() was used to repeat the song.


*code*


  function gameover() {  
  isOver = true;
  noLoop();
}
    
    
  function gamewin() {
  isOver = true;
  noLoop();
}


function setup() {
  mains.play()
  mains.loop()
 }
 
 
## Functions


function preload() :  uploaded a song.
function timeIt(),function timeIt2() : to command every certain time.
function reset() : reset everything.
The key was entered through function keyPressed(), function keyReleased().
In addition, basic functions and pictures were implemented with function setup() and function draw().


*code*


  function reset() {
  isOver = false;
  pipes = [];
  bird = new Bird();
  pipes.push(new Pipe());
  gameoverFrame = frameCount - 1;
  loop();
  }
    
    
  function gameover() {
  push()
  fill('red')
  textSize(100);
  textAlign(CENTER, CENTER);
  text('GAME OVER!', 530, height / 2);
  textAlign(LEFT, BASELINE);
  pop()
  isOver = true;
  noLoop();
  dies.play()
  mains.stop()
  }
  
  
  function preload() {
  wins = loadSound('sound/win.mp3')
  dies = loadSound('sound/die.mp3')
  mains = loadSound('sound/main.mp3')
  shoots = loadSound('sound/shoot.mp3')
  }
  
  
## Classes


Classes were used to implement weapons, pipes,birds, etc.


*code*


  class particle{
  constructor(x,y,Length,Angle){
    this.position = new Vec2(x,y);
    this.vel = new Vec2(0,0);
    this.vel.setLength(Length);//
    this.vel.setAngle(Angle);//
    this.lifeSpan = random(500,2000)
  }
  }
    
    
  class Bird {
  constructor() {
    this.y = 450;
    this.x = 64;
    this.gravity = 1;
    this.lift = -18;
    this.velocity = 0;
    this.width = 64;
    this.height = 64;
  }
  }
  
  
  class Pipe {
  constructor() {
    this.spacing = 100;
    this.top = random(220,340);
    this.bottom = random(200,320);
    this.x = width;
    this.w = random(40,100);
    this.speed = 10+a;
    this.passed = false;
    this.highlight = false;
  }
  }
  
  
  class Vec2{
  constructor(x=0,y=0){
    this.angle = 0;
    this.x = x;
    this.y = y;
  }
}


## Arrays


Enter the length through the key press and implement the weapon using arrays.


*code*


for(var p=1; p<v.length; p++)
    {
    }
    
   
*code*


Arrays were used to implement pipes.


for (var i = pipes.length - 1; i >= 0; i--) {}

