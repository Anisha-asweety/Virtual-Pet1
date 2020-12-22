//Create variables here
var dog ,happyDog
var foodS,foodStock
var database

function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png")
  happyDog=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  
  dog=createSprite(250,300)
  dog.scale=0.2
  dog.addImage(dogImg)

  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
}

function draw() {  
   background(46,139,87)

   if(keyDown(UP_ARROW)){
     writeStock(foodS)
     dog.addImage(dogImg1)
   }
  drawSprites();
  //add styles here
   text(Note-PressUP_ARROWKeyToFeedTheDogdMilk)
   textSize(10)
}

//Function to read the DB
function readStock(data){
  foodS=data.val()
}

//Function to write in DB
function writeStock(x){

  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  foodS=database.ref('/').update({
  food:x
  })
}