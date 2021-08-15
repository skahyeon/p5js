//Jaehyeon Nam
//Final Project
//CS099
//Spring 2020
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

function preload() {
  
  
  mains = loadSound('sound/main.mp3')
  
}


function setup() {
  mains.setVolume(0.22)
  mains.play()
  mains.loop()
  setInterval(timeIt, 3000);
  setInterval(timeIt2, 1000);
  reset();
  
  
 }


var button = function(x,y,w,h,pageSwitch,txt,txtSize)
{
fill('#FF4848');
  if(mouseX > x && mouseX <x+w && mouseY > y && mouseY < y+h)
  {
   fill('#00D8FF');
   if(mouseIsPressed)
   {
     page = pageSwitch;
   }  
   
  }  
  rect(x,y,w,h);
  textSize(txtSize);
  fill(0,0,0);
  text(txt,x+w/2,y+h/2);
}

  function draw(){
    //frameRate(70)
  createCanvas(1000,840);
  background(255,255,255);
  
  textAlign(CENTER,CENTER);
  switch(page)
  {
    case "home":
      background('#6092e3');
      button(200,408,630,65, "assistant", "HELP", 26);
      button(200,258,630,65,"play", "PLAY", 26);
      button(200,333,630,65,"level", "LEVEL", 26);
      button(200,483,630,65,"credit", "CREDIT", 26);
      push()
      fill('yellow')
      rect(110,580,60,60)
      pop()
      push()
      noStroke()
      fill('white')
      circle(125,600,random(20,25),random(20,25))
      circle(155,600,random(20,25),random(20,25))
      fill('black')
      circle(125,600,random(10,15),random(10,15))
      circle(155,600,random(10,15),random(10,15))
      fill('blue')
      rect(122,620,35,15)
      pop()
      
      push()
      noStroke()
      fill(255,255,255,220)
      stroke('yellow')
      strokeWeight(5)
      translate(310,650);
      beginShape();
      vertex(0,-12);
      vertex(2*12,-12);
      vertex(2*12, -2*12);
      vertex(4*12,0);
      vertex(2*12,2*12);
      vertex(2*12,12);
      vertex(0,12);
      endShape(CLOSE); 
      pop()
      
      push()
      stroke('#0100FF')
      strokeWeight(7)
      fill('#4374D9')//e
      rect(450,560,20,20)
      pop()
      
      push()
      noStroke()
      fill('yellow')//w
      ellipse(750,660,50,30)
      pop()
      
      push()
      noStroke()
      fill('#FF5E00')
      circle(870,680,30,30)
      pop()
      
      textSize(59);
      push()
      textSize(125);
      fill(0,random(20,70),random(200,255))
      textStyle(BOLD);
      text("Square Rush",510,100);
      push()
      textSize(36);
      fill('#00D8FF')
      textStyle(BOLDITALIC);
      text("Made by jaehyeon",522,170);
      pop()
      pop()
      
      break;
      
      case"credit": // Easy
      background('#6092e3');
      text("CREDIT",500,250);
      text("Made by JaehyeonNam",500,400);
      button(880,680,70,70,"home","BACK",24);
      level = 30;
      bac = '#00c5cd'
      break;
      
      case"level":
      background('#6092e3');
      button(280,470,130,65,"1", "Easy",26);
      button(430,470,130,65,"2", "Normal",26);
      button(580,470,130,65,"3", "Hard",26);
      textSize(26);
      //textAlign(CENTER);
      text("You can choose the difficulty of the game.",500,250);
      
      break;
      
      case"1": // Easy
      background('#6092e3');
      text("If you choose the difficulty level, press the BACK key to go back.",500,250);
      text("Good luck",500,400);
      button(880,680,70,70,"home","BACK",24);
      level = 30;
      bac = '#00c5cd'
      break;
      
      case"2": // Normal
      background('#6092e3');
      text("If you choose the difficulty level, press the BACK key to go back.",500,250);
      text("Good luck",500,400);
      button(880,680,70,70,"home","BACK",24);
      level = 20;
      bac = '#d546a6'
      break;
      
      case"3": // Hard
      background('#6092e3');
      text("If you choose the difficulty level, press the BACK key to go back.",500,250);
      text("Good luck",500,400); 
      button(880,680,70,70,"home","BACK",24);
      level = 10;
      bac = '#ae0000'
      break;
      
      case"assistant":
      background('#6092e3');
      button(880,680,70,70,"home","BACK",24);
      textSize(26);
      //textAlign(CENTER);
      text("1. Use a weapon using q,w,e,rkey.",490,100);
      text("2. Use your weapon to push the yellow laser away.",495,175);
      text("3. You can see the time limit through the red stick at the top.",490,270);
      text("4. If the energy becomes zero while using a weapon, you die.",490,370);
      text("5. Even if you touch a yellow laser or an obstacle (a stick), you die.",490,470);
      break;
      case"play":
      //mains.play()
      noStroke()
  background(bac);
      
      
      
  push()
  noStroke()
  frameRate(170)
  fill(255,0,0,250)
  rect(0,0,m-q,30)
  fill(0,0,255,250)
  rect(0,810,m1-l,30)
  pop()
  
  push()
  fill(255)
  rect(390,750,60,60)
  rect(320,750,60,60)
  rect(250,750,60,60)
  rect(180,750,60,60)
  pop()
  
  push()
  textSize(20)
  fill('blue')
  text('Q (5)', 180, 750);
  text('W (10)', 250, 750);
  text('E (20)', 320, 750);
  text('R (30)', 390, 750);
  pop()
  push()
  fill('#FF5E00')
  circle(210,780,30,30)
  pop()
  push()
  fill('yellow')//w
  ellipse(280,780,50,30)
  pop()
  push()
  stroke('#0100FF')
  strokeWeight(5)
  fill('#4374D9')//e
  rect(335,765,30,30)
  pop()
      
      push()
      
      noStroke()
      fill(255,255,255,220)
      stroke('yellow')
      strokeWeight(5)
      translate(410,780);
      beginShape();
      vertex(0,-7);
      vertex(2*7,-7);
      vertex(2*7, -2*7);
      vertex(4*7,0);
      vertex(2*7,2*7);
      vertex(2*7,7);
      vertex(0,7);
      endShape(CLOSE); 
      pop()

  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].update();
    pipes[i].show();

    
    if (pipes[i].hits(bird)) 
    {
      console.log("HITS")
      gameover();
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
    
  }
  
  bird.update();
  bird.show();

  if ((frameCount - gameoverFrame) % level == 0) {
    pipes.push(new Pipe()); 
  }
      
  
      
      
      
    push()
    fill(random(200,255),random(200,228),0,random(180,250)) 
    rect(o+l2,0,40,840)  //enemy
    pop()  
      
    if(o+l2 < 100){
    gameover(); 
   }  
       
   if(m-q > 1000){
    gamewin(); 
   }
      
      
   if(m1-l < 0){
    gameover(); 
   }
      
    if(o+l2>960)  
    {
     return true
    }
   
    
      break;   
    
  }
  
}
function gamewin() {
  push()
  fill('red')
  textSize(100);
  textAlign(CENTER, CENTER);
  text('GAME WIN!', 530, height / 2);
  textAlign(LEFT, BASELINE);
  pop()
  isOver = true;
  noLoop();
  mains.stop()
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
  mains.stop()
}


