var p1Button = document.querySelector("button");
var p2Button = document.querySelectorAll("button")[1];
var p1Display = document.querySelector("span");
var p2Display = document.querySelectorAll("span")[1];
var reset = document.getElementById("reset");
var numInput = document.querySelector("input");
var winScoreDisplay = document.getElementById("display");
var p1Score = 0; 
var p2Score = 0;
var winScore = 5; 
var gameover = false;

p1Button.addEventListener("click",function() {
	if(!gameover){
		p1Score++;
		if(p1Score === winScore){
			gameover = true;
			p1Display.classList.add("win");
		}	
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener("click",function() {
	if(!gameover){
		p2Score++;
		if(p2Score === winScore){
			gameover = true;
			p2Display.classList.add("win");
		}	
		p2Display.textContent = p2Score;
	}
});

reset.addEventListener("click",function() {
	resetFunc();
});

numInput.addEventListener("change" , function() {
	winScoreDisplay.textContent = numInput.value;
	winScore = Number(numInput.value);
	resetFunc();
})

function resetFunc() {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("win");
	p2Display.classList.remove("win");
	gameover = false;
};



