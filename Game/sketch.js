function preload(){
 birdImage=loadImage("Flappy bird/1x/Asset 8.png")
 birdAnimation=loadAnimation("Flappy bird/1x/Asset 9.png","Flappy bird/1x/Asset 1-.png")

}
function setup(){
createCanvas(600,700)
flappyBird= createSprite(70,342,25,25)
flappyBird.addImage("bird",birdImage)
}
function draw(){
    background(0)
    text(mouseX+","+mouseY,mouseX,mouseY)
    spawnPipe()
    drawSprites()
}
function spawnPipe(){
    if(frameCount%100==0){
        pipe1= createSprite(580,700,40,600)//bottom]
        pipe1.debug=true
        pipe1.y=Math.round(random(400,750))
        pipe1.velocityX=-3
        pipe2= createSprite(580,0,40,300)//top
        pipe2.debug=true
        //pipe2.y=Math.round(random(30,200))
        pipe2.velocityX=-3
    }
   
}