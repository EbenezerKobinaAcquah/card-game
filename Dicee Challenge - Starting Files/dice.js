
var ranNum;
document.querySelector(".img1").setAttribute("src", diceName());
var ranNum1= parseInt(ranNum); 
document.querySelector(".img2").setAttribute("src", diceName());
var ranNum2 = parseInt(ranNum);

if(ranNum1 > ranNum2){
    document.querySelector("h1").textContent = "🚩Player 1 won";
}else if(ranNum1 < ranNum2){
    document.querySelector("h1").textContent = "🚩Player 2 won";
}else{
    document.querySelector("h1").textContent = "🚩Draw";
}

function diceName(){
     ranNum = (Math.floor(6*Math.random()) + 1);
    ranNum = ranNum.toString();
    var nameOfDice = "images/dice" + ranNum + ".png";
    return nameOfDice;
}