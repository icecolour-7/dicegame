const dice = document.getElementById("dice");

function dicegame() {
    let randomNum = Math.floor((Math.random()*6)+1);
    let dicelocation = "images/"+"dice"+randomNum+".png";
    let img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", dicelocation);

    let randomNum2 = Math.floor((Math.random()*6)+1);
    let dicelocation2 = "images/"+"dice"+randomNum2+".png";
    let img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src", dicelocation2);

    if(randomNum > randomNum2) {
        document.querySelector("h1").innerHTML = "Player 1 Win!!!";
    }
    else if(randomNum < randomNum2) {
        document.querySelector("h1").innerHTML = "Player 2 Win!!";
    }
    else if(randomNum = randomNum2) {
        document.querySelector("h1").innerHTML = "Draw!!";
    }
    else{
        document.querySelector("h1").innerHTML = "Something Error!!";
    }

    dice.innerHTML = "Play Again!"
}
