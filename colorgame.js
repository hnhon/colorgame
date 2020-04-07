var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var newColorButton = document.querySelector("#newColor");
var display = document.querySelector("#display");
var winMsg = document.querySelector("#inLineBlock");
var numSquares = 6;
var square = document.querySelectorAll(".img");
var gameColor;
var userColor;

reset();

hardButton.addEventListener("click", function(){
  hardButton.classList.add("selected");
  easyButton.classList.remove("selected");
  winMsg.textContent = "";
  numSquares = 6;
  reset();
})

easyButton.addEventListener("click", function(){
  hardButton.classList.remove("selected");
  easyButton.classList.add("selected");
  winMsg.textContent = "";
  numSquares = 3;
  reset();
})

newColorButton.addEventListener("click", function(){
  winMsg.textContent = "";
  reset();
})

hardButton.addEventListener("mouseover", function(){
  hardButton.classList.add("hover");
  console.log("mouseover");
})

easyButton.addEventListener("mouseover", function(){
  easyButton.classList.add("hover");
})

newColorButton.addEventListener("mouseover", function(){
  newColorButton.classList.add("hover");
})

hardButton.addEventListener("mouseout", function(){
  hardButton.classList.remove("hover");
  console.log("mouseout");
})

easyButton.addEventListener("mouseout", function(){
  easyButton.classList.remove("hover");
})

newColorButton.addEventListener("mouseout", function(){
  newColorButton.classList.remove("hover");
})




function reset (){
  for (var i = 0; i<6; i++){
    square[i].classList.remove("hidden");
  };
  for (i = 0; i<numSquares; i++){
    randomColor ();
    square[i].style.backgroundColor = bgColor;
  };
  for (i = numSquares; i<6; i++){
    square[i].classList.add("hidden");
  };
  gamePickSquare();
  userPickSquare();
}

function gamePickSquare (){
   var n = getRandomIntInclusive(0, numSquares-1);
   gameColor = square[n].style.backgroundColor;
   display.textContent = gameColor.toUpperCase();
   console.log(n);
   console.log(gameColor);
}

function userPickSquare (){
  for (var i=0; i<numSquares; i++){
    square[i].addEventListener("click", function(){
      userColor = this.style.backgroundColor;
      console.log(userColor);
      // alert ("why is it looping first");
      if (gameColor === userColor) {
        // alert ("why is it looping second?");
        for (var j=0; j<numSquares; j++){
          square[j].classList.remove ("hidden");
          square[j].style.backgroundColor = gameColor;
        }
        winMsg.textContent = "You Won!";
      }
      else {
        // alert ("not win");
        this.classList.add ("hidden");
        winMsg.textContent = "Try Again";
      }
    })
  }
}

function randomColor (){
  var r = Math.floor (Math.random()*256);
  var g = Math.floor (Math.random()*256);
  var b = Math.floor (Math.random()*256);
  bgColor = ("rgb("+r+", "+g+", "+b+")");
}

//inclusive min and max
function getRandomIntInclusive (min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
