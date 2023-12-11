//alert("hiii");
var randomNumber=Math.random()*6;
var randomNumber1=Math.floor(randomNumber) + 1;
var image1=("./images/dice"+ randomNumber1 + ".png")
document.querySelector(".img1").setAttribute('src',image1);

var randomnumber2=Math.floor(Math.random()*6) +1;
var image2=("./images/dice"+ randomnumber2 + ".png");
document.querySelector(".img2").setAttribute("src",image2);

if (randomNumber1 == randomnumber2){
    document.querySelector("h1").textContent="Both wins!";
}
else if (randomNumber1 > randomnumber2){
    document.querySelector("h1").textContent="player 1 wins!";
}else{
    document.querySelector("h1").textContent="player 2 wins!";

}
