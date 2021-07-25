var scope,scopeImg;
var score = 0;
var enemyGroup1,enemyGroup2,enemyGroup3,enemyGroup4,enemyGroup5;

var bg,bgImg;
var count=1;

function preload(){
  scopeImg = loadImage("scope.png");
  bgImg = loadImage("images/1244577.png");
  e1Img = loadImage("images/ghost1.png");
  e2Img = loadImage("images/skeleton2.png");
  e3Img = loadImage("images/vampire3.png");
  e4Img = loadImage("images/zombie4.png");

}

function setup(){
  createCanvas(1400,800);

  bg = createSprite(900,400,1400,800);
  bg.addImage(bgImg);
  bg.scale = 1;

  scope = createSprite(mouseX,mouseY,1,1);
  scope.addImage(scopeImg);
  scope.scale = 0.3;

  enemyGroup1 = new Group();
  enemyGroup2 = new Group();
  enemyGroup3 = new Group();
  enemyGroup4 = new Group();
  enemyGroup5 = new Group();

  //scope.debug = true;
  scope.setCollider("circle",0,0,50);
}

function draw(){
  background("red");
  scope.x = mouseX;
  scope.y = mouseY;

  if(count === 5) {
    count = 1;
  }

  enemies();
  drawSprites();


  if(enemyGroup1.isTouching(scope) && mousePressedOver(scope)) {
    score = score+100;
    enemyGroup1.destroyEach();
    console.log("e1 destroy");
  }

  else if(enemyGroup2.isTouching(scope) && mousePressedOver(scope)) {
    score = score+100;
    enemyGroup2.destroyEach();
    console.log("e2 destroy");
  }

  else if(enemyGroup3.isTouching(scope) && mousePressedOver(scope)) {
    score = score+100;
    enemyGroup3.destroyEach();
    console.log("e3 destroy");
  }

  else if(enemyGroup4.isTouching(scope) && mousePressedOver(scope)) {
    score = score+100;
    enemyGroup4.destroyEach();
    console.log("e4 destroy");
  }

  textSize(30);
  fill("white");
  text("Score : " + score ,1000,50);

}

function enemies() {

  if(frameCount%60 === 0) {
    
    if (count == 1) {
      enemyG1();
      count+=1;
    } 
    else if (count === 2) {
      enemyG2();
      count+=1;
    } 
    else if (count === 3) {
      enemyG3();
      count+=1;
    } 
    else if(count === 4) {
      enemyG4();
      count+=1;
    }

  }

}

function enemyG1() {
  var e = createSprite(random(50,1350),560,20,200);
  e.addImage(e1Img)
  e.scale = 0.06;
  e.velocityY = -4;
  e.lifetime = 500;
  enemyGroup1.add(e);
  //e.debug = true;
  e.setCollider("rectangle",-35,0,100,500);
}

function enemyG2() {
  var e2 = createSprite(random(50,1350),560,20,200);
  e2.addImage(e2Img)
  e2.scale = 0.5;
  e2.velocityY =-4;
  e2.lifetime = 500;
  enemyGroup2.add(e2);
  //e2.debug = true;
  e2.setCollider("rectangle",-35,0,100,500);
}

function enemyG3() {
  var e3 = createSprite(random(50,1350),560,20,200);
  e3.addImage(e3Img)
  e3.scale = 0.5;
  e3.velocityY = -4;
  e3.lifetime = 500;
  enemyGroup3.add(e3);
  //e3.debug = true;
  e3.setCollider("rectangle",-35,0,100,500);
  
}

function enemyG4() {
  var e4 = createSprite(random(50,1350),560,20,200);
  e4.addImage(e4Img)
  e4.scale = 0.3;
  e4.velocityY = -4;
  e4.lifetime = 500;
  enemyGroup4.add(e4);
  //e4.debug = true;
  e4.setCollider("rectangle",-35,0,100,500);
}
