const c = document.getElementById("can")
const ctx = c.getContext("2d")
const canvasSize = 600
const snakeBox=20
c.width=canvasSize
c.height=canvasSize
const totalMoves = canvasSize/snakeBox
// define apple
const apple = new Image()
//alert("hi")
apple.src="images/apple.png";

// define music
let dead = new Audio()
let up = new Audio()
let down = new Audio()
let eat = new Audio()
let left = new Audio()
let right= new Audio()
 up.src="audio/up.mp3";
 dead.src="audio/dead.mp3";
 down.src="audio/down.mp3";
 left.src="audio/left.mp3";
 right.src="audio/right.mp3";
 eat.src="audio/eat.mp3"
//define snake
let snake=[]
snake[0]={
    x:9*snakeBox,
    y:10*snakeBox
}
//create Food
let food={};
getfood()
//scroe
let scroe =0
//snake dir
let dir =""
document.addEventListener("keydown",direction)
function direction (){
    let key=event.keyCode
//alert(key)
if(key==38&& dir!="down")
{
dir="up"
up.play()

}
else if(key==40 && dir!="up"){
dir="down"
down.play()
}
else if(key==37 && dir!="right"){
dir="left"
left.play()
}
else if(key==39 && dir!="left"){
dir="right"
right.play()
}
}
// print Food
function getfood(){
    food={
        x:Math.floor(Math.random()*(totalMoves-5-3)+3)*snakeBox,
  y:Math.floor(Math.random()*(totalMoves-5-3)+3)*snakeBox
        
     };

    }
   
    //snake Body GameOver
    function collision(head,ar){
for(i=0;i<ar.length;i++){
  if(ar[i]==head[i]){
gameOver()
    //return true;
console.log("hit")
    }
//console.log(head)
    
return false
console.log(ar)    

}
    }
function show(){
    ctx.fillStyle="black"
    ctx.fillRect(0,0,canvasSize,canvasSize)
for(i=0;i<snake.length;++i){
    ctx.fillStyle=i==0?"white":"red"
    ctx.fillRect(snake[i].x,snake[i].y,snakeBox,snakeBox)
    ctx.strokeStyle="white"
    ctx.strokeRect(snake[i].x,snake[i].y,snakeBox,snakeBox)
ctx.fillStyle="white"

ctx.font="44px serif";
ctx.fillText("Score:"+scroe,30,30)
var HighScore=localStorage.getItem("HighScore")

if(HighScore<1){
    HighScore=0
}
ctx.fillText("HighScore :"+HighScore,250,30)

if(HighScore<scroe){
    localStorage.setItem("HighScore",scroe)
}
}
    ctx.drawImage(apple,food.x,food.y,snakeBox,snakeBox)
let snakeX= snake[0].x;
let snakeY = snake[0].y;
if(dir=="left"){
snakeX-=snakeBox    
}
if(dir=="right"){
    snakeX+=snakeBox
}
if(dir=="up"){
    snakeY-=snakeBox
}
if(dir=="down"){
    snakeY+=snakeBox
}
//snake eat food
if(snakeX==food.x && snakeY==food.y){
//score increes  
    scroe++;
//eat sound
    eat.play();
    //call food function
    getfood()
    //console.log("eated")
}
else{
    // use pop algoritham in pop()
    snake.pop()
}
//movement of snake
let newHead ={
    x:snakeX,
    y:snakeY};
//GameOver condition
if(collision(newHead,snake)|| snakeX<0||snakeX>=canvasSize||snakeY<0||snakeY>=canvasSize||snakeX==snake){
gameOver()
return
}
collision(newHead,snake)
snake.unshift(newHead)
//console.log(food.y,snakeY,food.x,snakeX)


}
//stop movement
var gm = setInterval(show,200)
function gameOver(){
    clearInterval(gm)
    dead.play()
localStorage.setItem("k",scroe)
var s = localStorage.getItem("k")
//Hiscore(s)  
//ctx.font="44px serif";
//ctx.fillText("High Score:"+HiScore,70,70)

    ctx.fillStyle="white"
    ctx.font="44px serif";
    ctx.fillText("Game Over",canvasSize/2-100,canvasSize/2)

}
//function Hiscore(sc){
   //localStorage.setItem("hiscore",10)
   //var hiscore = localStorage.getItem("hiscore")
   //var h;
   //var HighScore
   //if(sc>=hiscore){
    //   localStorage.setItem("HighScore",sc)
  //      HighScore=localStorage.getItem("HighScore")
//}else{
    // localStorage.setItem("Highscore",hiscore)
  // var Highscore =localStorage.getItem("Hiscore")
  
//}
   //if(HighScore>hiscore){
     //  h=HighScore
   //}else{
 //      h=Highscore
   //}
//HighScore=localStorage.getItem("HighScore")
   //ctx.font="44px serif";
  // ctx.fillText("HighScore:"+HighScore,200,30)
     
//}
//function btn(n){
  //  if(n==1)
//}