function timeIt(){
   a+=2;
  l-=36
    if(a>=12){
     a=12; 
    }    
  }

function timeIt2(){ 
   l2-=33;
   q-=22
    if(l==0){
     l=0; 
    } 
  }



function reset() {
  isOver = false;
  pipes = [];
  bird = new Bird();
  pipes.push(new Pipe());
  gameoverFrame = frameCount - 1;
  loop();
}



function touchStarted() {
  if (isOver) reset();
}

function keyPressed(){           
   if (keyCode === 81) {//q
    v3.push(new particle(74,170,35,0)); 
    //q += 1;
     
    l += 10;//l=energy
    l2 += 5;
     
  } 
  
  else if (keyCode === 87) {//w
    v2.push(new particle(74,170,35,0));
    //q += 1;
    
    l += 20;
    l2 += 10;
    
  } 
  
  else if (keyCode === 69) {//e
    v1.push(new particle(74,170,35,0));
    //q += 1;
    
    l += 30;
    l2 += 15;
    
  } 
  
  else if (keyCode === 82) {//r
    v.push(new particle(74,170,35,0));
    q += 1;
    
    l += 40;
    l2 += 20;//push enemy
    
  } 
  
   else if (keyCode === UP_ARROW) {
    bird.up();
    thrusting = true;
    if (isOver) {
    reset();
    }
    
   
  }
   }
function keyReleased(){
  
  if (keyCode == UP_ARROW)
  {
    //b+=100
    thrusting = false;
  }else return;
}






